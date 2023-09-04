import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <main className='lg:p-8 px-4 py-8'>
      <Home/>
      <ToastContainer/>
    </main>
  )
}

export default App
