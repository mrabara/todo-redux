import './App.css';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTaskForm';

function App() {
  return (
    <div className="App">
      <AddTaskForm />
      <Tasks />
    </div>
  );
}

export default App;
