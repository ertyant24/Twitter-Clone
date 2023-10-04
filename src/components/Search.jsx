import React, { useState } from 'react'

function Search() {
    const [ara, setAra] = useState("");

    const search = () => {
        let ara = document.getElementById("search");
        let icon = document.getElementById("search-icon")
        ara.style.outline = "none";
        ara.style.border = "2px solid  #0688af"
        icon.style.color = " #0688af"
    }

    const onChangeInput = (event) => {
        setAra(event.target.value);
    }

    const removeInput = () => {
        setAra("");
    }

    const blur = () => {
        let ara = document.getElementById("search");
        let icon = document.getElementById("search-icon")
        ara.style.outline = "none"
        ara.style.border = "2px solid black"
        icon.style.color = "white"
    }

    return (
        <>
            <div className='d-flex' style={{position: "relative", fontSize: "14px"}}>
                <label className='d-flex' style={{width: "270px", height: "20px", position: "absolute", top: "11px", left: "16px",}} htmlFor="search"><i id='search-icon' style={{fontSize: "16px"}} class="fa-solid fa-magnifying-glass"></i>{
                    ara !== "" ? <i onClick={removeInput} style={{fontSize: "16px", color: " #0688af"}} class="fa-solid fa-circle-xmark ms-auto"></i> : ""
                }</label>
                <input value={ara} onBlur={blur} onFocus={search} onChange={onChangeInput} style={{width: "305px", height: "39px", border: "2px solid black", paddingLeft: "50px", paddingBottom: "5px", paddingRight: "25px"}} className='bg-dark text-white rounded-pill' type="text" placeholder='Ara ...' id='search' />
            </div>
        </>
    )
}

export default Search
