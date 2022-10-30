import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Client from '../Client';

export default function ClientSelector() {
    const navigate = useNavigate();
    const idRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        if (idRef.current.value !== '')
            navigate(`/client/${idRef.current.value}/balance`);
    };

    return (
        <Client>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <label htmlFor='id'>ID de usuario: </label>
                    <input type='text' id='id' ref={idRef} />
                </div>
                <button type='subtmit'>Continuar</button>
            </form>
        </Client>
    );
}
