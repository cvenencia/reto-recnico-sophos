import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';

export default function Admin({ children }) {
    const links = [
        <Link to='claim'>Reclamar rentas</Link>,
        <Link to='most-frequent-client'>Cliente más frecuente</Link>,
        <Link to='most-rented-game'>Juego más rentado</Link>,
        <Link to='sales-of-day'>Ventas del día</Link>,
        <Link to='least-rented-by-age-group'>Menos rentado por edad</Link>,
    ];

    return (
        <>
            <Header title='Admin' links={links}></Header>
            {children}
        </>
    );
}
