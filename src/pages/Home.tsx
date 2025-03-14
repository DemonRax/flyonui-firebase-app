import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
    const { t } = useTranslation();

    return <div>
        <h1 className="text-base-content text-4xl">{t('title')}</h1>
    </div>;
};
