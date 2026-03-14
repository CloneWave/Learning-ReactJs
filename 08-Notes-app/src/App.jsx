
import './style.css'
const App = () => {
  return (
    <div className='h-screen text-amber-700'>
      <form action="" className='flex justify-between items-start p-10'>
        <div className='flex flex-col gap-3 items-start w-1/4'>
          <input type="text" className='px-3 py-5 h-10 w-full font-medium outline-none border-2 rounded-2xl  ' placeholder='Task Title'/>
          <textarea type="text" className='px-3 py-2 h-20 font-medium  outline-none w-full border-2 rounded-2xl' placeholder='Task Detail' />
          <button className='h-10 border-2 rounded-2xl w-full'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default App