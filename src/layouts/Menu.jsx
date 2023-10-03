import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button';
import MoreInfo from '../components/MoreInfo';
import Logo from '../logo/Logo';
import More from '../components/More';
import store from '../store';

function Menu() {
    // const username = store.getState().auth.currentAcccounts.username

    const [item, setItem] = useState("");
    const [not, setNot] = useState("");

    const active = (index) => {
        setItem(index)
        setNot(index)
    }

    return (
        <>
            <nav className='mt-1 ' style={{ fontSize: "20px" }}>
                <ul className='' style={{ listStyle: "none" }}>
                    <div className='pb-1'>
                        <Logo />
                    </div>
                    <li className={`nav-item ${item === 0 ? "active" : ""}`} onClick={() => { active(0) }}>
                        <Link to="/" className="nav-link" href="#">
                            <div className='home' style={{ width: "150px" }}>
                                <span className={`${not === 0 ? "" : "isaret"} rounded-circle`}></span>
                                <i className="fa-solid fa-house me-3"></i>Anasayfa
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 1 ? "active" : ""}`} onClick={() => { active(1) }}>
                        <Link to="/explore" className="nav-link" href="#">
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-solid fa-magnifying-glass me-3"></i>Keşfet
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 2 ? "active" : ""}`} onClick={() => { active(2) }}>
                        <Link to="/notifications" className="nav-link" href="#">
                            <div className='home  d-flex align-items-center' style={{ width: "155px" }}>
                                <i className="fa-solid fa-bell me-3"></i>
                                <span className={`${not === 2 ? "" : "notifications"} rounded-circle`}>{not === 2 ? "" : "5"}</span>
                                <span>Bildirimler</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 3 ? "active" : ""}`} onClick={() => { active(3) }}>
                        <Link to="/messages" className="nav-link" >
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-solid fa-envelope me-3"></i>Mesajlar
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 4 ? "active" : ""}`} onClick={() => { active(4) }}>
                        <Link to="/lists" className="nav-link" >
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-regular fa-rectangle-list me-3"></i>Listeler
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 8 ? "active" : ""}`} onClick={() => { active(8) }}>
                        <Link to="/bookmarks" className="nav-link" >
                            <div className='home' style={{ width: "170px" }}>
                            <i style={{paddingLeft: "2px", paddingRight: "5px"}} class="fa-regular fa-bookmark me-3"></i>Yer İşaretleri
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 5 ? "active" : ""}`} onClick={() => { active(5) }}>
                        <Link to="/premium" className="nav-link">
                            <div className='home-1' style={{ width: "150px" }}>
                                <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", paddingBottom: "3px", marginRight: "14px" }}>
                                    <path fill='white' d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>Premium
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 6 ? "active" : ""}`} onClick={() => { active(6) }}>
                        <Link to={`/${store.getState().auth.currentAcccounts.username}`} className="nav-link" >
                            <div className='home' style={{ width: "140px" }}>
                                <i style={{marginRight: "19px"}} className="fa-solid fa-user"></i>Profil
                            </div>
                        </Link>
                    </li>
                    <li className={`nav-item ${item === 7 ? "active" : ""}`} onClick={() => { active(7) }}>
                        <Link className='nav-link'>
                            <div className='home' style={{ width: "190px", height: "49px" }}>
                                <More />
                            </div>
                        </Link>
                        {/* <i className="fa-solid fa-circle-plus me-3"></i>Daha fazla */}

                    </li>
                    <li className="nav-item mt-3 d-grid">
                        <div className=''>
                            <Button size="large" name="Gönder" />
                            {/* <Link className="btn btn-info rounded-pill" style={{ height: "46px", width: "235px" }}>
                                <span className='align-middle fw-bold fs-5'>Gönder</span>
                            </Link> */}
                        </div>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Menu
