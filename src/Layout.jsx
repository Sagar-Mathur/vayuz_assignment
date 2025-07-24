import React from 'react'
import { Sidebar } from './components/sideBar'
import { Header } from './components/header'
import { Home } from './components/home'
import { Footer } from './components/footer'

export const Layout = () => {
    return (
        <div className='body_layout'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='home_layout'>
                <Header />
                <div className='frontPage'>
                    <Home />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
