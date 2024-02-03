import './App.css'
import Home from './components/Home'
import UserContextProvider from './utils/UserContextProvider'
import Login from './components/Login'

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Home/>
    </UserContextProvider>
  )
}

export default App
