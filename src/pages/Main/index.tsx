import { useState } from 'react';
import { RouteObject } from 'react-router-dom';

import { useGetGithubUserQuery } from '@/hooks/useGetGithubUser';

import SearchFilter from './SearchFilter';
import LoaderWrapper from './MainContent/LoaderWrapper';
import MainContent from './MainContent';
import Error from './MainContent/Error';

export default function Main() {
    const [searchFilterValue, setSearchFilterValue] = useState('');
    const { data, isLoading, isError } = useGetGithubUserQuery(searchFilterValue);
    const content = !Boolean(searchFilterValue) ? null : isLoading ? (
        <LoaderWrapper />
    ) : isError ? (
        <Error />
    ) : (
        <MainContent userInfo={data!!} />
    );

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                    Github Users Viewer
                </h1>
                <SearchFilter filterValueSetter={setSearchFilterValue} />
            </div>
            {content}
        </>
    );
}

export const MainRoute: RouteObject = {
    path: '/',
    element: <Main />,
};
