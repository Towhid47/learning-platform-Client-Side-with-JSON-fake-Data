import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../../components/Navigationbar/Navigationbar';

const Root = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;