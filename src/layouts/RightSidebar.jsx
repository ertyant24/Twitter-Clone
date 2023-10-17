import Search from '../components/Search'
import Abone from '../components/Abone'
import Agenda from '../components/Agenda'
import Followers from '../components/Followers'
import { Link } from 'react-router-dom'
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function RightSidebar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <>
      <aside className='pt-2 ps-3 home-9' style={{ width: "365px" }}>
        <Search />
        <Abone />
        <Agenda />
        <Followers />
        <div className='mt-3 mb-3 d-flex flex-wrap gap-1 ps-3' style={{ backgroundColor: "rgb(0, 0, 0)", borderRadius: "16px", }}>
          <Link className='me-3 home-8' style={{ color: "grey", fontSize: "12px" }}>Hizmet Şartları</Link>
          <Link className='me-3 home-8' style={{ color: "grey", fontSize: "12px" }}>Gizlilik Politikası</Link>
          <Link className='me-3 home-8' style={{ color: "grey", fontSize: "12px" }}>Çerez Politikası</Link>
          <Link className='me-3 home-8' style={{ color: "grey", fontSize: "12px" }}>Imprint</Link>
          <Link className='me-3 home-8' style={{ color: "grey", fontSize: "12px" }}>Erişebilirlik</Link>
          <Link className='me-3 home-8' style={{ color: "grey", fontSize: "12px" }}>Reklam Bilgisi</Link>
          <Link aria-describedby={id} variant="" onClick={handleClick} className='me-3 home-8' style={{ color: "grey", fontSize: "12px" }}>Daha fazla ...</Link>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div style={{backgroundColor: "rgb(22, 24, 28)", border: "2px solid black", borderRadius: "4px", fontSize: "15px"}} className='text-white d-flex flex-column gap-1 pt-2 pb-2'>
              <div className='home-11'>X uygulamasını indir</div>
              <div className='home-11'>Hakkında</div>
              <div className='home-11'>Durum</div>
              <div className='home-11'>İşletmeler İçin X</div>
              <div className='home-11'>Geliştiriciler</div>
            </div>
          </Popover>
          <p style={{ fontSize: "12px", color: "grey" }}>© 2023 X Corp.</p>
        </div>
      </aside>
    </>
  )
}

export default RightSidebar
