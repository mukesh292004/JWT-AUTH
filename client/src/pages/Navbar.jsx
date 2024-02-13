import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {UseLogOutHook} from './hooks/UseLogOutHook'
import {UseContextComponent} from './hooks/UseContextComponent'
import { UseAuthContextComponent } from './hooks/Authhook'

const Navbar = () => {
  const {user}=UseAuthContextComponent()
  const {logout}=UseLogOutHook()
  const handlelogout=()=>{
    logout()
  }
  return (
    <nav className='w-full bg-black h-14 text-red-500 flex items-center text-3xl justify-center '>
     <Link to="/">Workout Tracker</Link>
      <div className='flex justify-end w-1/2  space-x-10'>
        
        {user && (
        <><span className='text-white'> {user.email}</span><button onClick={handlelogout}>Logout</button></>
  )
        }

        {!user && (<><NavLink  to="/Auth/login">Login</NavLink>
        <NavLink to="/Auth/signup">Signup</NavLink></>)}
        
        
      </div>
    </nav>
  )
}

export default Navbar