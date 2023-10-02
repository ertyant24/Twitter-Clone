import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

function MainLayout() {
  return (
    <>
      <div className='container d-flex' style={{ width: "1265px" }}>
        <LeftSidebar />
        <div className='mt-1 border-start border-end border-white border-opacity-25 pt-1 px-3' style={{width: "600px"}}>
          <Outlet />
        </div>
        <RightSidebar/>
      </div>

    </>
  )
}

export default MainLayout
