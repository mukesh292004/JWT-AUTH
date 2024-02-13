import { useReducer,createContext, useEffect } from "react";

const AuthContext = createContext();
const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case "LOGOUT":
            return{user:null}
        default:
            return state;
    }
        
}
const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, {user:null});
    useEffect(() => {
        const user = localStorage.getItem('user');
        if(user){
            dispatch({type:'LOGIN', payload:JSON.parse(user)})
        }
    }
    ,[])
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthContextProvider}