import React from 'react';
import {connect} from 'react-redux';
import {add,delTodo,editTodo,cancel,update} from './../../Store/action';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { async } from 'q';
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
 addValue=async()=>{
    await this.props.add(this.state);
    this.setState({
        name:""
    })
 }

    render(){
        console.log(this.props.Todo.name[0])
        console.log(this.state);
        return(
            <div>
               <Paper>
                   <h1 style={{textAlign:"center",color:"#1976d2"}}>WelCome To Todo</h1>
               </Paper>
               
<Paper>
                <input value={this.state.name} style={{width:"80%",margin:"2% 1% 2% 5%",padding:"8px",borderRadius:"5px",outline:"none",border:"2px solid #1976d2"}} type = "text" placeholder="Type here ..." onChange = {(e) => this.change(e)}/>
                <Button style={{backgroundColor:"#1976d2",color:"white",margin:"10px"}} onClick = { ()=> this.addValue()}>add </Button>

                {/* <button onClick = { ()=> this.props.add(this.state)}> add</button> */}

                </Paper>
            
                    <Paper style={{width:"80%",margin :'0 auto',marginTop:"20px"}}>
                {this.props.Todo.name && this.props.Todo.name.map ((val,ind) => <li style={{listStyle:"none"}}>
                {
                    val.value?
                    <div style={{borderBottom:"1px solid #1976d2",padding:"16px"}}>
                   

                        <span style={{fontSize:"20px",marginLeft:"20px" }}>{val.name}</span>
                   
                        <Button style={{backgroundColor:"#1976d2",color:"white",margin:"10px",padding:"0px",float:"right"}} onClick={()=>this.props.editTodo(ind)}>edit</Button>
                        <Button style={{backgroundColor:"#1976d2",color:"white",margin:"10px",padding:"0px",float:'right'}} onClick={()=>this.props.delTodo(ind)}>delete</Button>
                {/* <button onClick={()=>this.props.editTodo(ind)}>Edit</button> */}
                {/* <button onClick={()=>this.props.delTodo(ind)}>Delete</button> */}
                </div>
                :
                <div  style={{borderBottom:"1px solid #1976d2",padding:"10px"}}>
                    <input style={{width:"82%",padding:"3px",borderRadius:"5px",outline:"none",border:"2px solid #1976d2"}} type="text" placeholder="Update todo ...." onChange={(e)=>this.setState({updValue:e.target.value})}/>
                {/* <button onClick={()=>this.props.update(ind,this.state.updValue)}>update</button> */}
                <Button style={{backgroundColor:"#1976d2",color:"white",margin:"10px",padding:"0px"}}  onClick={()=>this.props.update(ind,this.state.updValue)}>update</Button>

                {/* <button onClick={()=>this.props.cancel(ind)}>cancel</button> */}
                <Button style={{backgroundColor:"#1976d2",color:"white",margin:"10px",padding:"0px"}} onClick={()=>this.props.cancel(ind)}>cancel</Button>
                
                </div>
            }
                </li>)}
                </Paper>
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