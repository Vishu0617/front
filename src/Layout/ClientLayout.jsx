import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from '../UserComponent/Header/ClientHeader'

function ClientLayout() {
  return (
    <>
      <ClientHeader />
      <Outlet/>
    </>
  )
}

export default ClientLayout