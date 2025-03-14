import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useLocalStorage } from '../utils';

const languages = [
    { lang: 'en', id: 197374 },
    { lang: 'de', id: 197571 },
];

export const Language: FC = () => {
    const [, i18n] = useTranslation();
    const [lang, setLang] = useLocalStorage('lang', 'en');

    const changeLanguage = useCallback(
        (lng: string) => {
            i18n.changeLanguage(lng);
            setLang(lng);
        },
        [i18n, setLang],
    );

    return (
        <div className="dropdown relative inline-flex rtl:[--placement:bottom-start]">
            <button
                type="button"
                className="dropdown-toggle btn btn-primary btn-outline btn-circle"
            >
                {languages.map((lng) => {
                    return <img key={lng.id} className={`size-7 ${lang == lng.lang || 'hidden'}`}
                        src={`https://cdn-icons-png.flaticon.com/128/197/${lng.id}.png`}
                        alt={lng.lang} />;
                })}
            </button>
            <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden"
            >
                {languages.map((lng) => {
                    return <li key={lng.id} className="size-8 mb-2 -mx-2">
                        <button
                            type="button"
                            className="dropdown-toggle btn btn-primary btn-outline btn-circle"
                            onClick={() => changeLanguage(lng.lang)}
                        >
                            <img className="size-6" src={`https://cdn-icons-png.flaticon.com/128/197/${lng.id}.png`}
                                alt={lng.lang} />
                        </button>
                    </li>;
                })}
            </ul>
        </div>
    );
};
