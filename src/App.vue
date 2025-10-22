<script setup>
import { useI18n } from 'vue-i18n'
import ProfileHeader from '@/components/ProfileHeader.vue'
import LinkCard from '@/components/LinkCard.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

const { t } = useI18n()

// Define your links - customize these with your own data
const links = [
  {
    icon: ['fas', 'briefcase'],
    title: 'links.portfolio',
    description: 'links.portfolio_desc',
    url: 'https://yourportfolio.com',
    color: '#0d6efd'
  },
  {
    icon: ['fas', 'blog'],
    title: 'links.blog',
    description: 'links.blog_desc',
    url: 'https://yourblog.com',
    color: '#6610f2'
  },
  {
    icon: ['fab', 'github'],
    title: 'links.github',
    description: 'links.github_desc',
    url: 'https://github.com/yourusername',
    color: '#333333'
  },
  {
    icon: ['fab', 'youtube'],
    title: 'links.youtube',
    description: 'links.youtube_desc',
    url: 'https://youtube.com/@yourchannel',
    color: '#ff0000'
  },
  {
    icon: ['fas', 'envelope'],
    title: 'links.contact',
    description: 'links.contact_desc',
    url: 'mailto:your.email@example.com',
    color: '#198754'
  },
  {
    icon: ['fas', 'newspaper'],
    title: 'links.newsletter',
    description: 'links.newsletter_desc',
    url: 'https://yournewsletter.com',
    color: '#fd7e14'
  }
]
</script>

<template>
  <div id="app" class="app-container">
    <!-- Navigation Header -->
    <nav class="navbar">
      <div class="navbar-content">
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container-custom">
        <!-- Profile Header -->
        <ProfileHeader />

        <!-- Links Section -->
        <div class="links-container">
          <transition-group name="list" tag="div">
            <LinkCard
              v-for="(link, index) in links"
              :key="index"
              :icon="link.icon"
              :title="t(link.title)"
              :description="t(link.description)"
              :url="link.url"
              :color="link.color"
              :style="{ animationDelay: `${index * 0.1}s` }"
            />
          </transition-group>
        </div>

        <!-- Social Links Footer -->
        <SocialLinks />
      </div>
    </main>
  </div>
</template>

<style>
/* Import global styles */
@import '@/assets/styles/variables.css';
@import '@/assets/styles/themes.css';
@import 'bootstrap/dist/css/bootstrap-grid.min.css';
</style>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: var(--bg-primary);
  transition: background-color var(--transition-speed) ease;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-primary);
  border-bottom: 2px solid var(--border-color);
  padding: 16px 0;
  transition: all var(--transition-speed) ease;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--bg-primary-rgb, 255, 255, 255), 0.95);
}

.dark .navbar {
  background-color: rgba(26, 26, 26, 0.95);
}

.navbar-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.main-content {
  padding: 20px 0 40px;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}

/* List transition animations */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-move {
  transition: transform 0.5s ease;
}

@media (max-width: 768px) {
  .navbar {
    padding: 12px 0;
  }
  
  .navbar-content {
    padding: 0 15px;
  }
  
  .main-content {
    padding: 15px 0 30px;
  }
  
  .links-container {
    gap: 12px;
    margin-top: 24px;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Loading animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.app-container {
  animation: fadeIn 0.5s ease-in;
}
</style>
