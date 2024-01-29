import React, { useEffect, useState } from 'react';
import {fetchData, fetchDataStreamingService} from '../services/FilmService';
import './TableComponent.css'
import {handleDelete} from "../services/FilmService";
import {Link, useParams} from "react-router-dom";

const FilmComponent = () => {
    const [data, setData] = useState([]);

    const {streaming_service_id} = useParams();

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                if(streaming_service_id){
                    const apiData = await fetchDataStreamingService(streaming_service_id);
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
    }, [streaming_service_id]);

    return (<div id="MainDiv">
            <h1>Films</h1>
            <table>
                <thead>
                <tr id="headers">
                    <th>Name</th>
                    <th id={"rating_film"}>Rating</th>
                    <th>Duration (min.)</th>
                    <th>Year Of Creation</th>
                    <th>Delete</th>
                    <th>Update</th>
                    <th>Add Review</th>
                    <th>Show Reviews</th>
                    <th>Streaming Services Is On</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name ?? '---'}</td>
                        <td id={"rating_film"}>{item.rating?.toFixed(1) ?? '---'}</td>
                        <td>{item.duration ?? '---'}</td>
                        <td>{item.yearOfCreation ?? '---'}</td>
                        <td id="CRUD"><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        <td id="CRUD"><Link to={`/film_update/${item.id}`}><button>Update</button></Link></td>
                        <td id="CRUD"><Link to={`/review_create/${item.id}`}><button>New Review</button></Link></td>
                        <td id="CRUD"><Link to={`/review_show_film/${item.id}`}><button>Show Reviews</button></Link></td>
                        <td id="CRUD"><Link to={`/streaming_service_show/${item.id}`}><button>Streaming Services</button></Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FilmComponent;
