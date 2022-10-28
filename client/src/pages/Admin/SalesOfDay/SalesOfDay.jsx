import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import { getSalesOfDay } from '../../../services/api/rental';
import Admin from '../Admin';
import './styles.scss';

export default function SalesOfDay() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState();
    const [total, setTotal] = useState([]);
    const [loading, setLoading] = useState(false);
    const dateRef = useRef();

    const handleChangeDate = () => {
        setLoading(true);
        const date = dateRef.current.value.split('-');
        setDate(dateRef.current.value);
        const formattedDate = `${date[2]}/${date[1]}/${date[0]}`;
        getSalesOfDay(formattedDate).then(response => {
            setData(response);
        });
    };

    useEffect(() => {
        setTotal(data.reduce((prev, curr) => prev + curr.price, 0));
        setLoading(false);
    }, [data]);

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
                    <h1>Ventas del día</h1>
                    <div className='input-wrapper'>
                        <label htmlFor='date-selector'>
                            Seleccione la fecha:{' '}
                        </label>
                        <input
                            ref={dateRef}
                            id='date-selector'
                            type='date'
                            onChange={handleChangeDate}
                            value={date}
                        />
                    </div>
                    <p>
                        Total: <span>{total}</span>
                    </p>
                    {data.length !== 0 && (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Título de juego</td>
                                    <td>Nombre de cliente</td>
                                    <td>Precio</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((e, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{e.title}</td>
                                            <td>{e.fullName}</td>
                                            <td>{e.price}</td>
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
