import React, { Component } from 'react'
import {connect} from "react-redux"
import {loginUser} from "../Redux/action"
import {Redirect} from "react-router-dom"

 class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let payload={
            email:this.state.email,
            password:this.state.password
        }
        this.props.login(payload)


    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })

    }
    render() {
        const {isAuth}=this.props
        return isAuth?
        (<Redirect to='/home'/>)
        :(
            <div className="container" className="row" style={{marginLeft:"125px"}}>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="text" class="form-control"   placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                        
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control"  placeholder="Password"name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        isAuth:state.isAuth
    }
}
const mapDispatchToProps=(dispatch)=>{
      return{
          login:payload=>dispatch(loginUser(payload))

      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)