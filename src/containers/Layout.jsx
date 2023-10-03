import React from "react";

import "../styles/layout.css";

import Footer from "../Components/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <div>
            <main className='Layout'>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
