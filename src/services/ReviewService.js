import axios from 'axios';

const BASE_URL = 'http://localhost:8090';

const compService = axios.create({
    baseURL: BASE_URL,
});

export const fetchData = async () => {
    try {
        const response = await compService.get('/review');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchDataFilm = async (filmId) => {
    try {
        const response = await compService.get('/review/film/' + filmId);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchDataUser = async (username) => {
    try {
        const response = await compService.get('/review/user/' + username);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const handleDelete = async (id) => {
    try {
        await compService.delete(`/review/${id}`);
        window.location.reload();
    } catch (error) {
        console.error('Error deleting:', error);
    }
};

export const handlePost = async (text, rating, username, filmId) => {
    try {
        var user = axios.get("http://localhost:8090/user/" + username);
        var film = axios.get("http://localhost:8090/film/" + filmId);
        await compService.post('/review', {
            text: text,
            rating: rating,
            author: (await user).data,
            film: (await film).data
        }).then((response) => console.log(response));
        window.location.reload();
    } catch (error) {
        console.error('Error posting:', error)
    }
}

export const handlePut = async (text, rating, reviewId) => {
    try {
        console.log(reviewId);
        await compService.put('/review/' + reviewId, {
            text: text,
            rating: rating
        }).then((response) => console.log(response));
        window.location.reload();
    } catch (error) {
        console.error('Error posting:', error)
    }
}