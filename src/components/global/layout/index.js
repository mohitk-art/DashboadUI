import React from 'react';
import Sidebar from '../sidebar';
import "./layout.scss";

const Layout = ({ children }) => {
    return (
        <main className="main">
            <Sidebar />
            <div className="mainarea px-3">
                {children}
            </div>
        </main>
    );
};

export default Layout;