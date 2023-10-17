import React from 'react'
import store from '../store'
import { setCurrentAccount } from '../store/auth/action';
import { useNavigate } from 'react-router-dom';

function Profiles() {

    const profiles = store.getState().auth.accounts;
    const currentAccount = store.getState().auth.currentAcccounts;

    return (
        <>
            {
                profiles.map((profile) => (
                    <div onClick={() => {setCurrentAccount(profile)}} key={profile.id} className={`d-flex mb-1 ${currentAccount.id !== profile.id ? "home-5" : "home-6"}`}>
                        <img style={{ width: "40px", height: "40px" }} className='rounded-circle' src={profile.avatar} alt="avatar" />
                        <div className='d-flex flex-column ms-3' style={{fontSize: "14px"}}>
                            <div style={{height: "17px"}}>
                                {profile.fullName}
                            </div>
                            <div className='text-secondary'>
                                @{profile.username}
                            </div>
                        </div>
                        {
                            currentAccount.id === profile.id ?  <i style={{marginLeft: "95px", color: "green", fontSize: "14px"}} className="fa-solid fa-circle-check pt-2"></i> : <span style={{width: "22px"}} className='blue rounded-pill'>11</span>
                        }
                       
                    </div>
                ))
            }
        </>
    )
}

export default Profiles
