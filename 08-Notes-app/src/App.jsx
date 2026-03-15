import { useState } from 'react'
import './style.css'
const App = () => {
  const notes=[
    {
      id:1,
      title:"Do project",
      detail:"akjldfffffffffffjafkllllllldjkldsfakdlsfaklafdsjk"
    },
    {
      id:2,
      title:"Do project",
      detail:"asdasdfasdfasdfasdkljflasdkfjlaksdjfladksfjlaskdjfk"
    },
  ]
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    setTitle("")
    setDetail("")
    console.log(`title:${title}, detail: ${detail} `);
    
  }

  const handleTitleInput=(e)=>{
    setTitle(e.target.value)
  }

  const handleDetailInput=(e)=>{
    setDetail(e.target.value)
  }
  return (
    <div className='h-screen text-amber-700 flex items-start justify-between gap-6 p-10'>
      <form action="" className='w-1/2'>
        <div className='flex flex-col gap-3'>
          <input type="text" 
          className='px-3 py-5 h-10 w-full font-medium outline-none border-2 rounded-2xl' 
          placeholder='Title'
          value={title}
          onChange={(e)=>{
            handleTitleInput(e)
          }}
          />
          <textarea className='px-3 py-2 h-20 font-medium  outline-none w-full border-2 rounded-2xl' placeholder='Detail' 
          value={detail}
          onChange={(e)=>{
            handleDetailInput(e)
          }}
          />
          <button className='h-10 border-2 rounded-2xl w-full'
          onClick={(e)=>{
            handleSubmit(e)
          }}
          >Add</button>
        </div>
      </form>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map(
          note=>(
            <div key={note.id} className="bg-[#FFEFD2] h-47 rounded-2xl px-3 py-2 text-gray-800 shadow-lg">
            <p className='text-center text-lg border-b-2 border-amber-700'>Title</p>
            <p className='text-sm leading-relaxed line-clamp-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, libero!</p>
          </div>
          )
        )}

        </div>

    </div>
  )
}

export default App  