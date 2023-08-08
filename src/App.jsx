import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TaskForm } from './components/TaskForm'
import { Tasklist } from './components/Tasklist'
import {BrowserRouter,Routes,Route}from 'react-router-dom'

function App() {
  const state = useSelector((state)=> state.tasks)
  console.log(state)
  return (
    <>
      <div className='bg-zinc-900 h-screen text-white' >
        <div className='flex items-center justify-center h-full'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Tasklist/>} />
              <Route path='/create-task' element={<TaskForm/>} />
              <Route path='/edit-task/:id' element={<TaskForm/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
