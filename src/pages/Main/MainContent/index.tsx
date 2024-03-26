import UserInfo from './UserInfo';
import { User } from '@/types/api';
import UsersDetails from './UsersDetails';

export default function MainContent({ userInfo }: { userInfo: User }) {
    const { followers, public_repos, login } = userInfo;
    return (
        <div className="flex flex-row mt-10 gap-32 justify-center">
            <div className=" flex flex-col max-w-[350px] items-start ">
                <UserInfo user={userInfo} />
            </div>
            <div className="">
                <UsersDetails
                    user={login}
                    segment={'followers'}
                    followersNum={followers}
                    reposNum={public_repos}
                />
            </div>
        </div>
    );
}
