import { Segment } from '@/types/api';

export default function Error({ segment }: { segment: Segment }) {
    return (
        <div className="flex flex-row justify-center mt-10 ">
            <div className="text-lg font-semibold">
                Error on {segment} Fetching.
            </div>
        </div>
    );
}
