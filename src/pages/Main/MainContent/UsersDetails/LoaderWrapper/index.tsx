import AppLoader from '@/components/AppLoader';

export default function LoaderWrapper() {
    return (
        <div className="h-full w-full flex flex-row justify-center pt-12">
        <AppLoader size={20} />
    </div>
    );
}
