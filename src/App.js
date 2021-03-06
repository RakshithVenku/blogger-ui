import React from 'react'
import { Link, Route } from 'react-router-dom'

import UsersList from './UsersList'
import UserShow from './UserShow'
import UserPosts from './UserPosts'
import ShowPost from './ShowPost'

const App = (props) => {

  return (
    <div>
      <p> <Link to="/">Home</Link> |<Link to="/users">Users</Link> |<Link to="/posts">Posts</Link></p>

      <Route path="/" exact={true} />
      <Route path="/users" component={UsersList} exact={true} />
      <Route path="/users/:id" component={UserShow} />
      <Route path="/posts" component={UserPosts} exact={true} />
      <Route path="/posts/:id" component={ShowPost} />
    </div>
  )
}

export default App;
