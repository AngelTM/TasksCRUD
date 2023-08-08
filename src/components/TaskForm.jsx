import React, { useState,useEffect } from 'react'
import { addTask,editTask } from '../features/tasks/TaskSlice'
import { useDispatch,useSelector } from 'react-redux'
import {v4 as uuid} from 'UUID'
import { useNavigate,useParams } from 'react-router-dom'

export const TaskForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const tasks = useSelector(state=>state.tasks)
    const [task,setTask]= useState({
            title: "",
            description: "",
        })

    useEffect(() => {
      if (params.id) {
        const foundTask = tasks.find(task=>task.id === params.id);
        setTask(foundTask)
      }
    }, [params.id,tasks])
    
    const handleChange = (e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value,
        });
        
    }
    const handleSubmit=(e)=>{
        if (params.id) {
            dispatch(editTask(task))
            navigate('/')
        }else{
            e.preventDefault();
            dispatch(addTask({
                ...task,
                id:uuid()
            }))
            navigate('/')
        }
    }
  return (
    <form className='bg-zinc-800 max-w-sm p-4' onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor='title' className='block text-xs font-bold mb-1'>Task:</label>
        <input className='w-full p-2 rounded-md bg-zinc-600 mb-2'  value={task.title} name="title"></input>
        <label htmlFor='description'  className='block text-xs font-bold mb-1' >Description:</label>
        <textarea className='w-full p-2 rounded-md bg-zinc-600 mb-2' value={task.description} name="description" id="" cols="30" rows="10"></textarea>
        <button className='bg-indigo-600 px-2 py-1' >Add</button>
    </form>
  )
}
