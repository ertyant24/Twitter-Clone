import React from 'react'
import LogoX from './twitterXorj.svg'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <>
            {/* <div className='logo'>
                <Link to="/" className=''>
                    <img src={LogoX} alt="logo" width="34px" style={{ backgroundColor: "white" }} />
                </Link>
            </div> */}
            <div className='logo mb-2'>
                <Link to="/">
                    <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px" }}>
                        <path fill='white' d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </Link>
            </div>
        </>
    )
}

export default Logo
