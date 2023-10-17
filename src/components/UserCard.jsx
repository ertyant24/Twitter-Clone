import React, { useRef, useState } from 'react'
import Button from './Button';

function UserCard({ follower }) {

    const [follow, setFollow] = useState(false);
    const text = useRef();

    const changeFollow = () => {
        setFollow(true);
    }
    const changeFollow1 = () => {
        setFollow(false);
    }

    const changeText = () => {
        text.current.innerText = 'Takibi bırak';
    }
    const changeText1 = () => {
        text.current.innerText = 'Takibi ediliyor';
    }

    return (
        <>
            <div style={{ padding: "1px 15px", fontSize: "13px" }} className='d-flex mt-3 home-7 position-relative'>
                <div>
                    <img className='rounded-circle' src={follower.avatar} alt="avatar" width="46px" height="46px" />
                </div>
                <div className='d-flex flex-column ms-2 justify-content-center'>
                    <span className='home-8' style={{ fontWeight: "700" }}>{follower.fullName} {follower.icon ? <i class="fa-solid fa-circle-check text-info"></i> : ""}</span>
                    <span className='text-secondary'>@{follower.username}</span>
                </div>
                <div style={{ top: "8px", right: "24px", position: "absolute" }} className=''>
                    {
                        follow ? <button onMouseOut={changeText1} onMouseOver={changeText} onClick={changeFollow1} ref={text} style={{ height: "30px", border: "1px solid white", width: "104px", backgroundColor: "rgb(22, 24, 28)" }} className='rounded-pill home-12'>Takip Ediliyor</button> : <button onClick={changeFollow} style={{ height: "30px", border: "none", width: "84px" }} className='rounded-pill '>Takip Et</button>
                    }

                </div>
            </div>
        </>
    )
}

export default UserCard
