import Navbar from '@/component/Navbar';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <footer>Footer Page</footer>
        </>
    );
};

export default WithLayout;