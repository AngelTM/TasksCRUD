import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/TaskSlice'
import { Link } from 'react-router-dom'

export const Tasklist = () => {
    const tasks = useSelector((state)=>state.tasks)

    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }

  return (
    <div>
      <header>
        <h1>Tasks {tasks.length} </h1>
        <Link to='/create-task'>
          create Task
        </Link>
      </header>
        {tasks.map(
            task => 
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={()=>handleDelete(task.id)}>Delete</button>
            </div>
            )}
    </div>
  )
}
