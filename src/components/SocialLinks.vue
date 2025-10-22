<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { t } = useI18n()

// Social media links - customize these
const socialLinks = [
  {
    name: 'twitter',
    icon: ['fab', 'twitter'],
    url: 'https://twitter.com/yourusername',
    color: '#1DA1F2'
  },
  {
    name: 'linkedin',
    icon: ['fab', 'linkedin'],
    url: 'https://linkedin.com/in/yourusername',
    color: '#0A66C2'
  },
  {
    name: 'instagram',
    icon: ['fab', 'instagram'],
    url: 'https://instagram.com/yourusername',
    color: '#E4405F'
  },
  {
    name: 'facebook',
    icon: ['fab', 'facebook'],
    url: 'https://facebook.com/yourusername',
    color: '#1877F2'
  }
]

function openSocial(url) {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="social-links">
    <h3 class="social-title">{{ t('social.title') }}</h3>
    
    <div class="social-icons">
      <button
        v-for="social in socialLinks"
        :key="social.name"
        @click="openSocial(social.url)"
        class="social-button"
        :style="{ '--social-color': social.color }"
        :aria-label="t(`social.${social.name}`)"
        :title="t(`social.${social.name}`)"
      >
        <font-awesome-icon :icon="social.icon" />
      </button>
    </div>
    
    <div class="footer-text">
      <p>{{ t('footer.copyright') }}</p>
      <p class="made-with">
        {{ t('footer.made_with') }} 
        <font-awesome-icon :icon="['fab', 'vuejs']" class="vue-icon" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.social-links {
  text-align: center;
  padding: 40px 20px;
  margin-top: 40px;
  border-top: 2px solid var(--border-color);
}

.social-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
  transition: color var(--transition-speed) ease;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.social-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  background-color: var(--bg-card);
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px var(--shadow);
}

.social-button:hover {
  background-color: var(--social-color);
  border-color: var(--social-color);
  color: white;
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 6px 20px var(--shadow-hover);
}

.social-button:active {
  transform: translateY(-2px) scale(1.05);
}

.footer-text {
  margin-top: 24px;
}

.footer-text p {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 8px 0;
  transition: color var(--transition-speed) ease;
}

.made-with {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.vue-icon {
  color: #42b883;
  font-size: 16px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .social-links {
    padding: 30px 15px;
  }
  
  .social-button {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
  
  .social-icons {
    gap: 12px;
  }
}

/* Stagger animation for social buttons */
.social-button {
  animation: fadeInUp 0.5s ease-out backwards;
}

.social-button:nth-child(1) { animation-delay: 0.1s; }
.social-button:nth-child(2) { animation-delay: 0.2s; }
.social-button:nth-child(3) { animation-delay: 0.3s; }
.social-button:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
