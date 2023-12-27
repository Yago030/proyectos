import TaskLIst  from './components/TaskList'; 
import TaskForm  from './components/TaskForm'; 

function App() {
  return (
    <div className='bg-zinc-900 h-screen text-white flex items-center justify-center'>
       <div className='bg-gray-950 p-4 w-2/5 rounded-lg'>
        <h1 className='text-3xl font-bold text-center block my-2'>Task App</h1>
        <TaskForm />
        <TaskLIst />
       </div>
    </div>
  )
}

export default App
