import React from 'react'
import { Link } from 'react-router-dom'

function Button({ size }) {
    return (
        <>
            {
                size === "large" ? <Link className='btn btn-info rounded-pill' style={{height: "49px", width: "230px"}}>
                    <span className='align-middle fw-bold' style={{fontSize: "17px"}}>Gönder</span>
                </Link> : <Link className='btn btn-info rounded-pill' style={{minHeight: "34px", minWidth: "34px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <span className='align-middle fw-bold fs-6'>Gönder</span>
                </Link>
            }

        </>
    )
}

export default Button
