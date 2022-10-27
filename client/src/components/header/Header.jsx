import React from 'react';
import './styles.scss';

export default function Header({ links, title }) {
    return (
        <header className='header'>
            <div>{title}</div>
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
