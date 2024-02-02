
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(){
 const [posts, setPosts] =useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setPosts(res.data);
    });
},[]);
 
return (
  <div className='App'>
    <header />
    <div className='container'>
      {posts ? (
        posts.map(post => (
          <div key={post.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{post.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Username: {post.username}</h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">Email: {post.email}</h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">Address: {post.address.street}</h6>
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  </div>
);
}

export default App;

