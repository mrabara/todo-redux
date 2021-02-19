import { uuid } from 'uuidv4';

const initialState = {
    tasks : [
        {
            id: uuid(),
            name: 'eat',
            status: 'Pending',
        },
        {
            id: uuid(),
            name: 'code',
            status: 'Pending',
        },
        {
            id: uuid(),
            name: 'sleep',
            status: 'Done',
        },
    ],
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ADD_TODO':
            let newTask = action.payload;
            let tasks = [...state.tasks, newTask];
            return {
                ...state,
                tasks: tasks
            }
        case 'EDIT_TODO':
            let editTask = action.payload;
            
            return {
                tasks: editTask
            }
        case 'DELETE_TODO':
            let deleteTask = action.payload;
            
            return{
                tasks: deleteTask
        }
        default:
            return state;
    }
   
}

export default reducer;
