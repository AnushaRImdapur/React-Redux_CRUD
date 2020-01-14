import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from  "react-redux";
import {Link} from "react-router-dom"
import Table from "./Table";
 class Home extends Component {
    
    render() {
        var user=this.props.post
        console.log(this.props.isAuth)
        let {isAuth}=this.props
       
        return !isAuth?
        (
                <Redirect to ="/login" />
        ):
         (
            <div>
                <Link to="/displayUser">User Posts</Link>
                
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Comment</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((post,index)=> <Table ids={index} key={index} post={post} /> )}
                    </tbody>
                </table>                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        isAuth:state.isAuth,
        post:state.showData
    }
}
export default connect(mapStateToProps) (Home)