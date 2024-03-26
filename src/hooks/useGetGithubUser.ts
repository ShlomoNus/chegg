import { GithubUserApiInstance } from '@/services/api/github';
import { User } from '@/types/api';
import { formateDate } from '@/utils/date';
import { useQuery } from '@tanstack/react-query';


export function useGithubUserQuery(user:string) {

    
   return useQuery<User>({
        queryKey: ['githubUser',{user}],
        queryFn: ()=>getUser(user),
        enabled:!!user,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        staleTime:Infinity,
        refetchInterval:false,
    });

}





async function getUser(user:string ){
    let {data}=  await GithubUserApiInstance.get<User>(user)

    data.created_at=formateDate(data.created_at)
    data.updated_at=formateDate(data.updated_at)
    return data;
}