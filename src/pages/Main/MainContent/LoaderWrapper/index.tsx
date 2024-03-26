import AppLoader from '@/components/AppLoader';

export default function LoaderWrapper() {
    return (
        <div className="flex flex-row justify-center mt-40">
            <AppLoader />
        </div>
    );
}
