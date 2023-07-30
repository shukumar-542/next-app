import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <h1>side bar</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;