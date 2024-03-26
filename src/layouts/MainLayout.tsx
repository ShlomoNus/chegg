import { Switch } from '@/components/ui/switch';
import { useGithubToken } from '@/hooks/useLocalStorage';
import { useTheme } from '@/state/providers/theme';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';



export default function MainLayout() {
    const navigate = useNavigate();

    const {isLogInNeeded} = useGithubToken()
    const { setTheme, isDark } = useTheme();
   
    const imagePath = isDark? '/src/assets/github-mark-white.png': '/src/assets/github-mark.png';


    useEffect(()=>{
        
        if(isLogInNeeded){
            navigate('/login')
        }

    },[isLogInNeeded])




    return (
        <div className="p-5 w-vs h-screen ">
            <div className='flex flex-row justify-end pr-5 sticky top-5 left-5 right-5'>   
            <div className='mr-auto max-h-14 max-w-14'>
            <img src={imagePath} alt="Github Logo" />
            </div>
            <p className="text-sm text-muted-foreground mr-3">Dark mood</p>
                <Switch
                checked={isDark}
                onCheckedChange={() => setTheme(isDark ? 'light' : 'dark')}
            /></div>
            <Outlet />
        </div>
    );
}
