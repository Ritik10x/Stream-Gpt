import { useState } from 'react'

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
