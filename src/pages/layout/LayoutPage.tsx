import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import './LayoutPage.scss'

export default function Layout() {
    return (
        <>
            <div className="layout-page">
                {/* Header Side menubar */}
                <Header></Header>

                {/* Main content */}
                {/* Content will be rendered in outlet based route path by router-dom */}
                <main className='main'>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
