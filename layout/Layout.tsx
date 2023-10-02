import React, { ReactNode } from 'react'
import Navibar from './Navibar'
import Footer from './Footer'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navibar />
            {children}
            <Footer />
        </>
    )
}

export default Layout