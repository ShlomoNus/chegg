import { useState } from 'react';
import { RouteObject } from 'react-router-dom';

import { useGithubUserQuery } from '@/hooks/useGetGithubUser';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import capitalize from 'lodash.capitalize';
import SearchFilter from './SearchFilter';
import { formateDate } from '@/utils/date';

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
                <div className="basis-2/6	border-w flex flex-col max-w-[350px] items-start">
                    <SearchFilter filterValueSetter={setSearchFilterValue} />
                    <div className="border-white border border-double rounded-3xl mt-10 p-5">
                        <div className="flex flex-row justify-center mr-2 mb-6">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                User Info
                            </h3>
                            {Boolean(user.avatar_url) ? (
                                <Avatar className="h-5 w-5 rounded-full ml-5">
                                    <AvatarImage
                                        sizes=""
                                        src={user.avatar_url}
                                    />
                                </Avatar>
                            ) : null}
                        </div>

                        <div className="flex flex-row justify-evenly mb-4">
                            I am <a href={user.html_url}> <Badge> {capitalize(user.login)}</Badge> </a>from{' '}
                            <Badge>{capitalize(user?.location)}</Badge>
                        </div>
                        <div className="text-lg font-semibold mb-2">
                            What do I do you ask?
                        </div>
                        <div className="mb-2">I am {user?.bio}</div>
                        <div className="flex flex-row justify-evenly mb-5">
                            <div className="flex flex-row justify-center mr-2">
                                <div className="whitespace-nowrap mr-2">
                                    created at:
                                </div>
                                <Badge>{formateDate(user?.created_at)}</Badge>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="whitespace-nowrap mr-2">
                                    Update at:
                                </div>
                                <Badge>{formateDate(user?.updated_at)}</Badge>
                            </div>
                        </div>
                        <div className="flex flex-row justify-start mb-5">
                            <div className="whitespace-nowrap mr-2 underline">
                                Public Repos:
                            </div>
                            <Badge className="hover:underline cursor-pointer">
                                {user?.public_repos}
                            </Badge>
                        </div>
                        <div className="flex flex-row justify-start mb-5">
                            <div className="whitespace-nowrap mr-2 underline">
                                Followers:
                            </div>
                            <Badge className="hover:underline cursor-pointer">
                                {user?.followers}
                            </Badge>
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
