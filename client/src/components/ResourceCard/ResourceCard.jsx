import React from "react";
import "./ResourceCard.css";
import SubmitButton from '../Submit Button/SubmitButton';

const ResourceCard = (props) => {
  return (
    <>
        <div className="card" id="resource-card">
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              {/* Where the Title will go  */}
              <h5>{props.title}</h5>
            </div>
            <div className="row">
              {/* Where the Web Address and Description will go */}
              <p> Web Address: <a href={props.url} target="_blank"> {props.url}</a> </p>
              <p>
                Description: {props.description}
              </p>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="row">
                {/* This is where the rating will go */}
                <p>{props.rating}RATING</p>
            </div>
            <div className="row">
              {/* This is where the Button to submit review will go */}
                <SubmitButton>Submit Review</SubmitButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
