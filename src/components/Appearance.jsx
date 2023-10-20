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
    const dıs1 = useRef();
    const ic1 = useRef();
    const dıs2 = useRef();
    const ic2 = useRef();
    const dıs3 = useRef();
    const ic3 = useRef();
    const spanRef1 = useRef();
    const spanRef2 = useRef();
    const spanRef3 = useRef();
    

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
                    <div className='d-flex mt-3 pb-3 ms-4' style={{ border: "1px solid white", borderRadius: "20px", padding: "9px 18px", width: "480px" }}>
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
                        <div className='' style={{ border: "1px solid white", padding: "18px 18px", borderRadius: "14px", cursor: "pointer", position: "relative", paddingLeft: "42px", backgroundColor: "#9d9d9d" }}>
                            <div style={{ position: "absolute", top: "11px", width: "20px", height: "20px", borderRadius: "50%", left: "14px", fontSize: "13px" }}>Aa</div>
                            <div style={{ width: "440px", height: "10px", backgroundColor: "#3061a2", borderRadius: "12px", position: "relative" }}>
                                <div onClick={() => { fontSizeRef.current.style.fontSize = '12px' }} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "0px" }}></div>
                                <div onClick={() => { fontSizeRef.current.style.fontSize = '15px' }} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "96px" }}></div>
                                <div onClick={() => { fontSizeRef.current.style.fontSize = '17px' }} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "213px" }}></div>
                                <div onClick={() => { fontSizeRef.current.style.fontSize = '19px' }} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "320px" }}></div>
                                <div onClick={() => { fontSizeRef.current.style.fontSize = '21px' }} style={{ position: "absolute", backgroundColor: "#3061a2", top: "-6px", width: "20px", height: "20px", borderRadius: "50%", left: "426px" }}></div>
                            </div>
                            <div style={{ position: "absolute", top: "9px", width: "20px", height: "20px", borderRadius: "50%", left: "500px" }}>Aa</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='text-secondary mb-2' style={{ fontSize: "14px" }}>
                            Renk
                        </div>
                        <div className='d-flex flex-row gap-5 ps-4' style={{ border: "1px solid white", padding: "18px 18px", borderRadius: "14px", backgroundColor: "#9d9d9d" }}>
                            <div onClick={() => { renk.current.style.color = 'blue' }} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#3061a2", cursor: "pointer" }}></div>
                            <div onClick={() => { renk.current.style.color = 'yellow' }} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "yellow", cursor: "pointer" }}></div>
                            <div onClick={() => { renk.current.style.color = 'red' }} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "red", cursor: "pointer" }}></div>
                            <div onClick={() => { renk.current.style.color = 'purple' }} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "purple", cursor: "pointer" }}></div>
                            <div onClick={() => { renk.current.style.color = 'orange' }} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "orange", cursor: "pointer" }}></div>
                            <div onClick={() => { renk.current.style.color = 'green' }} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "green", cursor: "pointer" }}></div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='text-secondary mb-2' style={{ fontSize: "14px" }}>
                            Arka plan
                        </div>
                        <div style={{ position: "relative", border: "1px solid white", borderRadius: "14px", padding: "46px 18px", backgroundColor: "#9d9d9d" }}>
                            <div onMouseOver={() => {spanRef1.current.style.backgroundColor = '#c1c1c1'}} onMouseOut={() => {spanRef1.current.style.backgroundColor = 'white'}} onClick={() => {
                                dıs1.current.style.border = "3px solid #3061a2"
                                ic1.current.style.backgroundColor = "#3061a2"
                                dıs2.current.style.border = "none"
                                ic2.current.style.backgroundColor = "#9d9d9d"
                                dıs3.current.style.border = "none"
                                ic3.current.style.backgroundColor = "black"
                                document.body.style.backgroundColor = "white"
                                document.body.style.color = "black"
                            }} ref={dıs1} style={{ position: "absolute", width: "140px", height: "65px", backgroundColor: "whitesmoke", border: "1px solid black", top: "14px", left: "30px", cursor: "pointer" }}>
                                <span ref={spanRef1} style={{position: "absolute", width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "grey", top: "17px", left: "15px"}}></span>
                                <span className='' ref={ic1} style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "white", position: "absolute", top: "24px", left: "22px", border: "1px solid black" }}></span> <span style={{ position: "absolute", top: "20px", left: "44px", color: "black", fontSize: "14px" }}>Varsayılan</span>
                            </div>
                            <div onMouseOver={() => {spanRef2.current.style.backgroundColor = '#454545'}} onMouseOut={() => {spanRef2.current.style.backgroundColor = '#323232'}} onClick={() => {
                                dıs2.current.style.border = "3px solid #3061a2"
                                ic2.current.style.backgroundColor = "#3061a2"
                                dıs1.current.style.border = "none"
                                ic1.current.style.backgroundColor = "white"
                                dıs3.current.style.border = "none"
                                ic3.current.style.backgroundColor = "black"
                                document.body.style.backgroundColor = "#646464"
                                document.body.style.color = "white"
                            }} ref={dıs2} style={{ position: "absolute", width: "140px", height: "65px", backgroundColor: "#323232", border: "1px solid black", top: "14px", left: "195px", cursor: "pointer" }}>
                                <span ref={spanRef2} style={{position: "absolute", width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "grey", top: "17px", left: "35px"}}></span>
                                <span ref={ic2} style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#323232", position: "absolute", top: "24px", left: "42px", border: "1px solid white" }}></span> <span style={{ position: "absolute", top: "20px", left: "64px", color: "white", fontSize: "14px" }}>Loş</span>
                            </div>
                            <div onMouseOver={() => {spanRef3.current.style.backgroundColor = '#2e2e2e'}} onMouseOut={() => {spanRef3.current.style.backgroundColor = 'black'}} onClick={() => {
                                dıs3.current.style.border = "3px solid #3061a2"
                                ic3.current.style.backgroundColor = "#3061a2"
                                dıs1.current.style.border = "none"
                                ic1.current.style.backgroundColor = "white"
                                dıs2.current.style.border = "none"
                                ic2.current.style.backgroundColor = "#9d9d9d"
                                document.body.style.backgroundColor = "black"
                                document.body.style.color = "white"
                            }} ref={dıs3} style={{ position: "absolute", width: "140px", height: "65px", backgroundColor: "black", border: "1px solid black", top: "14px", left: "360px", cursor: "pointer" }}>
                                <span ref={spanRef3} style={{position: "absolute", width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "grey", top: "17px", left: "11px"}}></span>
                                <span ref={ic3} style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "black", position: "absolute", top: "24px", left: "18px", border: "1px solid white" }}></span> <span style={{ position: "absolute", top: "20px", left: "40px", color: "white", fontSize: "14px" }}>Işıklar kapalı</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <button style={{ borderRadius: "16px", padding: "4px 20px" }} className='btn btn-primary' onClick={handleClose}>Bitti</button>
                    </div>
                </Box>
            </Modal>

        </>
    )
}

export default Appearance
