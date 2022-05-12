import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component }: AppProps) => {
    return <Component />
}

export default MyApp
