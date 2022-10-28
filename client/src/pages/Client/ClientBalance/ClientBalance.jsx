import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../Client';
import { getClientBalance } from '../../../services/api/client';
import './styles.scss';

export default function ClientBalance() {
    const { id } = useParams();
    const [list, setList] = useState([]);
    const [user, setUser] = useState([]);

    const load = useCallback(
        async () => getClientBalance(id).then(setList),
        [id]
    );

    useEffect(() => {
        (async () => await load())();
    }, [load]);

    useEffect(() => {
        if (list.length === 0) return;

        const balance = list.reduce((prev, curr) => {
            if (curr.returned) return prev;
            return prev + curr.price;
        }, 0);
        setUser({ fullName: list[0].fullName, balance: balance });
    }, [list]);

    return (
        <Client>
            <h1>
                Cliente: <span>{user.fullName}</span>
            </h1>
            <p>
                Balance: <span>{user.balance}</span>
            </p>
            {list.length !== 0 && (
                <table border={1}>
                    <caption>Juegos rentados</caption>
                    <thead>
                        <tr>
                            <td>Título de juego</td>
                            <td>Precio</td>
                            <td>Fecha de renta</td>
                            <td>Fecha de devolución</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((e, index) => {
                            return (
                                <tr key={index}>
                                    <td>{e.title}</td>
                                    <td>{e.price}</td>
                                    <td>
                                        {(e.rentalDate &&
                                            e.rentalDate.split('T')[0]) ||
                                            '-'}
                                    </td>
                                    <td>
                                        {(e.returnDate &&
                                            e.returnDate.split('T')[0]) ||
                                            '-'}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </Client>
    );
}
