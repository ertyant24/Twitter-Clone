import * as React from 'react';
import Popover from '@mui/material/Popover';
import store from '../store';
import Profiles from './Profiles';
import { useNavigate } from 'react-router-dom';

function Account() {
    const navigate = useNavigate()

    // const account = store.getState().auth.accounts
    const currentAccount = store.getState().auth.currentAcccounts

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
            <div style={{ marginLeft: "30px", height: "62px", width: "250px", marginBottom: "5px" }} className='mt-auto home d-flex align-items-center'>
                <div>
                    <div className='d-flex justify-content-start' style={{ width: "250px", height: "62px", cursor: "pointer" }} aria-describedby={id} variant="" onClick={handleClick}>
                        <div className='d-flex align-items-center'>
                            <img className='rounded-circle' src={currentAccount.avatar} alt="avatar" width="40px" height="40px" />
                            <div className='d-flex flex-column ms-3' style={{ fontSize: "14px" }}>
                                <div style={{ fontWeight: "700", height: "17px" }}>{currentAccount.fullName}</div>
                                <div className='text-secondary'>{`@${currentAccount.username}`}</div>
                            </div>
                            <i style={{ marginLeft: "86px" }} className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <Popover
                        onClick={() => {navigate(`/${currentAccount.username}`)}}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <div className='text-white' style={{ width: "300px", padding: "10px 12px", backgroundColor: "black", boxShadow: "4px 4px 8px white", border: "2px solid #2f2f2f" }}>
                            <div className='align-items-center'>
                               
                                     <Profiles />
                               
                               
                                {/* <img className='rounded-circle' src={store.getState().auth.currentAcccounts.avatar} alt="avatar" width="40px" height="40px" />
                                <div className='d-flex flex-column ms-3' style={{ fontSize: "14px" }}>
                                    <div style={{ fontWeight: "700", height: "20px" }}>{store.getState().auth.currentAcccounts.fullName}</div>
                                    <div className='text-secondary'>{`@${store.getState().auth.currentAcccounts.username}`}</div>
                                </div>
                                <i style={{marginLeft: "93px", color: "green"}} class="fa-solid fa-circle-check"></i> */}
                            </div><hr className='my-1' />
                            <div className='home-4'>
                                Var olan bir hesap ekle
                            </div>
                            <div className='home-4'>
                                Hesapları yönet
                            </div>
                            <div className='home-4'>
                                @{currentAccount.username} hesabından çıkış yap
                            </div>
                        </div>
                    </Popover>
                </div>
            </div>
        </>
    )
}

export default Account
