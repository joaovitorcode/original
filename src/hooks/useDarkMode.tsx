import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

export function useDarkMode() {
  return useContext(DarkModeContext)
}
