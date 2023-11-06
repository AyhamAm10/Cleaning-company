import React from 'react'
import img from '../assets/airbnb.png'
import { Link } from 'react-router-dom'
const Header = ({handelopen  }) => {
  return (
    <header className=''>

            <div className="header d-flex justify-content-between align-items-center">
                <div className="logo"  >
                <img src={img} width="150px" />
            </div>
            <ul className='align-items-center'  >
            <li className="nav-link px-2 link-secondary btn">
            <Link to={'/'} className='btn btn-outline-success'>home</Link>
            </li>
            <li className="nav-link px-2 link-secondary"> 
            <Link to={'/services'} className='btn btn-outline-success' >services</Link>
            </li>

            </ul>
            <div className="hidden-dev" onClick={handelopen}>
            <svg className='menu' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
        </div>
       

    </header>
  )
}

export default Header
