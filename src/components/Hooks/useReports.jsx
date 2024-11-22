import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

const useReports = () => {
    const axiosPublic = useAxiosPublic()
    const {data:reports=[]} = useQuery({
        queryKey:'reports',
        queryFn: async()=>{
            const res = await axiosPublic.get('/reports')
            return res.data
        }
    })
   return {reports}
}

export default useReports