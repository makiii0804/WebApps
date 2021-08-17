import React from "react";

import { randomUsers } from "../../data/random-user"
import { User } from "../User/User"

import "./UserList.css"

const UserList = () =>{
    return (
        <div className="main-container">
            {
            randomUsers.results.map((user, index) => 
                <User userData={user} key={index} />
            )
            }
        </div>
    )
};

export { UserList };