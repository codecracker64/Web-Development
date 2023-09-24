import React,{useState,useEffect} from "react";
import './App.css';
// import InputField from './components/inputField';
// import Items from './components/Items';

function App() {

  const URL = "http://localhost:5000";

  const [input,setInput] = useState("");
  const [tasks , setTasks] = useState([]);

  useEffect(()=>{
    fetchedItems().then(res=>{
    console.log(res);
    setTasks(res);
    })
  },[])

  const fetchedItems = ()=>{
    return fetch(URL)
    .then(res=>res.json());
  }

  function handleInputChange(e){
    setInput(e.target.value);
  }

  async function handleSubmit(e){
    e.preventDefault();
    setInput("");
    try{
      const results = await fetch(URL,{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify({input:input})
      });
      const value = await results.json().then(data=>data);
      console.log(value);
      setTasks([...tasks,value]);
    }
    catch(err){
      console.log("error:",err)
    }
  }

  async function handleDelete(id){
    try{
      const results = await fetch(URL,{
        method:"DELETE",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify({id:id})
      });
      // if router function in backend does not return anything, this await will keep waiting and below code won't be execcute.
      let resultArr = tasks.filter(task=>task._id!==id);
      setTasks(resultArr);
    }
    catch(err){
      console.log("error Handle delete:",err)
    }
  }

  async function handleClick(id,completeStatus){
    const foundTask = tasks.findIndex(task=>task._id==id);
    tasks[foundTask].completed = !tasks[foundTask].completed;
    setTasks([...tasks]); // setTasks(tasks) or setTasks([tasks]) don't work here why??
    const results = await fetch(URL,{
      method:"PUT",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify({id:id,completeStatus:!completeStatus})
    });
  }

  return(
  <div className="rootDiv">
    <div className="headerDiv">
      <h2>To Do List</h2>
    </div>
    <form onSubmit={handleSubmit} className="form">
      <input name="input" type="text" placeholder="enter task" value={input} onChange={handleInputChange}></input>
      <button type="submit">Add Task</button>
    </form>
    <div className="tasksRoot">
      {tasks.map((task)=>(
        <div className={`${task.completed?"done":"notDone"} tasks`} key={task._id} id={task._id}>
          <input type="checkbox" onChange={()=>handleClick(task._id,task.completed)} checked={task.completed}/>
          <label htmlFor={task._id} contentEditable="true">
            {task.value}
          </label>
          <button onClick={()=>handleDelete(task._id)}><img src="delete.png" alt="DELETE" width="20px" heigh="20px"/></button>
        </div>
      ))}
    </div>
  </div>
  );
}

// <ul>
// {tasks.map((task)=>(
//     <div>
//       <li className={task.completed?"done":"notDone"} key={task._id} id={task._id} onClick={()=>handleClick(task._id,task.completed)}>
//       <input type="checkbox" />{task.value}</li>
//     </div>
//   )
// )}
// </ul>

export default App;
