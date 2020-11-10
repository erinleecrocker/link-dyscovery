import React from 'react';
import './HomeButton.css';

const LargeButton = (props) => {
    return (
        <div>
            <div class="col-md-auto">
                <a href={props.link} className="btn btn-primary btn-lg ml-3" id="large-button">
                    {props.title}
                </a>
            </div>
        </div>
    );
};

export default LargeButton;