import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ButtonB from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


export default function More() {
    const [isArrowUp, setIsArrowUp] = useState(false);

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const toggleArrow = () => {
        setIsArrowUp((prev) => !prev);
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
        <div className='mt-1' style={{ position: "relative", right: "6px" }}>
            <Button style={{ fontSize: "18px", fontFamily: "'TwitterChirp',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;", textTransform: "capitalize" }} aria-describedby={id} variant="" onClick={handleClick}>
                <i className="fa-solid fa-circle-plus me-3"></i>Daha fazla
            </Button>
            <Popover
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
                <div className='bg-dark text-white shadow-lg' style={{ minWidth: "280px", height: "280px", padding: "6px", backgroundColor: "black", overflow: "auto" }}>
                    <div className='home-4'>
                        <i className="fa-solid fa-at me-4"></i>Bağlan
                    </div>
                    <div className='home-4'>
                        <i class="fa-solid fa-money-bills me-4"></i>Para kazanma
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
                            <div className='d-flex justify-content-between' onClick={() => { toggleArrow(0) }} style={{ width: "270px", position: "relative", right: "" }}>
                                İçerik Üreticisi Stüdyosu
                                {isArrowUp ? (
                                    <i className="fa-solid fa-chevron-down ms-5 ps-5"></i>
                                ) : (
                                    <i className="fa-solid fa-chevron-up ms-5 ps-5"></i>
                                )}
                            </div>
                        </ButtonB>
                        <Collapse in={open1}>
                            <div className='collapses' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
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
                            <div className='d-flex justify-content-between' onClick={() => { toggleArrow(0) }} style={{ width: "270px", position: "relative", right: "px" }}>
                                <span>
                                    Profosyonel Araçlar
                                </span>
                                {isArrowUp ? (
                                    <i style={{ marginLeft: "94px" }} className="fa-solid fa-chevron-down"></i>
                                ) : (
                                    <i style={{ marginLeft: "94px" }} className="fa-solid fa-chevron-up"></i>
                                )}
                            </div>
                        </ButtonB>
                        <Collapse in={open2}>
                            <div className='collapses' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
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
                            <div className='d-flex justify-content-between' onClick={() => { toggleArrow(0) }} style={{ width: "270px", position: "relative", right: "" }}>
                                Ayarlar ve Destek
                                {isArrowUp ? (
                                    <i className="fa-solid fa-chevron-down ms-5 ps-5"></i>
                                ) : (
                                    <i className="fa-solid fa-chevron-up ms-5 ps-5"></i>
                                )}
                            </div>
                        </ButtonB>
                        <Collapse in={open3}>
                            <div className='collapses' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                <i className="fa-solid fa-gear me-2"></i>Ayarlar ve Gizlilik
                            </div>
                        </Collapse>
                        <Collapse in={open3}>
                            <div className='collapses mt-2' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                <i className="fa-solid fa-gear me-2"></i>Yardım Merkezi
                            </div>
                        </Collapse>
                        <Collapse in={open3}>
                            <div className='collapses mt-2' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                <i className="fa-solid fa-pen-to-square me-2"></i>Görünüm
                            </div>
                        </Collapse>
                        <Collapse in={open3}>
                            <div className='collapses mt-2' id="example-collapse-text" style={{ paddingLeft: "13px", position: "relative", top: "-8px", fontSize: "14px", width: "290px", height: "24px", cursor: "pointer" }}>
                                <i className="fa-solid fa-keyboard me-2"></i>Klavye Kısayolları
                            </div>
                        </Collapse>
                    </div>
                </div>
            </Popover>
        </div>
    );
}