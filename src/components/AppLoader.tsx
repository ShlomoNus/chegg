import { ClimbingBoxLoader } from 'react-spinners';

export default function AppLoader({ size = 50 }: { size?: number }) {
    return (
        <ClimbingBoxLoader
            color="#d6365b"
            cssOverride={{}}
            loading
            size={size}
        />
    );
}
