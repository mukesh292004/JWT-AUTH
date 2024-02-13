import React, { useEffect } from 'react';
import Workouts from './Workouts';
import WorkoutForm from './WorkoutForm';
import { UseContextComponent } from './hooks/UseContextComponent';
import { UseAuthContextComponent } from './hooks/Authhook';

const Home = () => {
    const { user } = UseAuthContextComponent();
    const { workout, dispatch } = UseContextComponent();

    useEffect(() => {
        const fetchData = async () => {
            
            const response = await fetch('http://localhost:4000/workouts', 
           { 
            headers: {
                'Authorization': `Bearer ${user.token}`
                
            }});
            const json = await response.json();
           
            if (response.ok) {
                dispatch({ type: 'ADD_WORKOUT', payload: json});
            }
        };
        if(user){
            
            fetchData();
           }
        
    }, [dispatch, user]); 

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-5xl text-center my-8">Workout List</h1>
            <div className="flex flex-row">
                <div className="w-3/4">
                    {workout && workout.map((workoutItem) => (
                        <Workouts key={workoutItem._id} workout={workoutItem} />
                    ))}
                </div>
                <div className="w-1/4">
                    <WorkoutForm />
                </div>
            </div>
        </div>
    );
};

export default Home;
