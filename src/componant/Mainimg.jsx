import React from 'react'

const Mainimg = () => {
  return (
    <div className='mainimg p-50'>
        <div className="background">
        </div>
       <div className="box">
       <h1>MEIN ERFOLG. <br />MEINE ZUKUNFT.</h1>
       <p className='white'>WIR BEGEISTERN GEMEINSAM.</p>
       <div className=''>
       <button className='btn white min-bg border-ra p-10' style={{"padding" : "10px" }}>AKTUELLE JOBANGEBOTE</button>
       <hr />
       <div className="input-src white d-flex">
        <input type="text" />
        <button className='btn min-bg white'>suchen</button>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Mainimg
