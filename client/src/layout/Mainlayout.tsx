import AppSidebar from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import React from 'react'
const Mainlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="bg-[#2b2c28] h-full w-full grid grid-cols-12 text-white gap-4 relative">
      <div className="col-span-2 items-center">
        <AppSidebar />
      </div>
      <div className="w-full col-span-10 h-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Mainlayout