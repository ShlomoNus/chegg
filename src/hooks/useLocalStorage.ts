import { stat } from 'fs';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use'

function rundomString() {
    return Math.random().toString(36).substring(2);
};

function fakeToken() {
    return rundomString() + rundomString();
};


const dayInMiliseconds =86400000;


export  function useGithubToken() {
    const [githubToken, setGithubToken] = useLocalStorage<{ token: string, ttl: number }>('githubToken')

    const [state,setLogInStatus] = useState({isLoading:true,isLogInNeeded:false})



    function validateToken() {
        if (!!githubToken) {
            if(Date.now() > githubToken.ttl){
                setLogInStatus({isLoading:false,isLogInNeeded:true})
                return;
            }
          
        }

        setLogInStatus ({isLoading:false,isLogInNeeded:false})
    }
    useEffect(()=>{

        validateToken()


    },[githubToken])

 
    function githubTokenSetter() {
        const token = fakeToken();
        setGithubToken({token,ttl:Date.now()+ dayInMiliseconds })

    }
    return { githubTokenSetter,...state }
}
