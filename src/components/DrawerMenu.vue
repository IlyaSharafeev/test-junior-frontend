<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import IconMetaLogo from './icons/IconMetaLogo.vue'
import IconToggleOn from './icons/IconToggleOn.vue'

const props = defineProps<{ isOpen: boolean }>()
const emit  = defineEmits<{ (e: 'close'): void }>()

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.isOpen) emit('close')
}
onMounted(()  => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

// Figma drawer items (from desktop 7:642 drawer panel, y=153–543)
const sections = [
  {
    title: 'Рубрики',
    items: ['НОВОСТИ', 'РЕГИОНЫ', 'СПОРТ', 'СТАВКИ', 'ФИНАНСЫ', 'ШОУ БИЗНЕС', 'LIFESTYLE', 'ЗДОРОВЬЕ', 'IT', 'АВТО'],
    activeItem: 'СПОРТ',
  },
  {
    title: 'Проекты мета',
    items: ['ПОЧТА', 'ПОГОДА', 'ТВ-ПРОГРАММА', 'КАРТЫ', 'ПЕРЕВОДЧИК'],
    activeItem: '',
  },
]
</script>

<template>
  <Transition name="drawer-overlay">
    <div v-if="isOpen"
         class="drawer-overlay"
         aria-hidden="true"
         @click="emit('close')" />
  </Transition>

  <Transition name="drawer">
    <aside v-if="isOpen"
           id="drawer-menu"
           class="drawer"
           role="dialog"
           aria-modal="true"
           aria-label="Навигационное меню">

      <!-- Figma: logo centred, y=40, w=120, h=26.9 -->
      <div class="drawer__header">
        <IconMetaLogo class="drawer__logo" />
      </div>

      <div class="drawer__sep"></div>

      <nav v-for="section in sections"
           :key="section.title"
           class="drawer__section"
           :aria-label="section.title">

        <!-- Figma: Roboto Regular 14px, #4b99f5, left=32px, y=125 / y=606 -->
        <p class="drawer__section-title">{{ section.title }}</p>

        <ul class="drawer__list">
          <li
            v-for="item in section.items"
            :key="item"
            class="drawer__list-item"
            :class="{ 'drawer__list-item--active': item === section.activeItem }"
          >
            <!-- Figma: h=40px, Roboto Medium 14px, uppercase, left=32px -->
            <a href="#" class="drawer__list-link">{{ item }}</a>
          </li>
        </ul>

        <div class="drawer__sep"></div>
      </nav>

      <!-- Figma: settings rows at y=886/926, h=40 each -->
      <div class="drawer__settings">
        <div class="drawer__settings-row">
          <span class="drawer__settings-label">Темная тема</span>
          <!-- Figma: toggle w=40, h=24 -->
          <IconToggleOn class="drawer__toggle" />
        </div>
        <div class="drawer__settings-row">
          <span class="drawer__settings-label">Текст новостей</span>
          <span class="drawer__settings-lang">
            <span class="drawer__settings-lang-active">UA</span>
            <span class="drawer__settings-lang-sep"></span>
            <span class="drawer__settings-lang-inactive">RU</span>
          </span>
        </div>
      </div>

    </aside>
  </Transition>
</template>

<style lang="scss" scoped>
// ─── Overlay ─────────────────────────────────────────────────────────────────
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: $color-overlay;
  z-index: 99;
}

// ─── Block ───────────────────────────────────────────────────────────────────
.drawer {
  // Figma: w=300, bg=#fdfafa, box-shadow=0 0 16px rgba(0,0,0,0.1)
  position: fixed;
  top: 0;
  left: 0;
  width: $drawer-width;          // 300px
  height: 100vh;
  background: $color-drawer-bg;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.10);
  z-index: 100;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  @include no-scrollbar;

  // ─── Element: header ──────────────────────────────────────────────
  &__header {
    // Figma: logo at y=40, so approx top=40px centre → container ~104px
    display: flex;
    align-items: center;
    justify-content: center;
    height: 104px;
    flex-shrink: 0;
  }

  &__logo {
    width: 120px;
    height: auto;
  }

  // ─── Element: separator ───────────────────────────────────────────
  &__sep {
    // Figma: bg=rgba(0,0,0,0.05), h=1px
    height: 1px;
    background: $color-divider;
    flex-shrink: 0;
  }

  // ─── Element: section ─────────────────────────────────────────────
  &__section {
    flex-shrink: 0;
  }

  // ─── Element: section title ───────────────────────────────────────
  &__section-title {
    // Figma: Roboto Regular 14px, #4b99f5, left=32, y=125
    @include roboto($fs-14, 400, $lh-20);
    color: $color-primary;
    padding: 12px 32px 4px;
  }

  // ─── Element: list ────────────────────────────────────────────────
  &__list {
    display: flex;
    flex-direction: column;
  }

  // ─── Element: list item ───────────────────────────────────────────
  &__list-item {
    // Figma: h=40px per item
    height: 40px;

    &--active .drawer__list-link {
      background: rgba(0, 0, 0, 0.03);
    }
  }

  // ─── Element: list link ───────────────────────────────────────────
  &__list-link {
    // Figma: Roboto Medium 14px, uppercase, left=32px
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 32px;
    @include roboto($fs-14, 500, normal);
    color: $color-text-primary;
    text-transform: uppercase;
    background: $color-drawer-bg;
    transition: background 0.15s;

    &:hover { background: rgba(0, 0, 0, 0.04); }
  }

  // ─── Element: settings ────────────────────────────────────────────
  &__settings {
    flex-shrink: 0;
  }

  // ─── Element: settings row ────────────────────────────────────────
  &__settings-row {
    // Figma: h=40px, bg=#fdfafa, left=32
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 32px;
    background: $color-drawer-bg;
  }

  // ─── Element: settings label ──────────────────────────────────────
  &__settings-label {
    @include roboto($fs-14, 500, normal);
    color: $color-text-primary;
  }

  &__toggle {
    width: 40px;
    height: 24px;
  }

  // ─── Element: language in settings ───────────────────────────────
  &__settings-lang {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__settings-lang-active {
    @include roboto($fs-14, 500, normal);
    color: $color-primary;
    text-transform: uppercase;
  }

  &__settings-lang-sep {
    width: 1px;
    height: 12px;
    background: $color-divider;
  }

  &__settings-lang-inactive {
    @include roboto($fs-14, 500, normal);
    color: $color-text-tertiary;
    text-transform: uppercase;
  }
}

// ─── Transitions ─────────────────────────────────────────────────────────────
.drawer-enter-active,
.drawer-leave-active {
  transition: transform $drawer-transition;
}
.drawer-enter-from,
.drawer-leave-to  { transform: translateX(-100%); }
.drawer-enter-to,
.drawer-leave-from { transform: translateX(0); }

.drawer-overlay-enter-active,
.drawer-overlay-leave-active { transition: opacity 0.25s ease; }
.drawer-overlay-enter-from,
.drawer-overlay-leave-to     { opacity: 0; }
</style>
