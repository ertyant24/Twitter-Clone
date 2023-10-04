import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ButtonB from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



export default function More() {
    const [arrowDirection1, setArrowDirection1] = useState('down');
    const [arrowDirection2, setArrowDirection2] = useState('down');
    const [arrowDirection3, setArrowDirection3] = useState('down');

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const toggleOpen1 = () => {
        setOpen1(!open1);
        setArrowDirection1(open1 ? 'down' : 'up text-info');
    };
    const toggleOpen2 = () => {
        setOpen2(!open2);
        setArrowDirection2(open2 ? 'down' : 'up text-info');
    };
    const toggleOpen3 = () => {
        setOpen3(!open3);
        setArrowDirection3(open3 ? 'down' : 'up text-info');
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className='mt-1' style={{ position: "relative", right: "16px", top: "-12px" }}>
            <Button style={{ fontSize: "18px", fontFamily: "'TwitterChirp',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;", textTransform: "capitalize" }} aria-describedby={id} variant="" onClick={handleClick}>
                <i className="fa-solid fa-circle-plus me-3"></i>Daha fazla
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box
                    style={{ backgroundColor: "#1d1c1c" }}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 0.4,
                            width: 315,
                            minHeight: 275,
                        },
                    }}
                >
                    <Paper className='text-white' style={{ overflowY: "auto", overscrollBehaviorY: "", backgroundColor: "black", boxShadow: "1px 1px 6px black" }} elevation={9}>
                        <div className=''>
                            <div className='home-4 ms-2'>
                                <i className="fa-solid fa-at me-4"></i>Bağlan
                            </div>
                            <div className='home-4 ms-2'>
                                <i className="fa-solid fa-money-bills me-4"></i>Para kazanma
                            </div><hr />
                            <div className="">
                                <ButtonB
                                    variant=""
                                    onClick={() => setOpen1(!open1)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    className='text-white fw-bold collapses'
                                    style={{ fontSize: "14px", position: "relative", top: "-8px", }}
                                >
                                    <div className='d-flex justify-content-between' onClick={() => { toggleOpen1() }} style={{ width: "270px", position: "relative", right: "" }}>
                                        İçerik Üreticisi Stüdyosu
                                        <i className={`fa-solid fa-chevron-${arrowDirection1} ms-5 ps-5`}></i>
                                    </div>
                                </ButtonB>
                                <Collapse in={open1}>
                                    <div className='collapses mt-1' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                        <i className="fa-solid fa-signal me-2"></i>İstatistikler
                                    </div>
                                </Collapse>
                            </div>
                            <div className='mt-3'>
                                <ButtonB
                                    variant=""
                                    onClick={() => setOpen2(!open2)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    className='text-white fw-bold collapses'
                                    style={{ fontSize: "14px", position: "relative", top: "-8px" }}
                                >
                                    <div className='d-flex justify-content-between' onClick={() => { toggleOpen2() }} style={{ width: "270px", position: "relative", right: "px" }}>
                                        Profosyonel Araçlar
                                        <i className={`fa-solid fa-chevron-${arrowDirection2} ms-5 ps-5`}></i>
                                    </div>
                                </ButtonB>
                                <Collapse in={open2}>
                                    <div className='collapses mt-1' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                        <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Reklamlar
                                    </div>
                                </Collapse>
                            </div>
                            <div className='mt-3'>
                                <ButtonB
                                    variant=""
                                    onClick={() => setOpen3(!open3)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    className='text-white fw-bold collapses'
                                    style={{ fontSize: "14px", position: "relative", top: "-8px" }}
                                >
                                    <div className='d-flex justify-content-between' onClick={() => { toggleOpen3() }} style={{ width: "270px", position: "relative", right: "" }}>
                                        Ayarlar ve Destek
                                        <i className={`fa-solid fa-chevron-${arrowDirection3} ms-5 ps-5`}></i>
                                    </div>
                                </ButtonB>
                                <Collapse in={open3}>
                                    <div className='collapses mt-1' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                        <i className="fa-solid fa-gear me-2"></i>Ayarlar ve Gizlilik
                                    </div>
                                </Collapse>
                                <Collapse in={open3}>
                                    <div className='collapses mt-3' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                        <i className="fa-solid fa-gear me-2"></i>Yardım Merkezi
                                    </div>
                                </Collapse>
                                <Collapse in={open3}>
                                    <div className='collapses mt-3' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                        <i className="fa-solid fa-pen-to-square me-2"></i>Görünüm
                                    </div>
                                </Collapse>
                                <Collapse in={open3}>
                                    <div className='collapses mt-3' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                        <i className="fa-solid fa-keyboard me-2"></i>Klavye Kısayolları
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </Paper>
                </Box>
            </Popover>
        </div>
    );
}