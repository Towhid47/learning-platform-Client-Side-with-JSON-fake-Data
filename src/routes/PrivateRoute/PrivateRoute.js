import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(location);

    if(loading){
        return   <div className='d-flex align-items-center justify-content-center'><Spinner animation="border" variant="dark" /></div>
    }


    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    
        return children;
 
};

export default PrivateRoute;