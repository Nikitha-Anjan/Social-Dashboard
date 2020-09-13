import React from 'react';
import axios from 'axios'

class SocialDashboard extends React.Component {
    constructor(){
        super()
    this.state={
        user:{},
        posts:[] 
    }
} 

componentDidMount(){
    const userId = parseInt(localStorage.getItem('userId'))
    axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response)=>{
          const user = response.data
          this.setState({user})        
    })
    .catch((err)=>{
        console.log(err)
    })
    axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response)=>{
          const posts = response.data
          this.setState({posts})
    })
    .catch((err)=>{
      console.log(err)
    })
}

handleLogout = () => { 
  localStorage.clear()  
  this.props.history.push('/')
}

render(){
    return (  
      <div>
          <button onClick = {this.handleLogout}>Logout</button>
              <h1>Name:{this.state.user.name}</h1>
              <h4>Email:{this.state.user.email}</h4>
              <h4>Phone:{this.state.user.phone}</h4>
                      
              <h2>Company Name:{(Object.keys(this.state.user).length > 0) && this.state.user.company.name}</h2>
              <h4>Catch Phrase:{(Object.keys(this.state.user).length > 0) && this.state.user.company.catchPhrase}</h4>
                      
               <p> {
                  this.state.posts.map((ele,i)=>{
                          return(
                            <div key={i}>
                              <h1>{ele.title}</h1>
                              <p>{ele.body}</p>
                            </div>
                          )
                        })
                }
                </p>
      </div>
      )
                   
    }
} 

export default SocialDashboard
              