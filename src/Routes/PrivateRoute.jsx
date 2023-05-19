import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="success" />
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}  replace></Navigate>
    
};

export default PrivateRoute;