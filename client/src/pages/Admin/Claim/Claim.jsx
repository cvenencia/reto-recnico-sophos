import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { claimRental, getOverdueClients } from '../../../services/api/rental';
import { formatTimestamp } from '../../../services/util';
import Admin from '../Admin';

export default function Claim() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const load = () => {
        getOverdueClients().then(setData);
        setLoading(false);
    };

    useEffect(load, []);

    const handleClaim = async e => {
        await claimRental(e.target.dataset.id);
        setLoading(true);
        load();
    };

    return (
        <Admin>
            {loading && (
                <ClipLoader
                    color='#36d7b7'
                    size={100}
                    cssOverride={{
                        margin: 'auto',
                        display: 'block',
                    }}
                />
            )}
            {!loading && (
                <>
                    <h1>Clientes atrasados</h1>
                    {data.length !== 0 && (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Título de juego</td>
                                    <td>Nombre de cliente</td>
                                    <td>Plataforma</td>
                                    <td>Fecha de renta</td>
                                    <td>Acción</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((e, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{e.title}</td>
                                            <td>{e.fullName}</td>
                                            <td>{e.platform}</td>
                                            <td>
                                                {formatTimestamp(e.rentalDate)}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={handleClaim}
                                                    data-id={e.id}
                                                >
                                                    Reclamar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </>
            )}
        </Admin>
    );
}
