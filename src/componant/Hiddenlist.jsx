import React from 'react'
import { Link } from 'react-router-dom'

const Hiddenlist = ({openlist }) => {

  return (
    <div className='hidden-list' >
        <div className="accordion accordion-flush" id="accordionFlushExample">
            
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className=" closelist" >
                <Link to={'/'} className='btn'>home</Link>
                </button>
                </h2>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className=" closelist" >
                <Link to={'/services'} className='btn'>services</Link>
                </button>
                </h2>
            </div>
            
            
        </div>
    </div>
  )
}

export default Hiddenlist
