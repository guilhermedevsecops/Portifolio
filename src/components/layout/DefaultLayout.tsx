import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import { Nav, SideNav } from '../templates/Nav';
import '../styles/css/globalLayout.css'

const DefaultLayout = () => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <nav>
        <SideNav />
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