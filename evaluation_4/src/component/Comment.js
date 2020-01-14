import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import DisplayUser from "./DisplayUser";
import {createData} from "../Redux/action";

class Comment extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            name:'',
            comment:[]
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        var comment=this.state.comment;
       
        var newArr=this.props.post.filter(post =>{
           
            
            if(post.id == this.props.match.params.id){
                
                return post["comment"].push(comment)
            }
         
        })
        
        console.log("newArr",newArr)
        this.props.dispatch({type:'COMMENT_DATA',payload:newArr})
    }
    
    render(){
        console.log("t",this.props)
        return(
            <div className="container" style={{width:"300px"}}>
                 <form onSubmit={this.handleSubmit}>
                    
                    <div class="form-group">
                        <label>Comment</label><br />
                        <textarea class="form-control" rows="3" name="comment" value={this.state.comment} onChange={this.handleChange}></textarea>
                    </div>
                    <button onClick={this.handleSubmit} class="btn btn-primary mx-auto">Submit</button>
                    <br />
                    <Link to="/displayUser">Back to Post</Link>
                </form> 
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
       post:state.showData 
    }
}
export default connect(mapStateToProps)(Comment);