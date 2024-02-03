import { useContext,createContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoMsg:'Hi',
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleteTodo:(id)=>{},
});

export const useTodo=()=>useContext(TodoContext);

export const TodoProvider=TodoContext.Provider;

