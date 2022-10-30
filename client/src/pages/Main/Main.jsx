import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';

export default function Main() {
    const links = [
        <Link to='/client'>Cliente</Link>,
        <Link to='/admin'>Administrador</Link>,
    ];

    return <Header title='Main page' links={links} />;
}
