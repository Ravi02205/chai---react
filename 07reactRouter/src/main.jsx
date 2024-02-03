import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createPath, createRoutesFromElements } from 'react-router-dom'
import { About, Contact, Github, Home, User} from './components/index.js'
import githubInfoLoader from './utils/githubLoader.js'

let routes=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={ <Home/> }></Route>
      <Route path='contact' element={<Contact/>} ></Route>
      <Route path='about' element={<About/>} ></Route>
      <Route path='path/:userId' element={<User/>} ></Route>
      <Route path='github' element={<Github/> } loader={githubInfoLoader} ></Route>
    </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={routes} />);