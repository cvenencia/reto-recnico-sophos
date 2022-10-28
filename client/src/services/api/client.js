import axios from 'axios';

export async function getClientBalance(id) {
    const url = process.env.REACT_APP_API_URL + `/client/${id}/balance`;

    const response = await axios.get(url).then(response => response.data);

    return response;
}
