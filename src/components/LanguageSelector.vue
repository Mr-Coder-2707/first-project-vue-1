<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale, SUPPORT_LOCALES } from '@/i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { t, locale } = useI18n()
const isOpen = ref(false)

// Language display names in their native language
const languageNames = {
  en: 'English',
  ar: 'العربية',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  hi: 'हिन्दी'
}

const languages = computed(() =>
  SUPPORT_LOCALES.map((code) => ({ code, name: languageNames[code] }))
)

const currentLanguage = computed(() => languageNames[locale.value] || 'English')

function changeLanguage(langCode) {
  setLocale(langCode)
  isOpen.value = false
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

// Close dropdown when clicking outside
function handleClickOutside(event) {
  const dropdown = document.querySelector('.language-selector')
  if (dropdown && !dropdown.contains(event.target)) {
    isOpen.value = false
  }
}

// Add click outside listener
if (typeof window !== 'undefined') {
  document.addEventListener('click', handleClickOutside)
}
</script>

<template>
  <div class="language-selector">
    <button 
      @click="toggleDropdown"
      class="language-toggle-btn"
      :aria-label="t('nav.language')"
      :title="t('nav.language')"
    >
      <font-awesome-icon :icon="['fas', 'globe']" class="icon" />
      <span class="current-lang">{{ currentLanguage }}</span>
      <font-awesome-icon 
        :icon="['fas', 'chevron-down']" 
        class="chevron"
        :class="{ 'chevron-up': isOpen }"
      />
    </button>
    
    <transition name="slide-fade">
      <div v-if="isOpen" class="language-dropdown">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="language-option"
          :class="{ active: locale === lang.code }"
        >
          <span class="lang-name">{{ lang.name }}</span>
          <font-awesome-icon 
            v-if="locale === lang.code"
            :icon="['fas', 'check']" 
            class="check-icon"
          />
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.language-selector {
  position: relative;
}

.language-toggle-btn {
  background-color: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: 24px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  box-shadow: 0 2px 8px var(--shadow);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
}

.language-toggle-btn:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 4px 12px var(--shadow-hover);
  transform: translateY(-2px);
}

.icon {
  color: var(--accent-primary);
  font-size: 16px;
}

.current-lang {
  min-width: 60px;
  text-align: left;
}

[dir="rtl"] .current-lang {
  text-align: right;
}

.chevron {
  font-size: 12px;
  color: var(--text-secondary);
  transition: transform var(--transition-speed) ease;
}

.chevron-up {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background-color: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  box-shadow: 0 4px 16px var(--shadow-hover);
  z-index: 1000;
  overflow: hidden;
  min-width: 200px;
}

[dir="rtl"] .language-dropdown {
  left: auto;
  right: 0;
}

.language-option {
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  color: var(--text-primary);
  font-size: 14px;
  text-align: left;
}

[dir="rtl"] .language-option {
  text-align: right;
}

.language-option:hover {
  background-color: var(--bg-secondary);
}

.language-option.active {
  background-color: var(--accent-primary);
  color: white;
}

.language-option.active:hover {
  background-color: var(--accent-hover);
}

.lang-name {
  flex: 1;
}

.check-icon {
  font-size: 14px;
}

/* Slide fade transition */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media (max-width: 768px) {
  .language-toggle-btn {
    padding: 8px 16px;
  }
  
  .current-lang {
    display: none;
  }
  
  .language-dropdown {
    min-width: 180px;
  }
}
</style>
