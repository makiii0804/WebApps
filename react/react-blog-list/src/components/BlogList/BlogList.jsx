import React, { Component } from "react";
// import { BlogPosts } from "../../data/blog-posts";
import { getBlogs } from "../../services/blogService";

import './BlogList.css'

export class BlogList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            blogs: []
        }
    }
    
    componentDidMount () {
        getBlogs()
        .then(blogs => {
            this.setState({blogs})
        })
    }
//    blogs = fetchBlogs()
    render () {
        if(this.state.blogs.length === 0) return <div>  Loading....</div>
        return (
            <div className='blogList'>
                {this.state.blogs.map((post, index) => (
                   <div className='blogItem' key={index}>
                       <h2>{post.title}</h2>
                       <p>{post.body}</p>
    
                   </div>
                ))}
            </div>
        ); 
    }
}

// export const BlogList = () => {
//     return (
//         <div className='blogList'>
//             {BlogPosts.map((post, index) => (
//                <div className='blogItem' key={index}>
//                    <h2>{post.title}</h2>
//                    <p>{post.body}</p>

//                </div>
//             ))}
//         </div>
//     );
// };