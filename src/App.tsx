import { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Menu } from './components/Menu.tsx';

import { Home } from './pages/Home.tsx';

import { IStaticMethods } from 'flyonui/flyonui';

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

export const App: FC = () => {
    const location = useLocation();

    useEffect(() => {
        const loadFlyonui = async () => {
            await import('flyonui/flyonui');

            window.HSStaticMethods.autoInit();
        };

        loadFlyonui().catch(() => {
        });
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-base-200/60">
            <Menu />
            <div className="p-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
};
