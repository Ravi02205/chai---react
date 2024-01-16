
import {useState} from 'react';
function App() {
  let [color,setColor]=useState('red');
  return (
    <>
     <div className={`h-screen bg-${color}-400 `} style={{backgroundColor:color}}>
      <div className="flex justify-center fixed bottom-12 inset-x-0">
        <div className="flex justify-center p-2 bg-white rounded-2xl shadow-lg">
          <button className="p-2 rounded-full" style={{backgroundColor:'Red'}} onClick={()=>{setColor('Red')}}>Red</button>
          <button className="p-2 rounded-full" style={{backgroundColor:'White'}} onClick={()=>{setColor('White')}}>White</button>
          <button className="p-2 rounded-full" style={{backgroundColor:'blue'}} onClick={()=>{setColor('blue')}}>Blue</button>
          <button className="p-2 rounded-full" style={{backgroundColor:'pink'}} onClick={()=>{setColor('pink')}}>Pink</button>
          <button className="p-2 rounded-full" style={{backgroundColor:'yellow'}} onClick={()=>{setColor('yellow')}}>Yellow</button>
          <button className="p-2 rounded-full" style={{backgroundColor:'purple'}} onClick={()=>{setColor('purple')}}>Purple</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
