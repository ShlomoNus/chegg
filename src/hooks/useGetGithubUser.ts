import { GithubUserApiInstance } from '@/services/api/github';
import { Details, Segment, User, DetailsWithName } from '@/types/api';
import { formateDate } from '@/utils/date';
import {
    useInfiniteQuery,
    useQuery,
} from '@tanstack/react-query';

async function getUser(user: string) {
    let { data } = await GithubUserApiInstance.get<User>(user);

    data.created_at = formateDate(data.created_at);
    data.updated_at = formateDate(data.updated_at);
    return data;
}
export function useGetGithubUserQuery(user: string) {
    return useQuery<User>({
        queryKey: ['githubUser', { user }],
        queryFn: () => getUser(user),
        enabled: !!user,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        refetchInterval: false,
    });
}

async function getUsersDetails(user: string, segment: Segment,page:number) {
    let { data } = await GithubUserApiInstance.get<Details[]>(
        `${user}/${segment}?page=${page}&per_page=${10}`
    );

    if (data[0].login) {
        for (const detail of data) {
            detail.name = detail.login;
        }
    }


    return { details: data as DetailsWithName[], page };
}
export function useGetUserDetailsQuery(user: string, segment: Segment,max:number) {
    return useInfiniteQuery(
        
        {queryKey: ['infinit'],
        initialPageParam:1,
        maxPages:max,
        queryFn:  ({pageParam}) => getUsersDetails(user, segment,pageParam),
        getNextPageParam:(_,pages)=>{
            return pages.length+1
        }

    }
    
    );
}
