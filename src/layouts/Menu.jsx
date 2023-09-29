import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <nav className='mt-1' style={{ fontSize: "20px" }}>
                <ul className='navbar' style={{ listStyle: "none" }}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-solid fa-house me-3"></i>Anasayfa
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/explore" className="nav-link" href="#">
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-solid fa-magnifying-glass me-3"></i>Keşfet
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/notifications" className="nav-link" href="#">
                            <div className='home' style={{ width: "155px" }}>
                                <i className="fa-solid fa-bell me-3"></i>Bildirimler
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-solid fa-envelope me-3"></i>Mesajlar
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-regular fa-rectangle-list me-3"></i>Listeler
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                            <div className='home' style={{ width: "140px" }}>
                                <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", paddingBottom: "3px", marginRight: "14px" }}>
                                    <path fill='white' d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>Premium
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >
                            <div className='home' style={{ width: "140px" }}>
                                <i className="fa-solid fa-user me-3"></i>Profil
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >
                            <div className='home' style={{ width: "160px" }}>
                                <i className="fa-solid fa-circle-plus me-3"></i>Daha fazla
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item mt-3 d-grid">
                        <div className=''>
                            <Link className="btn btn-info rounded-pill" style={{ height: "46px", width: "250px" }}>
                                <span className='align-middle fw-bold fs-5'>Gönder</span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Menu
