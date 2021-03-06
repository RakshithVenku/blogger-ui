import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserPosts = (props) => {
    const [userPosts, setUserPosts] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((response) => {
                 const result = response.data
                 setUserPosts(result)
                 const result1 = result.filter((ele) => {
                     return ele.id <= 10
                 })
                 setPosts(result1)   
             })
    }, [])

    const handleBtn = () => {
        const arr = userPosts.filter((user) => {
            return (user.id <= (posts[posts.length - 1].id + 10))
        })
        console.log(arr)

        setPosts(arr)
        
    }

    return (
        <div>
            <h1> Total posts: {posts.length} </h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}><Link to={`/posts/${post.id}`}> {post.title} </Link></li>
                })}
            </ul>
            <button onClick={handleBtn}>next</button>
        </div>
    )
}

export default UserPosts