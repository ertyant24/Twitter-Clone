import React from 'react'
import Search from '../components/Search'
import Abone from '../components/Abone'
import Agenda from '../components/Agenda'
import Followers from '../components/Followers'
import { Link } from 'react-router-dom'

function RightSidebar() {
  return (
    <>
      <aside className='pt-2 ps-3 home-9' style={{width: "365px"}}>
        <Search />
        <Abone />
        <Agenda />
        <Followers />
        <div className='mt-3 mb-3 d-flex flex-wrap gap-1 ps-3' style={{ backgroundColor: "rgb(0, 0, 0)", borderRadius: "16px",}}>
          <Link className='me-3 home-8' style={{color: "grey", fontSize: "12px"}}>Hizmet Şartları</Link>
          <Link className='me-3 home-8' style={{color: "grey", fontSize: "12px"}}>Gizlilik Politikası</Link>
          <Link className='me-3 home-8' style={{color: "grey", fontSize: "12px"}}>Çerez Politikası</Link>
          <Link className='me-3 home-8' style={{color: "grey", fontSize: "12px"}}>Imprint</Link>
          <Link className='me-3 home-8' style={{color: "grey", fontSize: "12px"}}>Erişebilirlik</Link>
          <Link className='me-3 home-8' style={{color: "grey", fontSize: "12px"}}>Reklam Bilgisi</Link>
          <Link className='me-3 home-8' style={{color: "grey", fontSize: "12px"}}>Daha fazla ...</Link>
          <p style={{fontSize: "12px", color: "grey"}}>© 2023 X Corp.</p>
        </div>
      </aside>
    </>
  )
}

export default RightSidebar
