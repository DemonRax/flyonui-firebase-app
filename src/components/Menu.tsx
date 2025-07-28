import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuth } from './AuthHook.ts';

import { Login } from './Login.tsx';
import { Logout } from './Logout.tsx';
import { Language } from './Language.tsx';
import { Theme } from './Theme.tsx';

export const Menu: FC = () => {
    const { authenticated, user } = useAuth();
    const { t } = useTranslation();

    return (
        <nav className="navbar bg-base-100 rounded-box shadow">
            <div className="flex flex-1 items-center">
                <a className="link text-base-content/90 link-neutral text-xl font-semibold no-underline" href="#">
                    {t('title')}
                </a>
            </div>
            <div className="navbar-end flex items-center gap-4">
                <Language />
                <Theme />
                {authenticated && (
                    <div
                        className={
                            'dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]' +
                            (!authenticated && ' hidden')
                        }
                    >
                        <button
                            id="dropdown-scrollable"
                            type="button"
                            className="dropdown-toggle flex items-center"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                        >
                            <div className="avatar">
                                <div className="size-9 rounded-full">
                                    <img className="size-7" src={user?.imageUrl} alt={user?.name} />
                                </div>
                            </div>
                        </button>
                        <ul
                            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="dropdown-avatar"
                        >
                            <li className="dropdown-header gap-2">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.imageUrl} alt="avatar" />
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-base-content/90 text-base font-semibold">{user?.name}</h6>
                                    <small className="text-base-content/50">Admin</small>
                                </div>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <span className="icon-[tabler--user]"></span>
                                    {t('profile')}
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <span className="icon-[tabler--settings]"></span>
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <span className="icon-[tabler--receipt-rupee]"></span>
                                    Billing
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <span className="icon-[tabler--help-triangle]"></span>
                                    FAQs
                                </a>
                            </li>
                            <li className="dropdown-footer gap-2">
                                <Logout />
                            </li>
                        </ul>
                    </div>
                )}
                {authenticated || <Login />}
            </div>
        </nav>
    );
};
