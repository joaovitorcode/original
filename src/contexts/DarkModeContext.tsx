import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface DarkModeContextProps {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

interface DarkModeContextProviderProps {
  children: ReactNode
}

const DAFAULT_VALUE = {
  isDark: false,
  setIsDark: () => {},
}

const DarkModeContext = createContext<DarkModeContextProps>(DAFAULT_VALUE)

function DarkModeContextProvider({ children }: DarkModeContextProviderProps) {
  const [isDark, setIsDark] = useState(DAFAULT_VALUE.isDark)

  const value = { isDark, setIsDark }
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContextProvider, DarkModeContext }
