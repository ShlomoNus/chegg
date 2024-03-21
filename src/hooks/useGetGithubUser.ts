import { GithubUserApiInstance } from '@/services/api/github';
import { User } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs'


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


function formatDate(date:string){
    return dayjs(date).format('DD/MM/YYYY');
}

const x = {
    "login": "streamich",
    "avatar_url": "https://avatars.githubusercontent.com/u/9773803?v=4",
    "html_url": "https://github.com/streamich",
    "followers_url": "https://api.github.com/users/streamich/followers",
    "repos_url": "https://api.github.com/users/streamich/repos",
    "name": "Va Da",
    "location": "Switzerland",
    "bio": "Contributing to diverse public domain and OSS projects.",
    "public_repos": 400,
    "followers": 1789,
    "following": 603,
    "created_at": "2014-11-15T20:58:02Z",
    "updated_at": "2024-03-07T21:05:06Z",
    }


async function getUser(user:string ){
    let {data}=  await GithubUserApiInstance.get<User>(user)

    data = x;
    data.created_at=formatDate(data.created_at)
    data.updated_at=formatDate(data.updated_at)
    return data;
}