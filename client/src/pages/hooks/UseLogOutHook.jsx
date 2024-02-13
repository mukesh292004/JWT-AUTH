
import { UseAuthContextComponent } from './Authhook'

export const UseLogOutHook = () => {
  const {dispatch}=UseAuthContextComponent();
  const logout  =()=>{
    
    localStorage.removeItem('user');
    dispatch({type:'LOGOUT'})
  }
    return {logout}
}

// export  UseLogOutHook