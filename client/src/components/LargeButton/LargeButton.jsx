import React from 'react';
import './LargeButton.css';

const LargeButton = (props) => {
    return (
        <div>
            <a href="" className="btn btn-primary btn-lg ml-3" id="large-button">
                {props.children}
            </a>
        </div>
    );
};

export default LargeButton;