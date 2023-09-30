import {Route, Routes} from 'react-router-dom'
import { AuthProvider } from './Context/authContext'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Registro } from './Components/Registro'
import { Chat } from './Components/Chat'

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/registro' element={ <Registro/> }/>
        <Route path='/chat' element={ <Chat/> }/>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
