import {Component} from 'react';
import {connect} from 'react-redux';
import '../css/Tasks.css'

class Tasks extends Component{

    editToDo = (id) => {
        let editedTodo = this.props.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    status: 'Done'
                }
            }
            return task;
        })
        this.props.editToDo(editedTodo);
    }

    delToDo = (id) => {
        let deletedTodo = this.props.tasks.filter(task => {
            return task.id !== id;
        })
        this.props.deleteToDo(deletedTodo);
    }

  render(){
    return(
      <>
        <h3>Pending Tasks</h3>
        <table>
           <thead>
               <tr>
                   <th>
                       Task Name
                   </th>
                   <th>
                       Status
                   </th>
               </tr>
           </thead>
           <tbody>
           {
                this.props.tasks.filter(task =>{
                    return task.status === 'Pending'
                }).map(task =>{
                    return (<tr>
                            <td>{task.name}</td>
                            <td>{task.status} <span onClick={() => this.editToDo(task.id)} className='pending-btn'>x</span></td>
                        </tr>)
                })
            }
           </tbody>
        </table>
        <h3>Done Tasks</h3>
        <table>
           <thead>
               <tr>
                   <th>
                       Task Name
                   </th>
                   <th>
                       Status
                   </th>
               </tr>
           </thead>
           <tbody>
            {
                this.props.tasks.filter(task =>{
                    return task.status === 'Done'
                }).map(task =>{
                    return (<tr>
                            <td>{task.name} </td>
                            <td>{task.status} <span className='del-btn' onClick={() => this.delToDo(task.id)}>x</span></td>
                        </tr>)
                })
            }
           </tbody>
        </table>
        
      </>
    )
  }
}

const mapStateToProps = store =>{
    return ({
        tasks: store.tasks,
    }) 
}

const mapDispatchToProps = dispatch =>{
    return (
      {
        editToDo: editedTodo => dispatch({type: 'EDIT_TODO', payload: editedTodo}),
        deleteToDo: deletedTodo => dispatch({type: 'DELETE_TODO', payload: deletedTodo}),
      }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);