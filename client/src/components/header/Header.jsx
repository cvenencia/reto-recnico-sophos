import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/home-svgrepo-com.svg';
import './styles.scss';

export default function Header({ links, title }) {
    return (
        <header className='header'>
            <div>
                <Link to='/'>
                    <img src={HomeIcon} alt='Ícono de hogar' />
                </Link>
                <span>{title}</span>
            </div>
            <nav>
                <ul>
                    {links &&
                        links.map((link, index) => <li key={index}>{link}</li>)}
                </ul>
            </nav>
        </header>
    );
}
