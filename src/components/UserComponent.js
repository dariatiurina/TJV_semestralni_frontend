import React, { useEffect, useState } from 'react';
import {fetchData, fetchDataAtLeast} from '../services/UserService';
import { handleDelete } from '../services/UserService';
import './TableComponent.css'
import {Link, useParams} from "react-router-dom";

const UserComponent = () => {
    const [data, setData] = useState([]);

    const {at_least} = useParams();

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                if(at_least){
                    const apiData = await fetchDataAtLeast(at_least);
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
    }, [at_least]);

    return (<div id="MainDiv">
            <h1>Users</h1>
            <table>
                <thead>
                <tr id="headers">
                    <th>Username</th>
                    <th>RealName</th>
                    <th>Date of Birth</th>
                    <th>Delete</th>
                    <th>Update</th>
                    <th>Reviews</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.username}>
                        <td>{item.username}</td>
                        <td>{item.realName ?? '---'}</td>
                        <td>{item.dateOfBirth ? (
                            Intl.DateTimeFormat('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            }).format(new Date(item.dateOfBirth))) : ('---')}</td>
                        <td id="CRUD"><button onClick={() => handleDelete(item.username)}>Delete</button></td>
                        <td id="CRUD"><Link to={`/update_user/${item.username}`}><button>Update</button></Link></td>
                        <td id="CRUD"><Link to={`/review_show_user/${item.username}`}><button>Show Reviews</button></Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserComponent;