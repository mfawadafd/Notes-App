import React from 'react'

const Cards = ({ task, setTask, DeleteNote }) => {
    return (
        <div className='w-full lg:border-l-2 lg:w-1/2'>
            <div className='p-10 bg-black'>
                <h1 className='text-3xl font-bold'>Recent Notes</h1>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 overflow-auto h-[90%] '>
                    {task.map((elem, idx) => {
                        return <div className='relative flex flex-col justify-between items-start md:items-center bg-black text-black h-52 py-8 px-4 rounded bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
                            <div className='overflow-y-hidden max-h-32'>
                                <h1 className='leading-tight text-lg font-bold break-word'>{elem.title}</h1>
                                <p className='mt-2 leading-tight font-medium text-gray-500 text-xsm '>{elem.details}</p>
                            </div>
                            <button onClick={() => {
                                DeleteNote(idx)
                            }} className='bg-red-500 w-full rounded py-1 text-white text-xs font-bold active:scale-95 cursor-pointer'>Delete</button>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Cards
