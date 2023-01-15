import 'server-only'

import { ReactNode, FC } from 'react'
import '../styles/globals.css'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en-gb">
            <head />
            <body>{children}</body>
        </html>
    )
}

export default Layout
