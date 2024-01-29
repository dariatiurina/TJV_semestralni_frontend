import React, {useEffect, useState} from 'react';
import {fetchDataBest} from '../services/StreamingServiceService';
import './TableComponent.css'
import {Link} from "react-router-dom";
const BestStreamingServiceComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const apiData = await fetchDataBest();
                setData(apiData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataFromApi();
    }, []);

    return (<div id="MainDiv">
            <h1>Streaming Services</h1>
            <table>
                <thead>
                <tr id="headers">
                    <th>Place</th>
                    <th>Name</th>
                    <th>Films</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name ?? '---'}</td>
                        <td id="CRUD"><Link to={`/film/${item.id}`}>
                            <button>Films</button>
                        </Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BestStreamingServiceComponent;