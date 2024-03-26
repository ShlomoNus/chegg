import AppLoader from '@/components/AppLoader';
import { useGetUserDetailsQuery } from '@/hooks/useGetGithubUser';
import { Segment } from '@/types/api';
import capitalize from 'lodash.capitalize';

export default function UsersDetails({
    segment,
    user,
    followersNum,
    reposNum,
}: {
    user: string;
    segment: Segment;
    followersNum: number;
    reposNum: number;
}) {
    const { data, isLoading, refetch } = useGetUserDetailsQuery(user, segment);

    const content = isLoading ? (
        <AppLoader size={20} />
    ) : (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2 scrollbar scrollbar-thumb-rose-500 overflow-y-auto overflow-x-hidden max-h-[250px]">
            {data!.details.map(({ html_url, name }, index) => (
                <li className="hover:underline" key={index}>
                    <a href={html_url}>{name}</a>
                </li>
            ))}
        </ul>
    );
    return (
        <div className="border-white border border-double rounded-3xl mt-10 p-5 px-12 h-[360px] min-w-96">
            <div className="flex flex-row justify-center mr-2 mb-6 items-center sticky top-0">
                <h3 className=" text-2xl font-semibold tracking-tight">
                    {capitalize(segment)}
                </h3>
            </div>
            {content}
        </div>
    );
}
