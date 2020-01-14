import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux"
 class Post extends Component {
     
    render() {
        
        return (
            <tr key={this.props.post.id}>
                <td>{this.props.post.name}</td>
                <td>{this.props.post.topic}</td>
                <td>{this.props.post.comment}</td>
                
                
            </tr>
        )
    }
}
export default connect()(Post)