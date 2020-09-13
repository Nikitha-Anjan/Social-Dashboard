import React from 'react'
import axios from 'axios'
import validator from 'validator'

class Login extends React.Component {
    constructor(){
    super()
    this.state = {
            email:"",
            error:"",
        }
    }

    handleChange = (e) => {
        const email = e.target.value
        const validateEmail = validator.isEmail(email)
        this.setState((prevState)=>{
            return {
                email:(validateEmail) ? email: prevState.email,
                error:(!validateEmail && email !='') && 'Invalid Email'
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.email.length === 0){
            this.setState({error:'Email cant be blank'})
        }else{
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then((response)=>{
        const users = response.data
        const user  = users.find((user) => {return user.email === this.state.email})
        const userId = ""
            if (user) {
                localStorage.setItem('userId',user.id)
                localStorage.setItem('userEmail',user.email)
                this.props.history.push('/SocialDashboard')
            }else{ 
                this.setState({error:'Email doesnt exist'})
            }
        })
        .catch((error =>{
            console.log(error)
        })
        )
        }   
    }   
    render(){
        return (
            <div>
                <h2>LOGIN</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='email' placeholder='Enter the Email' onChange={this.handleChange}/> <br />
                    <input type = "submit" value = "Login" />
                    {console.log(this.state.error)}
                    {(this.state.error) && (alert(`${this.state.error}`))}
                </form>
             </div>   
        )
    } 
}       

export default Login