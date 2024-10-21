
import { Router  , Routes , Route} from 'react-router-dom'
import Hero from './pages/Hero'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <>
   
    <Routes>
      <Route path = '/' element= {<Hero/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   
   
    </>
  )
}

export default App
