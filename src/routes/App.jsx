import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/default.css";
import Layout from "../containers/Layout";
import Profile from "../pages/Profile.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Profile />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
