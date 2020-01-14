import React from "react";
import Post from "./Post";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
class DisplayUser extends React.Component{
    render(){
        var comments = this.props.comment
        
        const showData=this.props.post
        
        
        return(
            <div className="contanier mx-auto border-0" style={{width:"800px",margin:"30px"}}>
                <Link to="/pagination">Table</Link> 
                <div class="row">

                {showData.map((item,index)=><Post ids={index} key={item.id} post={item} comments={comments} />)}
                
                </div>
            </div>  
           
        )
    }
}
const mapStateToProps=state=>{
    return{
        post:state.showData,
        comment:state.commentData
    
    }
}
export default connect(mapStateToProps)(DisplayUser);
{/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">

</div>
<div className="col-lg-6 col-md-6 col-sm-12 col-12">
    
</div> */}