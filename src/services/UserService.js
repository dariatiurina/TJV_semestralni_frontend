import axios from 'axios';

const BASE_URL = 'http://localhost:8090';

const compService = axios.create({
    baseURL: BASE_URL,
});

export const fetchData = async () => {
    try {
        const response = await compService.get('/user');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const handleDelete = async (id) => {
    try {
        await compService.delete(`/user/${id}`);
        window.location.reload();
    } catch (error) {
        console.error('Error deleting:', error);
    }
};

export const handlePost = async (username, realName, dateOfBirth, password) => {
    try {
        await compService.post('/user', {
            username: username,
            realName: realName,
            dateOfBirth: dateOfBirth,
            password: password
        }).then((response) => console.log(response));
        window.location.reload();
    } catch (error) {
        console.error('Error posting:', error)
    }
}

export const handlePut = async (realName, dateOfBirth, password, username) => {
    try {
        await compService.put('/user/' + username, {
            realName: realName,
            dateOfBirth: dateOfBirth,
            password: password
        }).then((response) => console.log(response));
        window.location.reload();
    } catch (error) {
        console.error('Error posting:', error)
    }
}

export const fetchDataAtLeast = async (at_least) => {
    try {
        const response = await compService.get('/user/reviewsMore/' + at_least);
        return response.data;
    } catch (error) {
        console.error('Error posting:', error)
    }
}