import React from 'react'
import st from './AdminNavBar.module.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/iconHome.jpeg';
import logoProfile from '../Assets/logoProfile.png';


import { useAuth0 } from '@auth0/auth0-react'
import { LogoutButton } from '../../Login/Logout';

export default function TopBar() {

    const {logout, user} = useAuth0()
    
    // const handleLogOut = async (e) => {
    //     e.preventDefault()
    //     try {
    //         localStorage.removeItem('id')
    //         localStorage.removeItem('token')
    //         window.location.reload(true)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <nav className={st.topbar}>
            <div className={st.topbarWrapper}>
                <div className={st.topLeft}>
                    <Link
                        to='/'
                        className=' no-underline'
                    >
                        <img
                        className={st.logo}
                        src={logo}
                        alt="Logo Clothes 4Crew"
                        />
                    </Link>
                </div>
                <div className={st.topRight}>
                    <button src={logoProfile} className={st.logoutBtn} onClick={logout}>Logout</button>
                </div>
            </div>
        </nav>
    )
}
