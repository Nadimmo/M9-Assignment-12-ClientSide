import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation()
//   console.log(location.pathname)
  if (loader) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  }
  if(user){
    return children
  }
  return <Navigate  state={location?.pathname} to={'/login'} replace={true} />
};

export default PrivateRoute;
