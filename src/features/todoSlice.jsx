import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
    todos: [{ id: 1, task: "Sample Task" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                task: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        hasOldTasks : () => {
            const oldTasksCount = localStorage.length;
            if(oldTasksCount === 0) {
                alert("no tasks")
            }
        }
    },
})


export const { addTodo, removeTodo, hasOldTasks } = todoSlice.actions;

export default todoSlice.reducer