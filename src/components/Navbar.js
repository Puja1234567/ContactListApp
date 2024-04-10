import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand' style={{fontFamily:'Georgia'}}>
                    <img  style={{height:"30px", width:"30px"}} className="d-inline-block" src='https://cdn-icons-png.flaticon.com/128/12497/12497821.png'/>
                    CONTACT LIST APP</Link>
                
            </div>
                 
        </nav >
    )
}

export default Navbar