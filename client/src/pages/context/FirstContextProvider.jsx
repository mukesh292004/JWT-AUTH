import React, { useReducer } from 'react';
import { createContext } from 'react';

export const FirstContext = createContext();

export const Reducerfunction = (state, action) => {
    switch(action.type) {
        case 'ADD_WORKOUT':
            return { workout: action.payload };
        case 'CREATE_WORKOUT':
            console.log(action.payload)
            return { workout: [ ...state.workout, action.payload] };
        case 'DELETE_WORKOUT':
            return { workout: state.workout.filter((workout) => workout._id !== action.payload._id) };
        default:
            return state; 
    }
}

export  const FirstContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducerfunction, { workout:null });



    return (
       
            <FirstContext.Provider value={{...state, dispatch}}>
                {children}
            </FirstContext.Provider>
        
    );
}

