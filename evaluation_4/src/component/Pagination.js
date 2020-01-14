import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.state={
                data:this.props.data,
                curr: 10,
                perPage: 5
        }
    }
    pagination = (data, cur, perPage) => {
        var first = (cur - 1) * Number(perPage);
        console.log("first",first)
        var last = first + Number(perPage)
        var Data = data.slice(first, last);
        var total = Math.ceil(data.length / perPage);
        return {
            'data': Data,
            'perPage': perPage,
            "total": total
        }

    }
    pagesClick = (a) => {
        
        this.setState({
            curr: a
        })
    }
    selectPage = (event)=>{
        this.setState({
            perPage:event.target.value
        })
    }
    render(){
        var totalData = this.pagination(this.props.data, this.state.curr, this.state.perPage)
        var total = totalData.total;
        var show = totalData.data;
        var pageNum = []
        for (var i = 1; i <= total; i++) {
            pageNum.push(i);
        }
        var buttons = pageNum.map(item => {
            return (
                <button onClick={() => this.pagesClick(item)}>{item}</button>
            )
        })
        var display = show.map(item => {
            return (
                <tr>
                <td>{item.name}</td>
                <td>{item.topic}</td>
                <td>{item.comment}</td>
                
              </tr>)
        })
        console.log(totalData)
        return (
            <div>
                <Link to="/displayUser">Back</Link>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Topic</th>
                            <th scope="col">comment</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {display}
                    </tbody>
                </table>
                <div>
                    {buttons}
                </div>
                <select onClick={(num)=>this.selectPage(num)}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        data:state.showData
    }
}
export default connect(mapStateToProps)(Pagination);