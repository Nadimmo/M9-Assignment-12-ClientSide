import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSurverys = () => {
  const axiosSecure = useAxiosSecure();

  const { data: surverys = [] } = useQuery({
    queryKey: "surverys",
    queryFn: async () => {
      const res = await axiosSecure.get("/surverys");
      return res.data;
    },
  });

  return { surverys };
};

export default useSurverys;
