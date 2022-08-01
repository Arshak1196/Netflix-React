import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <img className='logo' src="https://andrewjamesspooner.com/wp-content/uploads/2019/06/netflix-logo-e1536243210766-1024x284.png" alt="Netflix-logo" />
            <p className='nav-buttons'>Home</p>
            <p className='nav-buttons'>TV Shows</p>
            <p className='nav-buttons'>Movies</p>
            <p className='nav-buttons'>Recently Added</p>
            <p className='nav-buttons'>My List</p>
            <i style={{ color: 'white', position: 'fixed', right: '240px', marginTop: '9px' }}
                    class="fa-solid fa-magnifying-glass"></i>
            <div className='right-nav'>
                <p className='nav-buttons'>KIDS</p>
                <p className='nav-buttons'>DVD</p>
            </div>
            <img className='avatar' src="https://tse4.mm.bing.net/th?id=OIP.OvsgUUddji6xRFr7ZZ146wHaHa&pid=Api&P=0" alt="avatar" />
        </div>
    )
}

export default Navbar