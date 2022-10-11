import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                </span>
            </div>
        </div>
    );
};

export default Layout;