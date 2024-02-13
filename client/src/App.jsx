
import{ BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Signup from './pages/signup'
import Login from './pages/login'
import { UseAuthContextComponent } from './pages/hooks/Authhook'

function App() {
  const {user}=UseAuthContextComponent()
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ user ? <Home/>:<Navigate to='/Auth/login'/>} />
        <Route path="/Auth/login" element={!user?<Login/>:<Navigate to='..'/>}  />
        <Route path="/Auth/signup" element={!user?<Signup/>:<Navigate to='..'/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
