import { GithubUserApiInstance } from '@/services/api/github';
import { Details, Segment, User } from '@/types/api';
import { formateDate } from '@/utils/date';
import { useQuery } from '@tanstack/react-query';


async function getUser(user:string ){
    let {data}=  await GithubUserApiInstance.get<User>(user)

    data.created_at=formateDate(data.created_at)
    data.updated_at=formateDate(data.updated_at)
    return data;
}
export function useGetGithubUserQuery(user:string) {

    
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

let page=1;
let perPage = 30;

let prevSegment = ''

 async function getUsersDetails(user:string,segment:Segment){
    if(segment != prevSegment){
        page=1;
    }
    let {data}=  await GithubUserApiInstance.get<Details[]>(`${user}/${segment}?page=${page}&per_page=${perPage}`)
    prevSegment =segment;
    page++;
    return {details:data,page};
}
export function useGetUserUserDetailsQuery(user:string,segment:Segment){

    return useQuery<{details:Details,page:number}>({
        queryKey: ['githubUserDetails',{user,segment}],
        queryFn: ()=>getUsersDetails(user,segment),
        enabled:!!user && !!segment,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        staleTime:Infinity,
        refetchInterval:false,
})
}




