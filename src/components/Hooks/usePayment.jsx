import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePayment = () => {
    const axiosPublic = useAxiosPublic()
    const {data: payments=[]} = useQuery({
        queryKey: "payments", 
        queryFn: async()=>{
            const res = await axiosPublic.get(`/payments`)
            return res.data
        }
    })
    return {payments}
};

export default usePayment;