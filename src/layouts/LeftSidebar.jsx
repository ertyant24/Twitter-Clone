import React from 'react'
import Logo from '../logo/Logo'
import Menu from './Menu'

function LeftSidebar() {
  return (
    <>
      <aside className='px-2 pt-1 d-flex flex-column' style={{width: "330px", height: "100vh", overflowY: "auto"}}>
        <Menu/>
        <div style={{marginLeft: "30px", height: "70px", width: "250px"}} className='mt-auto home d-flex align-items-center'>
          Hesap
        </div>
      </aside>
    </>
  )
}

export default LeftSidebar
