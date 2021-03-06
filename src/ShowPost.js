import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowPost = (props) => {
    const [body, setBody] = useState({})
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const {id} = props.match.params

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then((response) => {
                 const result = response.data
                 axios.get(`https://jsonplaceholder.typicode.com/users/${result.userId}`)
                      .then((response) => {
                          setUser(response.data)
                      })
                      .catch((err) => {
                          alert(err.message)
                      })
                 setBody(result)
             })
             .catch((err) => {
                 alert(err.message)
             })
    }, [id])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
             .then((response) => {
                 setComments(response.data)
             })
             .catch((err) => {
                alert(err.message)
            })
    }, [id])

    return (
        <div>
            <h2> USER NAME:{user.name}</h2>
            <h2> TITLE:{body.title} </h2>
            <h3> BODY:<br />{body.body} </h3>

            <hr />

            <h2> COMMENTS</h2>
            <ul>
                {comments.map((com) => {
                    return <li key={com.id}> {com.body} </li>
                })}
            </ul>

            <hr />

            <p> <Link to={`/users/${body.userId}`}> More posts of author: {user.name} </Link> </p>
   
        </div>
    )
}

export default ShowPost