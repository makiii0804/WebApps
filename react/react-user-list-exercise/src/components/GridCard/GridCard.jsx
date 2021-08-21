import React from "react";
import "../User/User"
import "../../data/random-user"

import "./GridCard.css"

const GridCard = (props) => {

    return (
        <div className="card-container">
            <div className="img-container">
                <img src={props.userData.picture.medium} alt="" />
                <h4>{props.userData.name.first}</h4>
            </div>
            <div className="data-container">
                <p>Name: {props.userData.email}</p>
                <p>Date of birth: {props.userData.dob.date}</p>
            </div>
        </div>

    )
}

export { GridCard };