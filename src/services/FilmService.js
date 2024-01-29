import axios from 'axios';

const BASE_URL = 'http://localhost:8090';

const compService = axios.create({
    baseURL: BASE_URL,
});

export const fetchData = async () => {
    try {
        const response = await compService.get('/film');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchDataStreamingService = async (streaming_service_id) => {
    try {
        const response = await axios.get("http://localhost:8090/streaming_service/" + streaming_service_id + "/film");
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const handleDeleteStreamingService = async (streaming_service_id, filmId) => {
    try {
        const response = await axios.delete("http://localhost:8090/streaming_service/delete/" + streaming_service_id + "/film/" + filmId);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const handleNewStreamingService = async (filmId, streamingServiceId) => {
    try {
        await compService.put(`/film/${filmId}/streaming_service/${streamingServiceId}`);
    } catch (error) {
        console.error('Error while adding to a streaming service: ', error);
    }
};

export const handleDelete = async (id) => {
    try {
        await compService.delete(`/film/${id}`);
        window.location.reload();
    } catch (error) {
        console.error('Error deleting:', error);
    }
};

export const handlePost = async (name, duration, yearOfCreation, filmId) => {
    try {
        if(!filmId) {
            await compService.post('/film', {
                name: name,
                duration: duration,
                yearOfCreation: yearOfCreation
            }).then((response) => console.log(response));
        }
        else{
            await compService.put('/film/' + filmId, {
                name: name,
                duration: duration,
                yearOfCreation: yearOfCreation
            }).then((response) => console.log(response));
        }
        window.location.reload();
    } catch (error) {
        console.error('Error posting:', error)
    }
}