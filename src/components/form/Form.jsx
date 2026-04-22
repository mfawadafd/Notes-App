import React from 'react'
import Button from '../buttons/Button'
const Form = ({title, setTitle, details, setDetails, submitHandler}) => {
  return (
    <div className='w-full lg:w-1/2'>
        <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
       className="flex flex-col w-full items-start p-10 gap-4">
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
        <Button/>
      </form>
    </div>
  )
}

export default Form
