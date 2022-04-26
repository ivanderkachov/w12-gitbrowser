import React, { useState } from 'react'
import { history } from '../redux'
import Head from './head'

const Dummy = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {    
    setValue(e.target.value)
  }
  return (
    <div>
    <Head title="Hello" />
    <div className="flex justify-center items-center h-screen">
    <div className="flex justify-center bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"> 
      <div>
        <div className="flex justify-center">Enter Username</div>
        <div> <input id = "input-field" className = "flex justify-center text-black" type="text" value={value} onChange={onChange}/>  </div>
        <div> <button 
               id = "search-button" 
               className = "flex justify-center rounded bg-gray-200 shadow text-black border shadow-lg p-1 font-bold " 
               type = "button" 
               onClick = {() => {history.push(`./${ value }`)}}
               > 
               button 
               </button> 
        </div>
      </div>
     </div> 
    </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
