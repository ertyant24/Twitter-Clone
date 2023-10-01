import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function MoreInfo() {

    const popover = (
        <Popover className='' id="popover-positioned-top" style={{ width: "318px" }}>
            <Link to="/explore" className='text-white text-decoration-none'>
                <Popover.Header className='bg-dark border home-2'>
                    <i className="fa-solid fa-at me-5"></i>Bağlan
                </Popover.Header>
            </Link>
            <Link className='text-white text-decoration-none'>
                <Popover.Header className='bg-dark border'>
                    <i class="fa-solid fa-money-bills me-5"></i>Para kazanma
                </Popover.Header>
            </Link>
            <Link className='text-white text-decoration-none'>
                <Popover.Body className='bg-dark text-white'>
                    İçerik Üreticisi Stüdyosu
                </Popover.Body>
            </Link>
            <Link className='text-white text-decoration-none'>
                <Popover.Body className='bg-dark text-white'>
                    Profosyonel Araçlar
                </Popover.Body>
            </Link>
            <Link className='text-white text-decoration-none'>
                <Popover.Body className='bg-dark text-white' style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                    Ayarlar ve Destek
                </Popover.Body>
            </Link>


        </Popover>
    );

    return (
        <>
            <OverlayTrigger key="top" trigger="click" placement="top" overlay={popover}>
                <div className='home' style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-circle-plus me-3"></i>Daha fazla
                </div>
            </OverlayTrigger>
        </>
    )
}

export default MoreInfo
