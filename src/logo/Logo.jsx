import React from 'react'
import LogoX from './twitterx.svg'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <>
                <Link to="/" className=''>
                    <img src={LogoX} alt="logo" width="34px" style={{ backgroundColor: "whitesmoke" }} />
                </Link>
        </>
    )
}

export default Logo
