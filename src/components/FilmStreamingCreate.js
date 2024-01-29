import React, {useEffect, useState} from "react";
import "./Create.css";
import "./TableComponent.css";
import {fetchData as fetchDataFilm, handleNewStreamingService} from "../services/FilmService";
import {fetchData as fetchDataStreaming} from "../services/StreamingServiceService"

const FilmStreamingCreate = () => {
    const [filmData, setFilmData] = useState([]);
    const [streamingData, setStreamingData] = useState([]);

    var filmCheck, streamingCheck;

    const handleFilmChange = async (filmId) => {
        filmCheck = filmId;
    };

    const handleStreamingChange = async (streamingId) => {
        streamingCheck = streamingId;
    };

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const apiData = await fetchDataFilm();
                setFilmData(apiData);
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
            <h2>Add a Film to a Streaming Service:</h2>
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
                        <td><input type={"radio"} name={"film"} value={film.id} onChange={() => handleFilmChange(film.id)}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h3>Add to which Streaming Service:</h3>
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
                        <td><input type={"radio"} name={"streaming"} value={streaming.id} onChange={() => handleStreamingChange(streaming.id)}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button id={"button_submit"} onClick={() => handleNewStreamingService(filmCheck, streamingCheck)}>SUBMIT</button>
        </div>
    )
};

export default FilmStreamingCreate;