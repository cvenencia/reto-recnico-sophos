import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';

export default function Client({ children }) {
    const links = [
        <Link to='/client/balance'>Balance</Link>,
        <Link to='/game-list'>Consulta de juegos</Link>,
    ];

    return (
        <>
            <Header title='Cliente' links={links}></Header>
            {children}
        </>
    );
}
