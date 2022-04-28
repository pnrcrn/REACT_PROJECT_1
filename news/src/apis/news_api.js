
import axios from "axios";

const KEY = 'ec64712d04ad4f60a9a065208d23ed14';

export const newsApi = axios.create({
    baseURL: "https://newsapi.org/v2/everything",
    params: {
        from: '2022-04-19',
        sortBy: 'popularity',
        apiKey: KEY
    }

});
