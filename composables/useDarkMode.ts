export const useDarkMode = () => {
  const isDark = useState<boolean>('darkMode', () => {
    if (import.meta.client) {
      // Check localStorage first
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) {
        return saved === 'true'
      }
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      localStorage.setItem('darkMode', String(isDark.value))
      updateDarkClass()
    }
  }

  const setDarkMode = (value: boolean) => {
    isDark.value = value
    if (import.meta.client) {
      localStorage.setItem('darkMode', String(value))
      updateDarkClass()
    }
  }

  const updateDarkClass = () => {
    if (import.meta.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  // Initialize dark mode on mount
  if (import.meta.client) {
    updateDarkClass()
  }

  return {
    isDark,
    toggleDarkMode,
    setDarkMode
  }
}
