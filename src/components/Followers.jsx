import React from 'react'
import { followers } from '../utils/Consts'
import { Link } from 'react-router-dom'

function Followers() {
    return (
        <>
            <div className='mt-3 mb-3' style={{ backgroundColor: "rgb(22, 24, 28)", borderRadius: "16px", }}>
                <h5 style={{padding: "10px 18px"}}>Kimi takip etmeli</h5>
                {
                    followers.map((follower) => (
                        <div style={{padding: "1px 15px", fontSize: "13px"}} className='d-flex mt-3 home-7 position-relative'>
                            <div>
                                <img className='rounded-circle' src={follower.avatar} alt="avatar" width="46px" height="46px"/>
                            </div>
                            <div className='d-flex flex-column ms-3 justify-content-center'>
                                <span className='home-8' style={{fontWeight: "700"}}>{follower.fullName} {follower.icon ? <i class="fa-solid fa-circle-check text-info"></i> : ""}</span>
                                <span className='text-secondary'>@{follower.username}</span>
                            </div>
                            <div style={{top: "8px", right: "24px", position: "absolute"}} className=''>
                                <button style={{height: "30px", border: "none", width: "84px"}} className='rounded-pill'>Takip Et</button>
                            </div>
                        </div>
                    ))
                }
                <div style={{padding: "25px 15px", height: "50px"}} className='home-7 d-flex align-items-center'>
                <Link className='text-decoration-none text-info'>Daha fazla göster</Link>
                </div>
            </div>
        </>
    )
}

export default Followers
