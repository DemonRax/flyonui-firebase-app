import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { User } from '../types.ts';

export const useAuth = (): Partial<ContextProps> => useContext(AuthContext);

type ContextProps = {
    user: User | null;
    authenticated: boolean;
    setUser: Dispatch<SetStateAction<User | null>>;
};

export const AuthContext = createContext<Partial<ContextProps>>({});