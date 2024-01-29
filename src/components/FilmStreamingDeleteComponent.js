import React, {useEffect, useState} from "react";
import "./Create.css";
import "./TableComponent.css";
import {fetchDataStreamingService as fetchDataFilm, handleDeleteStreamingService} from "../services/FilmService";
import {fetchData as fetchDataStreaming} from "../services/StreamingServiceService"

const FilmStreamingCreate = () => {
    const [filmData, setFilmData] = useState([]);
    const [streamingData, setStreamingData] = useState([]);
    const [filmCheck, setFilmCheck] = useState(null);
    const [streamingCheck, setStreamingCheck] = useState(null);

    const handleFilmChange = (filmId) => {
        setFilmCheck(filmId);
        console.log("StreamingCheck: " + streamingCheck);
    };

    const handleStreamingChange = async (streamingId) => {
        const apiFilmData = await fetchDataFilm(streamingId);
        setFilmData(apiFilmData);
        setStreamingCheck(streamingId);
        console.log(streamingCheck);
    };

    const handleDeleteSubmit = async () => {
        console.log('Deleting - streamingCheck:', streamingCheck, 'filmCheck:', filmCheck);
        if (streamingCheck !== null && filmCheck !== null) {
            await handleDeleteStreamingService(streamingCheck, filmCheck);
        } else {
            console.error('Invalid streaming or film selection');
        }
        window.location.reload();
    };

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const apiStreamingData = await fetchDataStreaming();
                setStreamingData(apiStreamingData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataFromApi();
    }, []);

    return (
        <div id={"MainDivSubmit"}>
            <h3>From which Streaming Service:</h3>
            <table id={"table_streaming"}>
                <thead>
                <tr id="headers">
                    <th>Streaming Name</th>
                    <th>Check</th>
                </tr>
                </thead>
                <tbody>
                {streamingData.map((streaming) => (
                    <tr key={streaming.id}>
                        <td>{streaming.name ?? '---'}</td>
                        <td><input type={"radio"} name={"streaming"} value={streaming.id}
                                   onChange={() => handleStreamingChange(streaming.id)}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>What film do you want to delete? </h2>
            <h3>What Film:</h3>
            <table id={"table_streaming"}>
                <thead>
                <tr id="headers">
                    <th>Film Name</th>
                    <th>Check</th>
                </tr>
                </thead>
                <tbody>
                {filmData.map((film) => (
                    <tr key={film.id}>
                        <td>{film.name ?? '---'}</td>
                        <td><input type={"radio"} name={"film"} value={film.id}
                                   onChange={() => handleFilmChange(film.id)}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button id={"button_submit"}
                    onClick={() => handleDeleteSubmit(streamingCheck, filmCheck)}>SUBMIT
            </button>
        </div>
    )
};

export default FilmStreamingCreate;