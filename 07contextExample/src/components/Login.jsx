/**
 * This code snippet represents a functional component called Login.
 * It is used for rendering a sign-in form and handling user input.
 * The component utilizes React's useContext and useState hooks.
 * It imports the userContext from '../utils/userContext' and uses it to access the setUser function.
 * The component renders an input field for the username, an input field for the password, and a submit button.
 * When the submit button is clicked, the handleSubmit function is called, which sets the user using the setUser function from the userContext.
 */

import { useContext, useState } from 'react'
import userContext from '../utils/userContext';

const Login = () => {
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();

    const {setUser}= useContext(userContext);

    const handleSubmit = ()=>{
        setUser(userName);
    }
  return (
    <div>
      <h1>Sign In</h1>
      <input type="text" name='userName' onChange={(e)=>setUserName(e.target.value)} placeholder='userName' />
      {"  "}
      <input type="passWord" name='password' onChange={(e)=>setPassword(e.target.value)}  placeholder='Password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
