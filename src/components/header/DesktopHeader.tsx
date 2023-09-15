import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell, faEnvelope, } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCheck, faEllipsis, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DesktopHeader() {
    return (
        <>
            <div className='desktop-header'>

                <div className='header-logo'>
                    <NavLink to='/'>
                        <FontAwesomeIcon icon={faXTwitter} size='xl' />
                    </NavLink>
                </div>
                <div className='header-menu'>
                    <ul>
                        <li><NavLink className="header-link-items" to='/'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faHouse} />
                                </span>
                                <span className="link-text">Home</span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/explore'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </span>
                                <span className="link-text">Explore</span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/notifications'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faBell} />
                                </span>
                                <span className="link-text">Notifications</span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/messages'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <span className="link-text">Messages</span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/lists'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faBars} />
                                </span>
                                <span className="link-text">Lists</span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/verified'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="link-text">Verified</span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/profile'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className="link-text">Profile</span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/more'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </span>
                                <span className="link-text">More</span>
                            </div>
                        </NavLink></li>

                        <li><NavLink className="header-link-items-post" to='/tweet'>
                            <div className="header-link-icon-wrap">
                                <span className="link-text">Post</span>
                            </div>
                        </NavLink></li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink className="header-link-items-profile" to='/account'>
                                <div className="header-link-icon-wrap">
                                    <div className="account-icon">
                                        <FontAwesomeIcon icon={faUser} size='xl' />
                                    </div>
                                    <div className="account-text">
                                        <span className="account-text-primay text-bold">Manivel Gopi</span>
                                        <span className="account-text-secondary small-text text-secondary">@ManivelGopi</span>
                                    </div>
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </div>
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}
