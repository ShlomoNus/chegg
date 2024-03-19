import { GithubUserApiInstance } from '@/services/api/github';
import { useQuery } from '@tanstack/react-query';



export function useGithubUserQuery(user:string) {

    console.log(user);
    
   return useQuery<any>({
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
    const {data}=  await GithubUserApiInstance.get(user)
    return data;
}