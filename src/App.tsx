import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Menu } from './components/Menu.tsx';

import { Home } from './pages/Home.tsx';

export const App: FC = () => {
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
