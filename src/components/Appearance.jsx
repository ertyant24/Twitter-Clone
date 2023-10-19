import React, { useRef } from 'react'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#000000',
    border: '2px solid #494747f4',
    boxShadow: 40,
    p: 4,
    color: "white",
    borderRadius: "20px"
};

function Appearance() {

    const fontSizeRef = useRef();
    const renk = useRef();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div style={{ position: "absolute", top: "-4px", left: "10px", width: "280px", height: "30px" }} onClick={handleOpen}>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className='text-center' id="modal-modal-title" variant="h6" component="h2">
                        Görünümünü özelleştir
                    </Typography>
                    <div className='text-secondary text-center mt-1'>Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler</div>
                    <div className='d-flex mt-3 pb-3' style={{ border: "1px solid white", borderRadius: "20px", padding: "9px 18px" }}>
                        <div className='pt-3 me-4'>
                            <img src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg" alt="X-logo" width="32px" />
                        </div>
                        <div className='d-flex flex-column'>
                            <div className='d-flex align-items-center' style={{ fontSize: "15px" }}>
                                <span style={{ fontSize: "15px" }}>X</span>   <i style={{ fontSize: "12px" }} className="fa-solid fa-circle-check text-info ms-1"></i>
                                <span className='ms-1 ms-2'>@X</span>
                                <span style={{ paddingBottom: "10px" }} className='mx-1'>.</span>
                                <span>19d</span>
                            </div>
                            <div ref={fontSizeRef} style={{ fontSize: "15px", marginTop: "-4px", lineHeight: "18px" }}>
                                X' in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlaryatar. Gönderiler; fotoğraflar, videolar, bağlantılar, metinler, etiketler ve <Link ref={renk} style={{ textDecoration: "none" }}>@X</Link> gibi bahsetmeler içerebilir.
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-secondary mb-2' style={{ fontSize: "14px" }}>Yazı tipi boyutu</p>
                        <div className='' style={{ border: "1px solid white", padding: "18px 18px", borderRadius: "14px", cursor: "pointer", position: "relative",paddingLeft: "42px" }}>
                            <div style={{ position: "absolute", top: "11px", width: "20px", height: "20px", borderRadius: "50%", left: "14px", fontSize: "13px" }}>Aa</div>
                            <div style={{ width: "440px", height: "10px", backgroundColor: "#3061a2", borderRadius: "12px", position: "relative" }}>
                                <div onClick={() => {fontSizeRef.current.style.fontSize = '12px'}} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "0px" }}></div>
                                <div onClick={() => {fontSizeRef.current.style.fontSize = '15px'}} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "96px" }}></div>
                                <div onClick={() => {fontSizeRef.current.style.fontSize = '17px'}} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "213px" }}></div>
                                <div onClick={() => {fontSizeRef.current.style.fontSize = '19px'}} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "320px" }}></div>
                                <div onClick={() => {fontSizeRef.current.style.fontSize = '21px'}} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "426px" }}></div>
                            </div>
                            <div style={{ position: "absolute", top: "9px", width: "20px", height: "20px", borderRadius: "50%", left: "500px" }}>Aa</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='text-secondary mb-2' style={{fontSize: "14px"}}>
                            Renk
                        </div>
                        <div className='d-flex flex-row gap-5 ps-4' style={{border: "1px solid white", padding: "18px 18px", borderRadius: "14px"}}>
                            <div onClick={() => {renk.current.style.color = 'blue'}} style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#3061a2", cursor: "pointer"}}></div>
                            <div onClick={() => {renk.current.style.color = 'yellow'}} style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "yellow", cursor: "pointer"}}></div>
                            <div onClick={() => {renk.current.style.color = 'red'}} style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "red", cursor: "pointer"}}></div>
                            <div onClick={() => {renk.current.style.color = 'purple'}} style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "purple", cursor: "pointer"}}></div>
                            <div onClick={() => {renk.current.style.color = 'orange'}} style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "orange", cursor: "pointer"}}></div>
                            <div onClick={() => {renk.current.style.color = 'green'}} style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "green", cursor: "pointer"}}></div>
                        </div>
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                    </Typography>
                    <div className='text-center mt-4'>
                        <button style={{ borderRadius: "16px", padding: "4px 20px" }} className='btn btn-primary' onClick={handleClose}>Bitti</button>
                    </div>
                </Box>
            </Modal>

        </>
    )
}

export default Appearance
