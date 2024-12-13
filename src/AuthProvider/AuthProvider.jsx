import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const register = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const ProfileUpdate = (name, address) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      address: address,
    });
  };

  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
    localStorage.removeItem("access-token");
  };

  useEffect(() => {
    const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      // console.log(currentUser);
      const userInfo = { email: currentUser?.email };
      // console.log(currentUser.displayName)
      if (currentUser) {
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res?.data?.token) {
            // set token in localstorage
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }

      return () => {
        UnSubscribe();
      };
    });
  }, []);

  const authInfo = {
    register,
    login,
    logOut,
    user,
    loader,
    ProfileUpdate,
    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
