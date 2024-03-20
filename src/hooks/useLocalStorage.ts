import { useLocalStorage } from 'react-use'

function rundomString() {
    return Math.random().toString(36).substring(2);
};

function fakeToken() {
    return rundomString() + rundomString();
};



export  function useGithubToken() {
    const [githubToken, setGithubToken] = useLocalStorage<{ token: string, ttl: number }>('githubToken')

    function validateToken() {
        if (!githubToken) return false;

        if (Date.now() > githubToken.ttl) {
            setGithubToken(undefined)
            return false
        }

    
        return true
    }

    const token = validateToken()

    function githubTokenSetter() {
        const token = fakeToken();
        setGithubToken({token,ttl:Date.now()})

    }



    return { token,githubTokenSetter }
}
