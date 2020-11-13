import React,{useState} from "react";
import "./ResourceCard.css";
import SubmitButton from "../Submit Button/SubmitButton";
import StarsRating from 'stars-rating';


const ResourceCard = (props) => {
  
  const[rating, setRating]=useState([]);

  const ratingChanged = () => {
    setRating();
  };

  return (
    <>
      <div className="card mb-4" id="resource-card">
        <div className="row">
          <div className="col-sm-9">
            <div className="row mb-4">
              {/* Where the Title will go  */}
              <h5>
                <b>{props.title}</b>
              </h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Where the Web Address and Description will go */}
                <p>
                  <b>Web Address:</b>{" "}
                  <a href={props.url} target="_blank">
                    {" "}
                    {props.url}
                  </a>
                </p>
                <p>
                  <b>Description:</b> {props.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row justify-content-center">
              
                {/* This is where the rating will go */}
                <StarsRating
                  count={5}
                  onChange={ratingChanged}
                  size={35}
                  color2={"#ffd700"}
                  value={props.rating}
                />     
            </div>
            <div className="row justify-content-center">
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
