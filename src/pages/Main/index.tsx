import { useState } from 'react';
import { RouteObject } from 'react-router-dom';

import SearchFilter from './SearchFilter';
import { useGithubUserQuery } from '@/hooks/useGetGithubUser';
import { Badge } from '@/components/ui/badge';

export default function Main() {
    const [searchFilterValue, setSearchFilterValue] = useState('');
    const { data, isLoading } = useGithubUserQuery(searchFilterValue);

    const user = {
        login: 'streamich',
        avatar_url: 'https://avatars.githubusercontent.com/u/9773803?v=4',
        html_url: 'https://github.com/streamich',
        followers_url: 'https://api.github.com/users/streamich/followers',
        repos_url: 'https://api.github.com/users/streamich/repos',
        name: 'Va Da',
        location: 'Switzerland',
        bio: 'Contributing to diverse public domain and OSS projects.',
        public_repos: 400,
        followers: 1789,
        following: 603,
        created_at: '2014-11-15T20:58:02Z',
        updated_at: '2024-03-07T21:05:06Z',
    };

    return (
        <>
            <div className="flex flex-row justify-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Github Users Viewer
                </h1>
            </div>
            <div className="flex flex-row mt-20 ">
                <div className="basis-2/6	border-w flex flex-col ">
                    <SearchFilter filterValueSetter={setSearchFilterValue} />
                    <div className="border-white border border-double min-w-32 min-h-32 rounded-lg">
                        <div>user info</div>
                        <div className="flex flex-row justify-evenly">
                            <div>avatar</div>
                            <Badge>{data?.login}</Badge>
                            <Badge>{data?.location}</Badge>
                        </div>
                        <div className="">{data?.bio}</div>
                        <div className="flex flex-row justify-evenly">
                            <>
                                <span>user created:</span>{' '}
                                <Badge>{data?.created_at}</Badge>
                            </>
                            <>
                                <span>last update:</span>{' '}
                                <Badge>{data?.updated_at}</Badge>
                            </>
                            \{' '}
                        </div>
                    </div>
                </div>
                <div className="basis-4/6	"></div>
            </div>
        </>
    );
}

export const MainRoute: RouteObject = {
    path: '/',
    element: <Main />,
};
