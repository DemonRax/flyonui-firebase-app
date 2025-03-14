import { FC, useState } from 'react';

const themes = [
    { id: 'dark', name: 'Dark' },
    { id: 'light', name: 'Light' },
    { id: 'luxury', name: 'Luxury' },
];

export const Theme: FC = () => {
    const [selected, setSelected] = useState('dark');

    return (
        <div className="dropdown relative inline-flex rtl:[--placement:bottom-end]">
            <button
                type="button"
                className="dropdown-toggle btn btn-primary btn-outline btn-circle"
                aria-label="Dropdown"
            >
                <span className="icon-[tabler--aperture] block size-8"></span>
            </button>
            <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden min-w-40"
            >
                {themes.map((theme) => {
                    return <li key={theme.id}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-text w-full justify-start"
                            aria-label={theme.name}
                            value={theme.id}
                            // defaultChecked={i == 0}
                            checked={selected == theme.id}
                            onClick={() => setSelected(theme.id)}
                            onChange={() => {
                            }}
                        />
                    </li>;
                })}
            </ul>
        </div>
    );
};