import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { TaskForm } from './components/TaskForm'
import { Tasklist } from './components/Tasklist'
import {BrowserRouter,Routes,Route}from 'react-router-dom'

function App() {
  const state = useSelector((state)=> state.tasks)
  console.log(state)
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Tasklist/>} />
            <Route path='/create-task' element={<TaskForm/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
