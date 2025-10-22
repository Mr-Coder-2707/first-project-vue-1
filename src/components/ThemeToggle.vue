<script setup>
import { useTheme } from '@/composables/useTheme'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Use the theme composable
const { isDark, toggleDark } = useTheme()
</script>

<template>
  <button 
    @click="toggleDark()" 
    class="theme-toggle-btn"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <transition name="fade" mode="out-in">
      <font-awesome-icon 
        v-if="isDark" 
        :icon="['fas', 'sun']" 
        class="icon" 
        key="sun"
      />
      <font-awesome-icon 
        v-else 
        :icon="['fas', 'moon']" 
        class="icon" 
        key="moon"
      />
    </transition>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  background-color: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  box-shadow: 0 2px 8px var(--shadow);
}

.theme-toggle-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px var(--shadow-hover);
  border-color: var(--accent-primary);
}

.theme-toggle-btn:active {
  transform: scale(0.95);
}

.icon {
  font-size: 20px;
  color: var(--accent-primary);
  transition: color var(--transition-speed) ease;
}

.theme-toggle-btn:hover .icon {
  color: var(--accent-hover);
}

/* Fade transition for icon change */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
