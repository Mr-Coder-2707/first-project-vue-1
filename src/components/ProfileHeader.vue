<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Profile data - you can make this dynamic or fetch from API
const profile = {
  image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  name: 'profile.name',
  bio: 'profile.bio'
}
</script>

<template>
  <div class="profile-header">
    <div class="profile-image-wrapper">
      <img 
        :src="profile.image" 
        :alt="t(profile.name)"
        class="profile-image"
      />
    </div>
    
    <h1 class="profile-name">{{ t(profile.name) }}</h1>
    <p class="profile-bio">{{ t(profile.bio) }}</p>
  </div>
</template>

<style scoped>
.profile-header {
  text-align: center;
  padding: 40px 20px;
  animation: fadeInDown 0.6s ease-out;
}

.profile-image-wrapper {
  margin: 0 auto 24px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--accent-primary);
  box-shadow: 0 4px 16px var(--shadow-hover);
  transition: transform var(--transition-speed) ease;
}

.profile-image-wrapper:hover {
  transform: scale(1.05);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  transition: color var(--transition-speed) ease;
}

.profile-bio {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
  transition: color var(--transition-speed) ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .profile-header {
    padding: 30px 15px;
  }
  
  .profile-image-wrapper {
    width: 100px;
    height: 100px;
  }
  
  .profile-name {
    font-size: var(--font-size-xl);
  }
  
  .profile-bio {
    font-size: 14px;
  }
}
</style>
