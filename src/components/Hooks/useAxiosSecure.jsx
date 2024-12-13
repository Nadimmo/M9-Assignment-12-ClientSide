import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://assignment-12-server-side-eight.vercel.app",
});
const useAxiosSecure = () => {
    const {logOut } = useContext(AuthContext)
    const navigate = useNavigate()
  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer, ${token}`
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async (error) =>{
        const status = error.response.status;
        if(status === 401 || status === 402){
          await  logOut()
            navigate('/login')
        }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
