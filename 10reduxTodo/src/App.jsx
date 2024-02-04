import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
