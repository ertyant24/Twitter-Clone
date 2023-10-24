import React, { useState } from 'react'
import { followers } from '../../utils/Consts'
import UsersFor from '../../components/UsersFor';
import { useNavigate } from 'react-router-dom';

function Users() {

    const navigate = useNavigate()

    const [underline1, setUnderline1] = useState(false);
    const [underline2, setUnderline2] = useState(false);

    const underLine1 = () => {
        setUnderline1(true);
        setUnderline2(false);
    }
    const underLine2 = () => {
        setUnderline2(true);
        setUnderline1(false);
    }


    return (
        <>
            <div className='d-flex flex-row justify-content-between position-sticky top-0 align-items-center' style={{zIndex: "1", backgroundColor: "#000000", padding: "8px 10px"}}>
                <div>
                    <i onClick={() => {
                        navigate("/")
                        document.getElementById('home-17').style.display = 'block'
                        }} style={{marginRight: "32px", cursor: "pointer"}} className="fa-solid fa-arrow-left"></i>Bağlan
                </div>
                <div>
                    <i className="fa-solid fa-gear"></i>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between mb-3 position-relative'>
                <div onClick={underLine1} style={{cursor: "pointer", width: "240px", height: "50px", borderRadius: "6px", top: "16px"}} className='d-flex flex-column position-relative home-15 justify-content-center ps-5'>Kimi takip etmeli{underline1 ? <span style={{width: "120px", height: "4px", backgroundColor: "#3dd5f3", position: "absolute", top: "46px", borderRadius: "8px"}}></span> : ""}</div>
                
                <div style={{cursor: "pointer", width: "260px", height: "50px", borderRadius: "6px", top: "16px", marginRight: "26px"}} className='position-relative home-15 d-flex align-items-center justify-content-center' onClick={underLine2}>İlgini çekebilecek içerik üreticileri{underline2 ? <span style={{width: "231px", height: "4px", backgroundColor: "#3dd5f3", position: "absolute", top: "46px", left: "15px", borderRadius: "8px"}}></span> : ""}</div>
            </div><hr />
            <div style={{padding: "2px 10px", fontSize: "18px"}} className='fw-semibold mb-3'>
                Sizin için önerilenler
            </div>
            {
                followers.map((follower) => (
                    <UsersFor follower={follower} key={follower.id}></UsersFor>
                ))
            }

        </>
    )
}

export default Users
