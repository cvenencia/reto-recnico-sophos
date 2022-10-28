import React, { useState } from 'react';
import { useEffect } from 'react';
import { getLeastRentedGamesByAgeGroup } from '../../../services/api/rental';
import Admin from '../Admin';

export default function LeastRented() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getLeastRentedGamesByAgeGroup().then(setList);
    }, []);

    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <Admin>
            <h1>Juego menos rentado por edad</h1>
            {list.length !== 0 && (
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Título de juego</td>
                            <td>Edades</td>
                            <td>Cantidad</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((e, index) => {
                            return (
                                <tr key={index}>
                                    <td>{e.game.title}</td>
                                    <td>{`De ${e.startAge} a ${e.finishAge} años`}</td>
                                    <td>{e.count}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </Admin>
    );
}
