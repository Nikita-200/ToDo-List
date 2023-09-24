"use client"
import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

const App = () => {
const [title,setTitle] = useState("");
const [desc,setDesc] = useState("");
const [mainTask,setMainTask]=useState([]);

const submitHandler = (e) => {
  e.preventDefault();
  setMainTask([...mainTask, {title, desc}]);

setTitle("");
setDesc("");
console.log(mainTask);
}

const deleteHandler = (index) => {
   let copytask = [...mainTask];
   copytask.splice(index,1);
   setMainTask(copytask);
}

const editHandler = (index) => {
  // Copy the mainTask array to a new array
  let updatedMainTask = [...mainTask];

  // Get the task object at the specified index
  const taskToEdit = updatedMainTask[index];

  // Set the title and description in the state for editing
  setTitle(taskToEdit.title);
  setDesc(taskToEdit.desc);

  // Remove the task from the array
  updatedMainTask.splice(index, 1);

  // Update the mainTask array with the edited values
  setMainTask(updatedMainTask);
}


let renderTask = <h2>No Tasks Available</h2>;

if(mainTask.length > 0) {
renderTask = mainTask.map((value,index) => {
  return (
    <li key={index} className='flex items-center justify-between mb-8'>
    <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{value.title}</h5>
      <h6 className='text-xl font-medium'>{value.desc}</h6>
    </div>
    <button
      onClick={()=>{
        editHandler(index)
      }
        } >
        <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
        </button>

    <button
    onClick={()=>{
      deleteHandler(index)
    }
      } >
      <FontAwesomeIcon icon={faTrash} className="text-red-500" />
      </button>
    </li>
  )
})
}

 
  return (
    <>
    <h1 className='bg-black
     text-white p-5 text-5xl font-bold 
     text-center'>Nikita's Todo List</h1>
     <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800
      border-4 m-8 px-4 py-2 '
      placeholder='Enter Task here'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      /> 
       <input type="text" className='text-2xl border-zinc-800
      border-4 m-8 px-4 py-2 '
      placeholder='Enter Description here'
      value={desc}
      onChange={(e)=>{
        setDesc(e.target.value);
      }}
      /> 
      <button className='text-white bg-black px-4 py-2 text-2xl 
      font-bold rounded' >
        Add Task
        </button>
     
     </form>

    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>

    </>
  )
}

export default App
