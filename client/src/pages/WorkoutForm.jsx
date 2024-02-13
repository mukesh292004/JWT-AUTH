import React, { useState } from 'react';
import { UseContextComponent } from './hooks/UseContextComponent';
import { UseAuthContextComponent } from './hooks/Authhook';

const WorkoutForm = () => {
  const {user}=UseAuthContextComponent()
  const { dispatch } = UseContextComponent();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [rep, setRep] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault()
      if(!user){
        return
      }
    const workout = {title, load, rep}
    console.log(user)
    const response = await fetch('http://localhost:4000/workouts', {
      method: 'POST',
    
    
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
  
      
      }
    })
    const json = await response.json()

   
    if (response.ok) {
      setTitle('')
      setLoad('')
      setRep('')
      
      dispatch({type: 'CREATE_WORKOUT', payload: json.workout})
    }

  }

  

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /> 
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="load">
            Load
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="load"
            type="number"
            placeholder="Enter Load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rep">
            Rep
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rep"
            type="number"
            placeholder="Enter Rep"
            value={rep}
            onChange={(e) => setRep(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
