import React, { useState } from 'react'
import Form from './components/form/Form'
import Cards from './components/cards/Cards'
import Button from './components/buttons/Button'
const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(submitHandler)
    const copyTask=[...task];
    
    copyTask.push({title,details});
    setTask(copyTask)
    console.log(task);

    setTitle('')
    setDetails('')
  }

  const DeleteNote =(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen bg-black  lg:flex text-white lg-flex'>
      <Form title={title} setTitle={setTitle} details={details} setDetails={setDetails} submitHandler={submitHandler}/>
     <Cards task={task} setTask={setTask} DeleteNote={DeleteNote}/>
     {/* <Button/> */}
    </div>
  )
}

export default App