import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSurvey = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)

  const { data: survey = [] } = useQuery({
    queryKey: ["survey", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/survey?email=${user.email}`);
      return res.data;
    },
  });

  return { survey };
};

export default useSurvey;
