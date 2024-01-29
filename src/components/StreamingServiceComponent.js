import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/StreamingServiceService';
import './TableComponent.css'
import {handleDelete} from "../services/StreamingServiceService";
import {Link, useParams} from "react-router-dom";
import {fetchDataFilm} from "../services/StreamingServiceService";

const StreamingServiceComponent = () => {
    const [data, setData] = useState([]);

    const {filmId} = useParams();

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                if(filmId){
                    const apiData = await fetchDataFilm(filmId);
                    setData(apiData);
                }
                else {
                    const apiData = await fetchData();
                    setData(apiData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataFromApi();
    }, [filmId]);

    return (<div id="MainDiv">
            <h1>Streaming Services</h1>
            <table>
                <thead>
                <tr id="headers">
                    <th>Name</th>
                    <th>Delete</th>
                    <th>Update</th>
                    <th>Films</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name ?? '---'}</td>
                        <td id="CRUD"><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        <td id="CRUD"><Link to={`/streaming_service_update/${item.id}`}><button>Update</button></Link></td>
                        <td id="CRUD"><Link to={`/film/${item.id}`}><button>Films</button></Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StreamingServiceComponent;