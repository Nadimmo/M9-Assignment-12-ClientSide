import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useSurvey = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext)

  const { data: survey = [] } = useQuery({
    queryKey: ["survey", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/survey?email=${user.email}`);
      return res.data;
    },
  });

  return { survey };
};

export default useSurvey;
