import logo from './logo.svg';
import './App.css';
import { data } from './data';
import TododList from './Components/TododList';
import './App.css'
import Add from './Components/Add';

function App() {
  const [tasks, settasks] =useState(data)
 const handleDelete=(x)=>settasks(tasks.filter(el=>x!=el.id!=x))
 const handleComplete=(y)=>settasks(tasks.map(el=>el.id===y?{...el,isDone:!el.isDone}:el))
  const handleAdd=(z)=>{
    const newTask={
      i:Math.random(),action:z,isDone:false
    }
    settasks([...tasks,newTasks])
  }
 return (
    <div className="App">
      <Add add={handleAdd}/>
       <TododList tasks={tasks}del={handleDelete}comp={handleComplete} />
    </div>
  );
}

export default App;
