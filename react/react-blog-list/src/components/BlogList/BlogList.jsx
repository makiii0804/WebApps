import React from "react";
import { BlogPosts } from "../../data/blog-posts";

import './BlogList.css'

export const BlogList = () => {
    return (
        <div className='blogList'>
            {BlogPosts.map((post, index) => (
               <div className='blogItem' key={index}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>

               </div>
            ))}
        </div>
    );
};