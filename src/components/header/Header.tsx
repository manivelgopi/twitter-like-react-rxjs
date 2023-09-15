import React from 'react';
import useWindowsSize from '../../custom-hooks/useWindowsSize';
import DesktopHeader from './DesktopHeader';
import './DesktopHeader.scss';
import MobileHeader from './MobileHeader';
import './MobileHeader.scss';

export default function Header() {
    const { width: screenWidth } = useWindowsSize();
    console.log(screenWidth);

    return (
        <>
            <header role="banner" className={`header ${screenWidth > 1266 ? "desktop" : "mobile"} `}>
                {screenWidth > 1266 ? <DesktopHeader /> : <MobileHeader />}
            </header>
        </>

    )
}
