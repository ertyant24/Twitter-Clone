import React, { useState } from 'react'

function Search() {
    const [ara, setAra] = useState("");
    const [isFocus, setIsFocus] = useState(false)

    const search = () => {
        setIsFocus(true);
    }

    const blur = () => {
        setIsFocus(false);
    }

    const onChangeInput = (event) => {
        setAra(event.target.value);
    }

    const removeInput = () => {
        if (ara !== "") {
            setAra("");
        }
    }

    return (
        <>
            <div className='d-flex' style={{ position: "relative", fontSize: "14px" }}>
                <label className='d-flex pe-none' style={{ width: "30px", height: "20px", position: "absolute", top: "11px", left: "16px", }} htmlFor="search"><i id='search-icon' style={{ fontSize: "16px", color: isFocus ? "#0688af" : "white" }} className="fa-solid fa-magnifying-glass pe-none"></i>
                </label>
                <input
                    value={ara}
                    onBlur={blur}
                    onFocus={search}
                    onChange={onChangeInput}
                    style={{ width: "340px", height: "39px", paddingLeft: "50px", paddingBottom: "5px", paddingRight: "35px", border: isFocus ? "2px solid #0688af" : "2px solid black", outline: "none" }}
                    className='bg-dark text-white rounded-pill'
                    type="text" placeholder='Ara ...'
                    id='search'
                    autoComplete='off'
                />
                <i id='mark' onClick={removeInput} style={{ fontSize: "18px", color: " #0688af", cursor: "pointer", visibility: ara !== "" && isFocus ? "visible" : "hidden", position: "absolute", top: "10px", right: "14px" }} className="fa-solid fa-circle-xmark ms-auto"></i>
                {
                    isFocus && ara === "" ? <div className='px-2 py-2' style={{ position: "absolute", top: "40px", backgroundColor: "#222121", width: "330px", left: "3px", boxShadow: "1px 1px 2px white", borderRadius: "10px" }}>
                        <p style={{fontWeight: "400"}} className='text-center text-secondary'>
                            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
                        </p>
                    </div> : ""
                }
                {
                    ara !== "" ? <div className='px-2 py-2' style={{ position: "absolute", top: "40px", backgroundColor: "#222121", width: "100%", left: "3px", boxShadow: "1px 1px 2px white", borderRadius: "10px", wordWrap: "break-word" }}>
                        <p className='text-center pb-1'>
                            "{ara}" ara
                        </p>
                    </div> : ""
                }
            </div>
        </>
    )
}

export default Search
