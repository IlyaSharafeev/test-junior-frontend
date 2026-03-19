<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import TickerBar from './components/TickerBar.vue'
import MainContent from './components/MainContent.vue'
import AppFooter from './components/AppFooter.vue'
import DrawerMenu from './components/DrawerMenu.vue'

const drawerOpen = ref(false)

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value
}

function closeDrawer() {
  drawerOpen.value = false
}
</script>

<template>
  <div class="page-layout">
    <AppHeader :drawer-open="drawerOpen" @toggle-drawer="toggleDrawer" />
    <TickerBar />
    <MainContent />
    <AppFooter />

    <DrawerMenu :is-open="drawerOpen" @close="closeDrawer" />
  </div>
</template>

<style lang="scss" scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
