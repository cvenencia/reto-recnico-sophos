import axios from 'axios';

export async function getGameById(id) {
    const url = process.env.REACT_APP_API_URL + `/game/${id}`;
    return await axios.get(url).then(response => response.data);
}
