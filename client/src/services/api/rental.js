import axios from 'axios';
import { getClientById } from './client';
import { getGameById } from './game';

export async function getLeastRentedGamesByAgeGroup() {
    const list = [];
    for (let i = 0; i < 100; i += 10) {
        const url =
            process.env.REACT_APP_API_URL +
            `/rental/least-rented-by-age-group?startAge=${i}&finishAge=${
                i + 10
            }`;

        const response = await axios.get(url).then(response => response.data);
        if (response === '') continue;
        const game = await getGameById(response.gameId);
        list.push({
            startAge: i,
            finishAge: i + 10,
            game,
            count: response.count,
        });
    }
    return list;
}

export async function getMostRentedGame() {
    const url = process.env.REACT_APP_API_URL + `/rental/most-rented`;

    const response = await axios.get(url).then(response => response.data);
    const game = response.gameId && (await getGameById(response.gameId));
    return { count: response.count, game };
}

export async function getMostFrequentClient() {
    const url = process.env.REACT_APP_API_URL + `/rental/most-frequent`;

    const response = await axios.get(url).then(response => response.data);
    const client =
        response.clientId && (await getClientById(response.clientId));
    return { count: response.count, client };
}

export async function getSalesOfDay(day) {
    const url = process.env.REACT_APP_API_URL + `/rental/sales?date=${day}`;

    const response = await axios.get(url).then(response => response.data);
    return response;
}

export async function getOverdueClients() {
    const url = process.env.REACT_APP_API_URL + `/rental/overdue-clients`;

    const response = await axios.get(url).then(response => response.data);
    return response;
}

export async function claimRental(id) {
    const url = process.env.REACT_APP_API_URL + `/rental/claim`;

    const response = await axios
        .post(url, { id })
        .then(response => response.data);
    return response;
}
