import { Outlet } from 'react-router-dom';


export default function MainLayout() {

    return (
        <div className="p-3">

        
            <Outlet />
        </div>
    );
}
