import React from 'react'
import Logo from '../logo/Logo'
import Menu from './Menu'

function LeftSidebar() {
  return (
    <>
      <aside className='px-2 pt-1' style={{width: "275px", minHeight: "100vh"}}>
        <Logo/>
        <Menu/>
      </aside>
    </>
  )
}

export default LeftSidebar
