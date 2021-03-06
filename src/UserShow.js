import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserShow = (props) => {
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const {id} = props.match.params

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
             .then((response) => {
                 setUser(response.data)
             })
             .catch((err) => {
                 alert(err.message)
             })
    }, [id])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
             .then((response) => {
                setPosts(response.data)
             })
             .catch((err) => {
                 alert(err.message)
             })
    }, [id])

    return (
        <div>
            <h1> USER NAME:{user.name} </h1>
            <h2> POSTS WRITTEN BY USER </h2>
            <ul>
                {posts.map((ps) => {
                    return <li key={ps.id}><Link to={`/posts/${ps.id}`}> {ps.title} </Link></li>
                })}
            </ul>
        </div>
    )
}

export default UserShow