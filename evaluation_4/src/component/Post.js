import React from "react";
import {Link} from "react-router-dom";
import Comment from "./Comment";
import {connect} from "react-redux"

class Post extends React.Component{
    constructor(props){
        super(props);
        console.log("prop",this.props)
        this.state={
            comment:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addCommit=(id)=>{
        console.log("cff",id)
        const comment=this.state.comment

        const data={
            id:id,
            comment
        }
       
        this.props.dispatch({type:'COMMENT_DATA',payload:data})
    }
    
    render(){
       
        return(
            
            <div class="col-6 card border-0" >
                {/* <p class="card-text">{this.props.comment}</p> */}
                    <img src={this.props.post.image} class="card-img-top" alt="..." width="100px" height="300px" />
                        <div class="card-body">
                            <h5 class="card-title">{this.props.post.name}</h5>
                            <p class="card-text">Topic:{this.props.post.topic} :</p>
                            <div style={{border:"1px solid black"}}>Comment:{this.props.post.comment}</div>
                            <Link to={`/comment/${this.props.post.id}`}>Comment</Link>
                            
                        </div>
                
           
           </div>
        )
    }
}


export default connect()(Post)