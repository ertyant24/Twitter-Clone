import React from 'react'
import Logo from '../logo/Logo'

function LeftSidebar() {
  return (
    <>
      <aside className='px-2 pt-3' style={{width: "275px", minHeight: "100vh"}}>
        <Logo/>
      </aside>
    </>
  )
}

export default LeftSidebar
