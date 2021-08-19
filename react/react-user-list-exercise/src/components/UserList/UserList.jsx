import React from "react";

import { randomUsers } from "../../data/random-user"
import { User } from "../User/User";
import { GridCard } from '../GridCard/GridCard'

import "./UserList.css"

const UserList = ({isListView}) =>{
    console.log('UserList: ', isListView);
    return (
        <div className="main-container user">
            {
            randomUsers.results.map((user, index) => isListView 
                ? <User userData={user} key={index} />
                : <GridCard />
            )
            }
        </div>
    )
};

export { UserList };