import React from 'react'
import Button from '../components/Button'

function Abone({size, name}) {
  return (
    <>
      <div className='mt-3' style={{backgroundColor: "C", border: "1px solid rgb(22, 24, 28)", borderRadius: "16px", padding: "10px 16px", width: "334px"}}>
        <h3 style={{fontSize: "18px", fontWeight: "700"}}>Premium'a Abone Ol</h3>
        <p style={{fontSize: "14px", fontWeight: "600", marginBottom: "8px"}}>Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
        <Button size='sm' name='Abone Ol'/>
      </div>
    </>
  )
}

export default Abone
