import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "../pages/Profile.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
