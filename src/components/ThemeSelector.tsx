import { useEffect, useState } from 'react'
import { FaClock, FaMoon, FaSun } from 'react-icons/fa6'
import { applyTheme, getStoredMode, storeMode, type ThemeMode } from '../theme'

const options = [
  { mode: 'auto', label: 'Auto', icon: FaClock },
  { mode: 'light', label: 'Light', icon: FaSun },
  { mode: 'dark', label: 'Dark', icon: FaMoon },
] as const

function ThemeSelector() {
  const [mode, setMode] = useState<ThemeMode>(getStoredMode)

  useEffect(() => {
    applyTheme(mode)
    if (mode !== 'auto') return
    const interval = setInterval(() => applyTheme(mode), 60_000)
    return () => clearInterval(interval)
  }, [mode])

  const index = options.findIndex((option) => option.mode === mode)
  const { label, icon: Icon } = options[index]
  const next = options[(index + 1) % options.length]

  const cycle = () => {
    setMode(next.mode)
    storeMode(next.mode)
  }

  return (
    <button
      type="button"
      className="theme-selector"
      title={`Theme: ${label}`}
      aria-label={`Theme: ${label}. Switch to ${next.label}`}
      onClick={cycle}
    >
      <Icon aria-hidden="true" />
    </button>
  )
}

export default ThemeSelector
