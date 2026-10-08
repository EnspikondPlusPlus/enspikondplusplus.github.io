export type ThemeMode = 'auto' | 'light' | 'dark'

const storageKey = 'theme'
const dayStartHour = 7
const dayEndHour = 19

export function getStoredMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(storageKey)
    return stored === 'light' || stored === 'dark' ? stored : 'auto'
  } catch {
    return 'auto'
  }
}

export function storeMode(mode: ThemeMode) {
  try {
    if (mode === 'auto') localStorage.removeItem(storageKey)
    else localStorage.setItem(storageKey, mode)
  } catch {
    return
  }
}

export function applyTheme(mode: ThemeMode) {
  const hour = new Date().getHours()
  const isDay = hour >= dayStartHour && hour < dayEndHour
  const theme = mode === 'auto' ? (isDay ? 'light' : 'dark') : mode
  document.documentElement.dataset.theme = theme
}
