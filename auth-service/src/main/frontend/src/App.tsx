import React from 'react';
import './App.css';
import {Form} from "./components/Form";
import {BrowserRouter, Route, Routes} from "react-router";

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

