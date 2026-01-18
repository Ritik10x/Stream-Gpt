import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Browse from './components/Browse'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='w-full'>
     {/* <Header /> */}
      <Browse/>
     
     </div>
   )
}

export default App
