import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed,setCharacterAllowed]=useState(false);
  const [password,setPassword]=useState('');
  const passwordRef= useRef();

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="1234567890";
    if(characterAllowed) str+="!@#$%^&*()_+-={}:;><.,/?";

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass+=str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,characterAllowed,setPassword]);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[[password]]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg p-5 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" ref={passwordRef} value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>
          <button className='outline-none text-white py-0.5 px-3 bg-blue-700 shrink-0' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range" min={0} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target?.value)}/>
            <label> Length: {length} </label>
          </div>
        <div className="flex text-sm gap-x-2">
            <input type='checkbox'id='numberInput' defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)}/>
            <label> Number Allowed </label>
        </div>
        <div className="flex text-sm gap-x-2">
            <input type='checkbox'id='numberInput' defaultChecked={characterAllowed} onChange={()=>setCharacterAllowed((prev)=>!prev)}/>
            <label> Character Allowed </label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
