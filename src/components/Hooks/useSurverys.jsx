import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSurverys = () => {
  const axiosPublic = useAxiosPublic();

  const { data: surverys = [] } = useQuery({
    queryKey: "surverys",
    queryFn: async () => {
      const res = await axiosPublic.get("/surverys");
      return res.data;
    },
  });

  return { surverys };
};

export default useSurverys;
