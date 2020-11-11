import React from 'react';
import './HomeButton.css';

const HomeButton = (props) => {
    return (
        <div>
            <div class="col-md-auto">
                <a href={props.link} className="btn btn-primary btn-lg ml-3" id="home-button">
                    <p id="home-button-text">{props.title}</p>
                </a>
            </div>
        </div>
    );
};

export default HomeButton;