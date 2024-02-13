
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';

export const UseAuthContextComponent = () => {
    const context = useContext(AuthContext);
    return context;
}
