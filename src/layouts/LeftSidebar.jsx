import React from 'react'
import Menu from './Menu'
import Account from '../components/Account'

function LeftSidebar() {
  return (
    <>
      <aside className='px-2 pt-1 d-flex flex-column' style={{width: "330px", minHeight: "100vh", overflowY: "auto"}}>
        <Menu/>
        <Account/>
      </aside>
    </>
  )
}

export default LeftSidebar
