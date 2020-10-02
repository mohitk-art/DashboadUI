import React from 'react';
import person from "./../../../assets/img/person.png";

const Sidebar = () => {
    return (
        <article className="main-sidebar">
            <div className="logo">
                <img src="/img/logo.png" />
            </div>

            <ul className="dashboard-link">
                <li>
                    <a><i className="fa fa-star"></i> Dashboard</a>
                </li>
            </ul>

            <h4>PDF Report</h4>
            <h6>PDF Report</h6>
            <a className="btn btn-primary"><i className="fa fa-arrow-down"></i></a>
            <h6>PDF Report</h6>

            <h4>Robert Hook</h4>
            <img src={person} />
        </article>
    );
};

export default Sidebar;