import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import App from "./App";
import Home from "./routes/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Debug from "./components/Debug";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/debug" element={<Debug />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
