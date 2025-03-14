import React from 'react';

export const Login: React.FC = () => {
    return <button type="button" className="flex btn btn-primary btn-outline btn-circle">
        <span className="size-9 icon-[tabler--brand-google-filled] text-primary"></span>
    </button>;
};

/*
import React, { useCallback, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { useAuth } from './AuthHook';

export const Login: React.FC = () => {
    const { setUser } = useAuth();

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged((user) => {
            if (user && setUser) {
                setUser({
                    name: user.displayName || '',
                    email: user.email || '',
                    imageUrl: user.photoURL || '',
                });
            }
        });
    }, [setUser]);

    const signIn = useCallback(() => signInWithPopup(getAuth(), new GoogleAuthProvider()), []);
    return <button type="button" className="flex btn btn-primary btn-outline btn-circle" onClick={signIn}>
        <span className="size-9 icon-[tabler--brand-google-filled] text-primary"></span>
    </button>;
};
*/