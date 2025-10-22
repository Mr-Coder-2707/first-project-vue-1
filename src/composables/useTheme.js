import { useDark, useToggle } from '@vueuse/core'

/**
 * Custom composable for theme management
 * Uses VueUse's useDark to manage dark/light mode
 * Persists theme preference in localStorage
 */
export function useTheme() {
  // useDark automatically syncs with localStorage and system preferences
  // The key 'vueuse-color-scheme' is used by default
  const isDark = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'vueuse-color-scheme',
    listenToStorageChanges: true
  })

  // Create a toggle function
  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark
  }
}
