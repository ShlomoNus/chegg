import { Badge } from '@/components/ui/badge';
import { User } from '@/types/api';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import capitalize from 'lodash.capitalize';

export default function UserInfo({ user }: { user: User }) {
    const {
        avatar_url,
        html_url,
        login,
        location,
        bio,
        created_at,
        followers,
        public_repos,
        updated_at,
    } = user;

    return (
        <div className="border-white border border-double rounded-3xl mt-10 p-5">
            <div className="flex flex-row justify-center mr-2 mb-6 items-center">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    User Info
                </h3>
                {Boolean(avatar_url) ? (
                    <Avatar className="h-5 w-5 ml-5">
                        <AvatarImage sizes="" src={avatar_url} />
                    </Avatar>
                ) : null}
            </div>

            <div className="flex flex-row justify-start mb-4">
                <div className="flex flex-row justify-start mr-2 ">
                    <div className="mr-1">I am</div>
                    <a href={html_url}>
                        {' '}
                        <Badge> {capitalize(login)}</Badge>{' '}
                    </a>
                </div>

                {Boolean(location) ? (
                    <>
                        from <Badge>{capitalize(location)}</Badge>
                    </>
                ) : null}
            </div>
            {Boolean(bio) ? (
                <>
                    <div className="text-lg font-semibold mb-2">
                        What do I do you ask?
                    </div>
                    <div className="mb-2">I am {bio}</div>
                </>
            ) : null}
            <div className="flex flex-row justify-evenly mb-5">
                <div className="flex flex-row justify-center mr-2">
                    <div className="whitespace-nowrap mr-2">created at:</div>
                    <Badge>{created_at}</Badge>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="whitespace-nowrap mr-2">Update at:</div>
                    <Badge>{updated_at}</Badge>
                </div>
            </div>
            <div className="flex flex-row justify-start mb-5">
                <div className="whitespace-nowrap mr-2 underline">
                    Public Repos:
                </div>
                <Badge className="hover:underline cursor-pointer">
                    {public_repos}
                </Badge>
            </div>
            <div className="flex flex-row justify-start mb-5">
                <div className="whitespace-nowrap mr-2 underline">
                    Followers:
                </div>
                <Badge className="hover:underline cursor-pointer">
                    {followers}
                </Badge>
            </div>
        </div>
    );
}
