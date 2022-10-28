import React, { useEffect, useState } from 'react';
import { getMostRentedGame } from '../../../services/api/rental';
import Admin from '../Admin';
import { ClipLoader } from 'react-spinners';

export default function MostRented() {
    const [data, setData] = useState({});

    useEffect(() => {
        getMostRentedGame().then(setData);
    }, []);

    return (
        <Admin>
            {!data.game && (
                <ClipLoader
                    color='#36d7b7'
                    size={100}
                    cssOverride={{
                        margin: 'auto',
                        display: 'block',
                    }}
                />
            )}
            (<h1>Juego más rentado</h1>
            <p>
                Título: <span>{data.game && data.game.title}</span>
            </p>
            <p>
                Cantidad: <span>{data && data.count}</span>
            </p>
            )
        </Admin>
    );
}
