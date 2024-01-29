import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import FilmComponent from './components/FilmComponent';
import React from 'react';
import UserComponent from "./components/UserComponent";
import CreateComponent from "./components/CreateComponent";
import ReviewComponent from "./components/ReviewComponent";
import StreamingServiceComponent from "./components/StreamingServiceComponent";
import FilmCreateComponent from "./components/FilmCreateComponent";
import UserCreateComponent from "./components/UserCreateComponent";
import StreamingServiceCreateComponent from "./components/StreamingServiceCreateComponent";
import ReviewCreateComponent from "./components/ReviewCreateComponent";
import FilmStreamingCreate from "./components/FilmStreamingCreate";
import BestStreamingServiceComponent from "./components/BestStreaming";
import FilmStreamingDeleteComponent from "./components/FilmStreamingDeleteComponent";
import ReviewUpdateComponent from "./components/ReviewUpdateComponent";
import UserUpdateComponent from "./components/UserUpdateComponent";

function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/film" element={<FilmComponent/>} />
                <Route path="/user" element={<UserComponent/>} />
                <Route path="/users_with_at_least/:at_least" element={<UserComponent/>} />
                <Route path="/review" element={<ReviewComponent/>} />
                <Route path="/streaming_service" element={<StreamingServiceComponent/>} />
                <Route path="/create" element={<CreateComponent/>} />
                <Route path="/film_create" element={<FilmCreateComponent/>} />
                <Route path="/user_create" element={<UserCreateComponent/>} />
                <Route path="/update_user/:username" element={<UserUpdateComponent/>} />
                <Route path="/streaming_service_create" element={<StreamingServiceCreateComponent/>} />
                <Route path="/streaming_service_update/:streaming_service_id" element={<StreamingServiceCreateComponent/>} />
                <Route path="/review_create/:filmId" element={<ReviewCreateComponent/>} />
                <Route path="/review_show_film/:filmId" element={<ReviewComponent/>} />
                <Route path="/review_show_user/:username" element={<ReviewComponent/>} />
                <Route path="/streaming_service_show/:filmId" element={<StreamingServiceComponent/>} />
                <Route path="/film/:streaming_service_id" element={<FilmComponent/>} />
                <Route path="/film_update/:film_id" element={<FilmCreateComponent/>} />
                <Route path="/review_update/:review_id" element={<ReviewUpdateComponent/>} />
                <Route path="/streaming_film" element={<FilmStreamingCreate/>} />
                <Route path="/streaming_film_delete" element={<FilmStreamingDeleteComponent/>} />
                <Route path="/best_services" element={<BestStreamingServiceComponent/>} />
            </Routes>
        </Router>
    );
}

export default App;
