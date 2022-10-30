import axios from 'axios';

export async function getGameById(id) {
    const url = process.env.REACT_APP_API_URL + `/game/${id}`;
    return await axios.get(url).then(response => response.data);
}

export async function getFilteredGames(director, producer, protagonistName) {
    const url =
        process.env.REACT_APP_API_URL +
        `/game?director=${director}&producer=${producer}&protagonist_name=${protagonistName}`;
    return await axios.get(url).then(response => response.data);
}
