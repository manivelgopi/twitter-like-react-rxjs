import { faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faBell, faCheck, faEllipsis, faEnvelope, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileHeader() {
    return (
        <>
            <div className='mobile-header'>
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

                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/explore'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/notifications'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faBell} />
                                </span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/messages'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/lists'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faBars} />
                                </span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/verified'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/profile'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                        </NavLink></li>
                        <li><NavLink className="header-link-items" to='/more'>
                            <div className="header-link-icon-wrap">
                                <span className="link-icon">
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </span>
                            </div>
                        </NavLink></li>

                        <li><NavLink className="header-link-items-post" to='/tweet'>
                            <div className="header-link-icon-wrap">
                                <span className="link-text"><FontAwesomeIcon icon={faTwitter} /></span>
                            </div>
                        </NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink className="header-link-items-profile" to='/account'>
                            <div className="header-link-icon-wrap">
                                <div className="account-icon">
                                    <FontAwesomeIcon icon={faUser} size='xl' />
                                </div>
                            </div>
                        </NavLink></li>
                    </ul>

                </div>
            </div>
        </>

    )
}
