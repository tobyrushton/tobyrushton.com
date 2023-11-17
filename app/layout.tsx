import 'server-only'

import { ReactNode, FC } from 'react'
import '../styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Toby Rushton',
    description: 'My portfolio page',
}

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en-gb">
            <body>{children}</body>
        </html>
    )
}

export default Layout
