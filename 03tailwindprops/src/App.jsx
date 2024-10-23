import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
   <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-slate-500 flex-col gap-10 '>
    <div className='text-cyan-400 font-bold text-2xl'>Increment & Decrement</div>
    <div className='bg-slate-100 flex justify-center gap-7 py-3 rounded-sm text-[10px] text-red-300'>
      <button onClick={decreaseHandler} className='border-r-2 text-2xl  w-15 border-slate-800 '>-</button>
      <div className='font-bold gap-12 text-5xl items-center'>
      {count}
      </div>
      <button onClick={increaseHandler} className='border-l-2 text-2xl w-15 border-slate-800 '>+</button>
      </div>
      <button onClick={resetHandler} className='text-xl text-cyan-400 rounded-sm'>Reset</button>
   
   </div>
  );
}

export default App
