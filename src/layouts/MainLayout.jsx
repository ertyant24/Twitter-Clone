import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

function MainLayout() {
  return (
    <>
      <div className='container d-flex gap-4' style={{ width: "1265px" }}>
        <LeftSidebar />
        <div className='mt-2 border-start border-end border-white border-opacity-25 pt-3 px-3' style={{width: "600px"}}>
          <Outlet />
        </div>
        <RightSidebar/>
      </div>

    </>
  )
}

export default MainLayout
