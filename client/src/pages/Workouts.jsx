import React from 'react'
import { UseContextComponent } from './hooks/UseContextComponent';
import { UseAuthContextComponent } from './hooks/Authhook';

const Workouts = ({workout}) => {
  const {user}=UseAuthContextComponent()
  const { dispatch } = UseContextComponent();
async  function Deletehandler (id){
 
    const data=await fetch('http://localhost:4000/workouts/'+id,{
      method:'DELETE',
      headers:  {
        'Authorization':`Bearer ${user.token}`

    }

    })
    const res=await data.json();
    if(data.ok){
     
    dispatch({type:'DELETE_WORKOUT',payload:res})
    }

  }
  return (
   <>
    
        <div className=' bg-gray-200 m-4 p-4 rounded-lg text-red-500 space-y-8'>
             
            <h1 className='text-3xl text-green-400'>{workout.title}</h1>
            <p><strong>Load(Kgs) : </strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.rep}</p>
            <p><strong>CreatedAt : </strong>{workout.createdAt}</p>
            <button onClick={()=>{Deletehandler(workout._id)}}>Delete</button>

        </div>
    
    
   </>
  )
}

export default Workouts