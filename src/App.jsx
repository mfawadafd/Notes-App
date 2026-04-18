import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    
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
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
       className="flex flex-col lg:w-1/2 items-start p-10 gap-4">
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        
        {/* First Wla Input for Title */}
        <input 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        type="text" 
        
        placeholder='Enter Notes Heading'
        className='px-4 py-2 w-full border-2 font-medium outline-none'
        />

        {/* Detail Wla Input */}
        <textarea 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        type="text" 
        
        placeholder='Write Details'
        className='px-5 py-2 w-full h-32 border-2 font-medium outline-none'
        />
        <button className='px-5 py-2 w-full bg-white font-medium text-black rounded outline-none active:scale-95'>Add Note</button>
      </form>
      <div className='p-10 lg:border-l-2 lg:w-1/2 bg-black'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 overflow-auto h-[90%] '>
        {task.map((elem,idx)=>{
          return <div  className='relative flex flex-col justify-between items-start md:items-center bg-black text-black h-52 py-8 px-4 rounded bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
            <div className='overflow-y-hidden max-h-32'>
              <h1 className='leading-tight text-lg font-bold break-word'>{elem.title}</h1>
            <p className='mt-2 leading-tight font-medium text-gray-500 text-xsm '>{elem.details}</p>
            </div>
            <button onClick={()=>{
              DeleteNote(idx)
            }} className='bg-red-500 w-full rounded py-1 text-white text-xs font-bold active:scale-95 cursor-pointer'>Delete</button>
          </div>
        })}
        
        </div>
      </div>
    </div>
  )
}

export default App