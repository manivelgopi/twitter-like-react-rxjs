/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useWindowsSize() {

    interface WindowSize {
        width: number,
        height: number
    }
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        //resize event listener
        window.addEventListener('resize', handleResize)
        // Update the window size whenever resize
        handleResize();
        //clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return windowSize;
}
