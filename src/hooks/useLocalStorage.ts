import { stat } from 'fs';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

function rundomString() {
    return Math.random().toString(36).substring(2);
}

function fakeToken() {
    return rundomString() + rundomString();
}

const dayInMiliseconds = 86400000;

export function useGithubToken() {
    const [githubToken, setGithubToken] = useLocalStorage<{
        token: string;
        ttl: number;
    }>('githubToken');

    const [isLogInNeeded, setLogInStatus] = useState(false);

    function validateToken() {
        if (!githubToken || githubToken.ttl < Date.now()) {
            setGithubToken(undefined);
            setLogInStatus(true);

            return;
        }

        setLogInStatus(false);
    }
    useEffect(() => {
        validateToken();
    }, [githubToken]);

    function githubTokenSetter() {
        const token = fakeToken();
        setGithubToken({ token, ttl: Date.now() + dayInMiliseconds });
    }
    return { githubTokenSetter, isLogInNeeded };
}
