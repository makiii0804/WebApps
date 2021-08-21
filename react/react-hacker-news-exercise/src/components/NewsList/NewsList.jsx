import React, { Component } from "react"
import { topStories } from "../../services/topStories"

import { News } from "../News/News"

import "./NewsList.css"

export const NewsList = (props) => {
    return (
        <div className="main-container">
            {
            topStories.map((news, index) =>
                <News newsData={news} key={index} />
             
            )
            }
        </div>
    )
    
}