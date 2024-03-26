import { useGetUserUserDetailsQuery } from '@/hooks/useGetGithubUser'
import { Segment } from '@/types/api'

export default function UsersDetails(user:string,segment:Segment) {
    const TdataKeyName = segment === 'repos'?'name':'login'
   const {data,isLoading}= useGetUserUserDetailsQuery(user,segment)
  return (
    <div>UsersDetails</div>
  )
}
