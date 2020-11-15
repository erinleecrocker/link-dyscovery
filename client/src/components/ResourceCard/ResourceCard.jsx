import React, { useState } from "react";
import "./ResourceCard.css";
import SubmitButton from "../Submit Button/SubmitButton";
import StarsRating from "stars-rating";
import axios from "axios";

const ResourceCard = (props) => {
  const [rating, setRating] = useState(props.rating);

  const ratingChanged = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    console.log(rating);

    // const getUserId = localStorage.getItem("loginId")

    axios
      .post("/api/feedback", { "rating": rating })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <div className="col-md-12 resource-card">
                {/* Where the Web Address and Description will go */}
                <p>
                  <b>Web Address:</b>{" "}
                  <a href={props.url} target="_blank" rel="noreferrer">
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
              {/* This is where the rating will go TESTING */}
              <StarsRating
                count={5}
                onChange={(ratingValue) => ratingChanged(ratingValue)}
                size={50}
                color2={"#ffd700"}
                value={props.rating}
              />
            </div>
            <div className="row justify-content-center">
              {/* This is where the Button to submit review will go */}
              <SubmitButton onClick={handleRatingSubmit}>
                Submit Rating
              </SubmitButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
