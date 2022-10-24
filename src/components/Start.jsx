import React, { useRef } from 'react'

const Start = ({setUserName}) => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value &&  setUserName(inputRef.current.value)
    }

  return (
    <div className='start'>
        <input className="startInput" type="text" placeholder="Enter your name" ref= {inputRef}/>
        <button className="startButton" onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start