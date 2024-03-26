import UserInfo from './UserInfo';
import { User } from '@/types/api';

export default function MainContent({ userInfo }: { userInfo: User }) {
    return (
        <div className="flex flex-row mt-10 ">
            <div className="basis-2/6	border-w flex flex-col max-w-[350px] items-start">
                <UserInfo user={userInfo} />
            </div>
            <div className="basis-4/6">
                
            </div>
        </div>
    );
}
