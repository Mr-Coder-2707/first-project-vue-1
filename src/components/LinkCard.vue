<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Define props
const props = defineProps({
  icon: {
    type: Array,
    required: true,
    validator: (value) => value.length === 2
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#0d6efd'
  }
})

// Open link in new tab
function handleClick() {
  window.open(props.url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <a 
    :href="url"
    @click.prevent="handleClick"
    class="link-card"
    :style="{ '--card-color': color }"
    rel="noopener noreferrer"
  >
    <div class="link-icon">
      <font-awesome-icon :icon="icon" />
    </div>
    
    <div class="link-content">
      <h3 class="link-title">{{ title }}</h3>
      <p v-if="description" class="link-description">{{ description }}</p>
    </div>
    
    <div class="link-arrow">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  text-decoration: none;
  color: var(--text-primary);
  transition: all var(--transition-speed) ease;
  box-shadow: 0 2px 8px var(--shadow);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--card-color);
  transition: width var(--transition-speed) ease;
}

.link-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px var(--shadow-hover);
  border-color: var(--card-color);
}

.link-card:hover::before {
  width: 8px;
}

.link-card:active {
  transform: translateY(-2px);
}

.link-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius-sm);
  color: var(--card-color);
  font-size: 24px;
  transition: all var(--transition-speed) ease;
}

.link-card:hover .link-icon {
  background-color: var(--card-color);
  color: white;
  transform: scale(1.1);
}

.link-content {
  flex: 1;
  min-width: 0;
}

.link-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0 0 4px 0;
  color: var(--text-primary);
  transition: color var(--transition-speed) ease;
}

.link-card:hover .link-title {
  color: var(--card-color);
}

.link-description {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
  transition: color var(--transition-speed) ease;
}

.link-arrow {
  flex-shrink: 0;
  color: var(--text-secondary);
  font-size: 18px;
  transition: all var(--transition-speed) ease;
}

.link-card:hover .link-arrow {
  color: var(--card-color);
  transform: translateX(4px);
}

/* RTL support */
[dir="rtl"] .link-card:hover .link-arrow {
  transform: translateX(-4px);
}

[dir="rtl"] .link-arrow {
  transform: rotate(180deg);
}

[dir="rtl"] .link-card:hover .link-arrow {
  transform: rotate(180deg) translateX(4px);
}

@media (max-width: 768px) {
  .link-card {
    padding: 16px;
    gap: 12px;
  }
  
  .link-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .link-title {
    font-size: var(--font-size-base);
  }
  
  .link-description {
    font-size: 13px;
  }
}

/* Animation on mount */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.link-card {
  animation: slideIn 0.4s ease-out backwards;
}
</style>
