import axios from 'axios';

const BASE_URL = 'http://localhost:8090';

const compService = axios.create({
    baseURL: BASE_URL,
});

export const fetchData = async () => {
    try {
        const response = await compService.get('/streaming_service');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchDataBest = async () => {
    try {
        const response = await compService.get('/streaming_service/best');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const fetchDataFilm = async (filmId) => {
    try {
        const response = await axios.get("http://localhost:8090/film/" + filmId + "/streaming_service");
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const handleDelete = async (id) => {
    try {
        await compService.delete(`/streaming_service/${id}`);
        window.location.reload();
    } catch (error) {
        console.error('Error deleting:', error);
    }
};

export const handlePost = async (name, streaming_service_id) => {
    try {
        if(!streaming_service_id) {
            await compService.post('/streaming_service', {
                name: name
            }).then((response) => console.log(response));
        }
        else{
            await compService.put('/streaming_service/' + streaming_service_id, {
                name: name
            }).then((response) => console.log(response));
        }
        window.location.reload();
    } catch (error) {
        console.error('Error posting:', error)
    }
}