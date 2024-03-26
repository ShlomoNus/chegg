import AppLoader from '@/components/AppLoader';
import { Button } from '@/components/ui/button';
import { useGetUserDetailsQuery } from '@/hooks/useGetGithubUser';
import { segmentAtom } from '@/state/atoms/detailsAtom';
import { useAtomValue } from 'jotai';
import capitalize from 'lodash.capitalize';
import LoaderWrapper from './LoaderWrapper';
import Error from './Error';
import { useEffect } from 'react';
import { useFirstMountState } from 'react-use';

export default function UsersDetails({
    user,
    max,
}: {
    user: string;
    max: number;
}) {
    const segment = useAtomValue(segmentAtom);
    const isFirstMount = useFirstMountState();

    const {
        data,
        isFetching,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        isError,
        refetch,
    } = useGetUserDetailsQuery(user, segment, max);

    useEffect(() => {
        if (!isFirstMount) {
            refetch();
        }
    }, [segment, user]);

    const content =
        isLoading || isFetching ? (
            <LoaderWrapper />
        ) : isError ? (
            <Error segment={segment} />
        ) : (
            <ul className="px-5 mb-6 ml-6 list-disc [&>li]:mt-2 scrollbar scrollbar-thumb-rose-500 overflow-y-auto overflow-x-hidden max-h-[250px]">
                {data!.pages.map(page => (
                    <>
                        {page.details.map(({ html_url, name }, index) => (
                            <li className="hover:underline" key={index}>
                                <a href={html_url}>{name}</a>
                            </li>
                        ))}
                    </>
                ))}
            </ul>
        );

    const page = data?.pages.length;

    return (
        <div className="border-white border border-double rounded-3xl mt-10 p-5 px-12 h-[400px] min-w-96 flex flex-col items-center">
            <div className="flex flex-row justify-center mr-2 mb-6 items-center sticky top-0">
                <h3 className=" text-2xl font-semibold tracking-tight">
                    {capitalize(segment)}
                </h3>
            </div>
            {content}
            <Button
                disabled={isFetchingNextPage || page! >= max}
                className="hover:underline cursor-pointer"
                onClick={() => {
                    fetchNextPage();
                }}
            >
                Load more {segment}
            </Button>
        </div>
    );
}
