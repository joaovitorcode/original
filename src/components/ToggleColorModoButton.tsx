import { useEffect } from 'react'
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md'
import { useDarkMode } from '../hooks/useDarkMode'

export function ToggleColorModoButton() {
  const { isDark, setIsDark } = useDarkMode()

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    isDark
      ? htmlElement?.classList.add('dark')
      : htmlElement?.classList.remove('dark')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="hover:bg-slate-300 hover:bg-opacity-30 p-3 rounded-full transition-all dark:text-white"
    >
      {isDark ? (
        <MdOutlineWbSunny size={24} />
      ) : (
        <MdOutlineDarkMode size={24} />
      )}
    </button>
  )
}
