import UserInfo from './UserInfo';
import { User } from '@/types/api';
import UsersDetails from './UsersDetails';
import { useAtomValue } from 'jotai';

import { segmentAtom } from '@/state/atoms/detailsAtom';

export default function MainContent({ userInfo }: { userInfo: User }) {

    const segment = useAtomValue(segmentAtom);
    const { followers, public_repos, login } = userInfo;
    const max= segment ==='followers'? Math.ceil(followers/10):Math.ceil(public_repos/10)
    return (
        <div className="flex flex-row mt-10 gap-32 justify-center">
            <div className=" flex flex-col max-w-[350px] items-start ">
                <UserInfo user={userInfo} />
            </div>
            <div className="">
                <UsersDetails
                    user={login}
                    max={max}
                />
            </div>
        </div>
    );
}
