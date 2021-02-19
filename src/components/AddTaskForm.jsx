import {Component} from 'react';
import {connect} from 'react-redux';
import '../css/AddTaskForm.css';
import { uuid } from 'uuidv4';

class AddTaskForm extends Component{
  state = {
      name: '',
      status: 'Pending', 
    }

  addToDo = () => {
    const { name } = this.state; 
    if (name.trim() === '') {
      this.setState({
        name: '',
      })
        return alert('Please add task');
    } 
      
      let newTasks = {id: uuid(),...this.state};

      this.props.addNewToDo(newTasks);
      
      this.setState({
        name: '',
      })
    
     
  }
  
  render(){
    return(
      <div className='add-todo'>
        <h2>Add Task</h2>
        Task:<input type='text' value={this.state.name} onChange={e =>this.setState({name: e.target.value})}/>
        <button onClick={this.addToDo} className='btn'>Add To Do</button>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch =>{
  return (
    {
      addNewToDo: newToDo => dispatch({type: 'ADD_TODO', payload: newToDo})
    }
  )
}


export default connect(null, mapDispatchToProps)(AddTaskForm);