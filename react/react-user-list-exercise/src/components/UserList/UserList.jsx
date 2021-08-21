import React, { Component } from "react";

import { randomUsers } from "../../data/random-user"
import { User } from "../User/User";
import { GridCard } from '../GridCard/GridCard'

import "./UserList.css"
import { getUsers } from "../../services/userService"

export class  UserList extends Component {
    constructor(props) {
        super (props)
        this.state={
            users:[]
        }
    }
componentDidMount () {
    getUsers()
    .then(users => {
        this.setState({users})
    })
}
render(){

if(this.state.users.length === 0)

return <div>Loading...</div>
    return (
        <div className={`main-container ${this.props.isListView ? '' : 'grid'}`}>
            {
            randomUsers.results.map((user, index) => this.props.isListView 
                ? <User userData={user} key={index} />
                : <GridCard userData={user} key={index}/>
            )
            }
        </div>
    )
};
}