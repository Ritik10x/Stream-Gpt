import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Browse from './components/Browse'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div><h1 className='text-red-400'
     >Hello Stream-GPt</h1>
     <Browse/>
     
     </div>
   )
}

export default App
