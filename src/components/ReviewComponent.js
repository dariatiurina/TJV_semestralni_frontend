import React, {useEffect, useState} from 'react';
import {fetchData, fetchDataFilm, fetchDataUser} from '../services/ReviewService';
import './TableComponent.css'
import {handleDelete} from "../services/ReviewService";
import {Link, useParams} from "react-router-dom";

const ReviewComponent = () => {
    const [data, setData] = useState([]);

    const {filmId, username} = useParams();

    useEffect(() => {
        const fetchAll = async () => {
            const apiData = await fetchData();
            setData(apiData);
        };

        const fetchUser = async () => {
            const apiData = await fetchDataUser(username);
            setData(apiData);
        };

        const fetchFilmId = async () => {
            const apiData = await fetchDataFilm(filmId);
            setData(apiData);
        };

        try {
            if (filmId) {
                fetchFilmId(filmId);
            } else if (username) {
                fetchUser();
            } else {
                fetchAll();
            }
        } catch (error) {
            console.log("Error: " + error);
        }
        // eslint-disable-next-line no-use-before-define
    }, [filmId, username]);

    return (<div id="MainDiv">
            <h1>Reviews</h1>
            <table>
                <thead>
                <tr id="headers">
                    <th>Text</th>
                    <th>Rating</th>
                    <th>Author</th>
                    <th>Film</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.text ?? '---'}</td>
                        <td>{item.rating}</td>
                        <td>{item.author?.username ?? '---'}</td>
                        <td>{item.film?.name ?? '---'}</td>
                        <td id="CRUD"><Link to={`/review_update/${item.id}`}><button>Update</button></Link></td>
                        <td id="CRUD">
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewComponent;