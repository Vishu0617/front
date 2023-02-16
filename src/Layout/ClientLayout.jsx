import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from '../UserComponent/Header/ClientHeader'

function ClientLayout({clientData}) {
  return (
    <>
      <ClientHeader clientData={clientData} />
      <Outlet/>
    </>
  )
}

export default ClientLayout