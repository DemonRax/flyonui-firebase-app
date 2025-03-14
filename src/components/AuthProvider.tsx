import React, { ReactNode, useState } from 'react';

import { User } from '../types';
import { AuthContext } from './AuthHook';


type AuthProps = {
    children: ReactNode;
};

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
    const [user, setUser] = useState(null as User | null);
    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};