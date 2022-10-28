import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { getMostFrequentClient } from '../../../services/api/rental';
import Admin from '../Admin';

export default function MostFrequent() {
    const [data, setData] = useState({});

    useEffect(() => {
        getMostFrequentClient().then(setData);
    }, []);

    return (
        <Admin>
            {!data.client && (
                <ClipLoader
                    color='#36d7b7'
                    size={100}
                    cssOverride={{
                        margin: 'auto',
                        display: 'block',
                    }}
                />
            )}
            (
            {data.client && (
                <>
                    <h1>Cliente más frecuente</h1>
                    <p>
                        Nombre:{' '}
                        <span>
                            {data.client.firstName} {data.client.lastName}
                        </span>
                    </p>
                    <p>
                        Cantidad de juegos rentados:{' '}
                        <span>{data && data.count}</span>
                    </p>
                </>
            )}
            )
        </Admin>
    );
}
