import React, { useCallback } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

import { useAuth } from './AuthHook';

export const Logout: React.FC = () => {
    const { setUser } = useAuth();
    const { t } = useTranslation();


    const onLogout = useCallback(() => {
        signOut(getAuth()).then(() => {
            if (setUser) setUser(null);
        });
    }, [setUser]);

    return <a className="btn btn-error btn-soft btn-block" onClick={onLogout}>
        <span className="icon-[tabler--logout]"></span>
        {t('logout')}
    </a>;
};