import { useContext } from 'react'
import userContext from '../utils/userContext';

const Home = () => {

    const {user}= useContext(userContext);
  return (
    <div>
        {user ? <h1>Hi {user}</h1>: <h1>Please Login</h1> }
    </div>
  )
}

export default Home
