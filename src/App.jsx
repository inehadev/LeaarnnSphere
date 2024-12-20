
import { Router  , Routes , Route} from 'react-router-dom'
import Hero from './pages/Hero'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {


  return (
    <>
   
    <Routes>
      <Route path = '/' element= {<Hero/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   
   
    </>
  )
}

export default App
