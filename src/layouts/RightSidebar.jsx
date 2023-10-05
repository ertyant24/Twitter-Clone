import React from 'react'
import Search from '../components/Search'
import Abone from '../components/Abone'
import Agenda from '../components/Agenda'

function RightSidebar() {
  return (
    <>
      <aside className='pt-2 ps-3' style={{width: "350px",}}>
        <Search />
        <Abone />
        <Agenda />
      </aside>
    </>
  )
}

export default RightSidebar
