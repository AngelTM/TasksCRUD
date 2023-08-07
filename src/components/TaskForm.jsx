import React, { useState } from 'react'
import { addTask } from '../features/tasks/TaskSlice'
import { useDispatch } from 'react-redux'
import {v4 as uuid} from 'UUID'
import { useNavigate } from 'react-router-dom'

export const TaskForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [task,setTask]= useState({
            title: "",
            description: "",
        })
    const handleChange = (e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value,
        });
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTask({
            ...task,
            id:uuid()
        }))
        navigate('/')
    }
  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="title"></input>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <button>Add</button>
    </form>
  )
}
