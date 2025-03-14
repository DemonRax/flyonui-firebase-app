import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './components/AuthProvider.tsx';
import { App } from './App.tsx';

import './index.css';
import './lang/i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            <AuthProvider>
                <BrowserRouter basename="/">
                    <App />
                </BrowserRouter>
            </AuthProvider>
        </Suspense>
    </StrictMode>,
);
