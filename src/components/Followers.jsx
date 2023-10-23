import React, { useState } from 'react'
import { followers } from '../utils/Consts'
import { Link } from 'react-router-dom'
import UserCard from './UserCard'

function Followers() {

    // const [followStatus, setFollowStatus] = useState(Array(followers.length).fill(false));

    // const changeFollowing = (index) => {
    //     const updatedFollowStatus = [...followStatus];
    //     updatedFollowStatus[index] = true;
    //     setFollowStatus(updatedFollowStatus);
    // }

    // const changeFollow = (index) => {
    //     const updatedFollowStatus = [...followStatus];
    //     updatedFollowStatus[index] = false;
    //     setFollowStatus(updatedFollowStatus);
    // }

    // const changeText = () => {
    //     let follow = document.getElementById('follow');
    //     follow.innerText = 'Takibi bırak'
    // }


    return (
        <>
            <div id='home-17' className='mt-3 mb-3' style={{ backgroundColor: "rgb(22, 24, 28)", borderRadius: "16px",}}>
                <h5 style={{ padding: "10px 18px" }}>Kimi takip etmeli</h5>
                {
                    followers.map(follower => (
                        follower.id <= 3 ?
                        <UserCard follower={follower} key={follower.id}/> : ""

                        // <div key={follower.username} style={{ padding: "1px 15px", fontSize: "13px" }} className='d-flex mt-3 home-7 position-relative'>
                        //     <div>
                        //         <img className='rounded-circle' src={follower.avatar} alt="avatar" width="46px" height="46px" />
                        //     </div>
                        //     <div className='d-flex flex-column ms-2 justify-content-center'>
                        //         <span className='home-8' style={{ fontWeight: "700" }}>{follower.fullName} {follower.icon ? <i class="fa-solid fa-circle-check text-info"></i> : ""}</span>
                        //         <span className='text-secondary'>@{follower.username}</span>
                        //     </div>
                        //     <div style={{ top: "8px", right: "24px", position: "absolute" }} className=''>
                        //         {
                        //             followStatus[index] ? (
                        //                 <button id='follow' onMouseOver={changeText} onClick={() => changeFollow(index)} style={{ height: "30px", border: "1px solid white", width: "104px", backgroundColor: "rgb(22, 24, 28)" }} className='rounded-pill home-12'>Takip Ediliyor</button>
                        //             ) : (
                        //                 <button onClick={() => changeFollowing(index)} style={{ height: "30px", border: "none", width: "84px" }} className='rounded-pill '>Takip Et</button>
                        //             )
                        //         }

                        //     </div>
                        // </div>
                    ))
                }
                <Link onClick={() => {document.getElementById('home-17').style.display = 'none'}} to="/users" style={{ padding: "25px 15px", height: "50px", fontSize: "14px" }} className='home-7 d-flex align-items-center text-decoration-none text-info'>
                    Daha fazla göster
                    {/* <Link className='text-decoration-none text-info'>Daha fazla göster</Link> */}
                </Link>
            </div>
        </>
    )
}

export default Followers
