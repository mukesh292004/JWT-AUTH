import { useContext } from 'react';
import { FirstContext } from '../context/FirstContextProvider';

export const UseContextComponent = () => {
    const context = useContext(FirstContext);
    return context;
};
