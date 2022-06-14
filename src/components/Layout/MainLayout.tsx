import React from 'react';
import Navigation from '@Components/Common/Navigation';
interface MainProps {
    children: React.ReactNode;
}
const MainLayout: React.FC<MainProps> = ({ children }) => {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    );
};
export default MainLayout;
