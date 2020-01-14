import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:''
        }
        
    
    }
    
    render(){
        console.log("sdcds",this.state.show)
        // console.log("eeee",this.state.show)
        return(
            <div>
                 <div>
                
                    <Link to="/pagination">Pagination</Link>
               
                  <img src={this.state.show.image} class="card-img-top" alt="..." width="100px" height="300px" />
                <h3>Loaction of The Company:{this.state.show.location}</h3>
                <h3>Name of the Jobs:{this.state.show.job}</h3>
                <h3>Number of the Openings:{this.state.show.opening}</h3>
                <button><Link to="/">Back to Table</Link></button>
              </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        post:state
    }
}
export default connect(mapStateToProps)(Show);