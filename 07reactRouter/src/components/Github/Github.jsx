import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  // let [data,setData]=useState({});
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/ravi02205').then(res=>res.json())
  //   .then(data=>setData(data));
  // },[]);
  const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="github Profile Pic" width={300}/>
    </div>

  )
}

export default Github
