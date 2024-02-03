import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), todoMsg: todo }]);
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((todoItem) => (todoItem.id == id) ? todo : todoItem));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todoItem) => (todoItem.id != id)));
  };

  const toggleCompleteTodo = (id) => {
    setTodos((prev) => prev.map((todoItem) => (todoItem.id == id) ? { ...todoItem, completed: !todoItem.completed } : todoItem));
  };

  useEffect(() =>{
    const todosStorage=JSON.parse(localStorage.getItem('todos'));
    if(!todosStorage) return;
    if(todosStorage && todosStorage.length > 0){
      setTodos(todosStorage);
    }
  },[]);

  useEffect(() =>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleCompleteTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((item)=>(
                <div className='w-full'>
                <TodoItem todo={item} key={item.id} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
