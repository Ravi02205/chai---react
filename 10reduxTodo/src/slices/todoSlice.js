import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                msg: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos.forEach(todo => todo.msg = (todo.id == action.payload.id) ? action.payload.msg : todo.msg);
        }
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice?.actions;

export default todoSlice?.reducer;