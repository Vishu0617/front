import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../AdminComponent/Header/AdminHeader'

function AdminLayout() {
  return (
    <>
     <AdminHeader/>
     <Outlet />
    </>
  )
}

export default AdminLayout