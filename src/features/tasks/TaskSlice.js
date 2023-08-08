import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    {
        id: "1",
        title: "Task 1",
        completed: false,
        description: "This is a task",
      },
      {
        id: "2",
        title: "Task 2",
        completed: false,
        description: "This is a task",
      },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask:(state,action)=>{
            state.push(action.payload)
        },
        deleteTask:(state,action)=>{
            const taskfound = state.find(task => task.id === action.payload)
            if(taskfound){
                state.splice(state.indexOf(taskfound),1)
            }
            console.log(action.payload)
        },
        editTask:(state,action)=>{
            const {id,title,description} = action.payload
            const foundTask = state.find(task => task.id===id)
            foundTask.title = title
            foundTask.description = description
        }
    },
  })

export const {addTask,deleteTask,editTask} = taskSlice.actions
export default taskSlice.reducer
