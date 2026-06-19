
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Profilepage from './pages/Profilepage'
import PrivateRoute from './private/PrivateRoute'


const App = () => {


  return (
   <>
   <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<PrivateRoute><Homepage/></PrivateRoute>}/>
     <Route path='/profile' element={<PrivateRoute><Profilepage/></PrivateRoute>}/>
   </Routes>
   
   
   </>
  )
}

export default App
