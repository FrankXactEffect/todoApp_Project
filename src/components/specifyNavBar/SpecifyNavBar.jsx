import React, { useEffect, useState } from 'react'
//to track navigation changes
import { useLocation } from 'react-router-dom'


function SpecifyNavBar({ children }) {

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false)


    useEffect(() => {
        //every time location changes , it rerenders
        console.log('this is location: ', location)

        if (location.pathname === '/todoapp') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location])


    return (
        <div>{showNavBar && children}</div>
    )
}

export default SpecifyNavBar