import React from 'react';
import {connect} from 'react-redux';
import {add,delTodo,editTodo,cancel,update} from './../../Store/action'
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "",
            value:true
        }
    }
    change(e) {
        let {name} = this.state;
        name = e.target.value
this.setState ({
    name:name
})
    }
    render(){
        console.log(this.props.Todo.name[0])
        console.log(this.state);
        return(
            <div>
                <h1>Home</h1>
                {/* <h1>{this.props.Todo.name}</h1> */}
                <input type = "text" onChange = {(e) => this.change(e)}/>
                <button onClick = { ()=> this.props.add(this.state)}> add</button>


                {this.props.Todo.name && this.props.Todo.name.map ((val,ind) => <li>
                {
                    val.value?
                    <div>
                        <span>{val.name}</span>
                <button onClick={()=>this.props.editTodo(ind)}>Edit</button>
                <button onClick={()=>this.props.delTodo(ind)}>Delete</button>
                </div>
                :
                <div>
                    <input type="text" onChange={(e)=>this.setState({updValue:e.target.value})}/>
                <button onClick={()=>this.props.update(ind,this.state.updValue)}>update</button>
                <button onClick={()=>this.props.cancel(ind)}>cancel</button>
                </div>
            }
                </li>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
    Todo : state

    }
}
const mapDispatchToProps = (dispatch)=>{
 return {
     add : (todo) => dispatch(add(todo)),
     delTodo:(ind)=>dispatch(delTodo(ind)),
     editTodo:(ind)=>dispatch(editTodo(ind)),
     cancel:(ind)=>dispatch(cancel(ind)),
     update:(ind,updValue)=>dispatch(update(ind,updValue))
 }
}
export default connect(mapStateToProps,mapDispatchToProps) (Home)