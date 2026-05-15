import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen flex flex-col overflow-x-hidden">

            <Header />
            <Sidebar />

            {/* Right Side */}
            <div className="flex-1 lg:ml-[260px] pt-[95px] flex flex-col">

                {/* Page Content */}
                <div className="flex-1 p-5">
                    <Outlet />
                </div>
            </div>
            {/* Footer */}
            <Footer />

        </div>
    );
};

export default MainLayout;