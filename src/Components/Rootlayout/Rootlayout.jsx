import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './Rootlayout.css'

function Rootlayout() {

    return (
        <div className='rootlayout'>
            <nav>
                <NavBar />
            </nav>
            <section>
                <Outlet />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Rootlayout
