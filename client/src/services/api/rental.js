import axios from 'axios';
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
    console.log(response);
    return { count: response.count, game };
}
