import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';

const useReports = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const {data:reports=[]} = useQuery({
        queryKey:['reports', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/reports?email=${user?.email}`)
            return res.data
        }
    })
   return {reports}
}

export default useReports