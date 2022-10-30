import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { getFilteredGames } from '../../../services/api/game';
import Client from '../Client';
import './styles.scss';

export default function GameSearch() {
    const [gameList, setGameList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({
        director: '',
        producer: '',
        protagonistName: '',
    });

    useEffect(() => {
        getFilteredGames(
            filter.director,
            filter.producer,
            filter.protagonistName
        )
            .then(setGameList)
            .then(() => setLoading(false));
    }, [filter]);

    const handleChangeFilter = e => {
        setFilter(filter => {
            return { ...filter, [e.target.dataset.type]: e.target.value };
        });
    };

    return (
        <Client>
            <h1>Consulta de juegos</h1>
            <div className='input-container'>
                <label htmlFor='producer'>Productor: </label>
                <input
                    id='producer'
                    type='text'
                    onChange={handleChangeFilter}
                    data-type='producer'
                />
            </div>
            <div className='input-container'>
                <label htmlFor='director'>Director: </label>
                <input
                    id='director'
                    type='text'
                    onChange={handleChangeFilter}
                    data-type='director'
                />
            </div>
            <div className='input-container'>
                <label htmlFor='protagonistName'>Protagonista: </label>
                <input
                    id='protagonistName'
                    type='text'
                    onChange={handleChangeFilter}
                    data-type='protagonistName'
                />
            </div>
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
            {gameList.length !== 0 && (
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Título de juego</td>
                            <td>Protagonista</td>
                            <td>Director</td>
                            <td>Productor</td>
                            <td>Fecha de lanzamiento</td>
                        </tr>
                    </thead>
                    <tbody>
                        {gameList.map((e, index) => {
                            return (
                                <tr key={index}>
                                    <td>{e.title}</td>
                                    <td>{e.protagonistName}</td>
                                    <td>{e.director}</td>
                                    <td>{e.producer}</td>
                                    <td>{e.launchDate.split(' ')[0]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </Client>
    );
}
