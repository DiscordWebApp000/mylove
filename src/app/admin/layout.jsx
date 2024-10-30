/* 'use client'; */
/* import { useState } from 'react'; */
import AdminHeader from "../../components/Admin/AdminHeader";


export const metadata = {
  title: "Admin",
  description: "Admin Panel",
};
const AdminPanelLayout = ({children}) => {




  
  return (

<>

<AdminHeader/>
<main className="w-full p-5 flex flex-col justify-center items-center">
    {children}
</main>

</>

  );
};

export default AdminPanelLayout;
