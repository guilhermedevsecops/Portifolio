import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import { MobilleNav, SideNav } from '../templates/Nav';
import useWindowWidth from '../hooks/WindowSize';
import '../styles/css/globalLayout.css'

const DefaultLayout = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 900;
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <nav>
        {isMobile ? <MobilleNav /> : <SideNav />}
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout