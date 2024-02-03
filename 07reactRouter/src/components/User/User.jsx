import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let params=useParams();
  return (
    <div>
      <h1 className=' text-xl m-4 font-bold bg-red-700 p-4 text-center'> User Id : {params?.userId}</h1>
    </div>
  )
}

export default User
