import '../styles/global.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DarkModeContextProvider } from '../contexts/DarkModeContext'
import { AuthContextProvider } from '../contexts/AuthContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <DarkModeContextProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </DarkModeContextProvider>
    </AuthContextProvider>
  )
}
