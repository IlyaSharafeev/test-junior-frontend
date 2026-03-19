<script setup lang="ts">
import IconChevronDown from './icons/IconChevronDown.vue'

// Figma: nav items at y=73 (desktop) / y=65 (mobile)
// Active item = ПРОИСШЕСТВИЯ; blue underline h=4px w=124px
const navItems = [
  { label: 'ГЛАВНАЯ',       active: false },
  { label: 'ПРОИСШЕСТВИЯ',  active: true  },
  { label: 'ОБЩЕСТВО',      active: false },
  { label: 'ЭКОНОМИКА',     active: false },
  { label: 'ПОЛИТИКА',      active: false },
  { label: 'ОБРАЗОВАНИЕ',   active: false },
  { label: 'МЕДИЦИНА',      active: false },
  { label: 'ВИДЕО',         active: false },
  { label: 'ФОТО',          active: false },
  { label: 'РАЗВЛЕЧЕНИЯ',   active: false },
]
</script>

<template>
  <nav class="app-nav" aria-label="Категории новостей">
    <ul class="app-nav__list">
      <li
        v-for="item in navItems"
        :key="item.label"
        class="app-nav__item"
        :class="{ 'app-nav__item--active': item.active }"
      >
        <a href="#" class="app-nav__link">{{ item.label }}</a>
      </li>

      <li class="app-nav__item app-nav__item--more">
        <a href="#" class="app-nav__link app-nav__link--more">
          ЕЩЕ
          <!-- Figma: chevron 12×13.7px -->
          <IconChevronDown class="app-nav__chevron" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.app-nav {
  // fills the row--nav flex container (65px desktop, 49px mobile)
  width: 100%;
  height: 100%;

  // ─── Element: list ──────────────────────────────────────────────────
  &__list {
    display: flex;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    @include no-scrollbar;
  }

  // ─── Element: item ──────────────────────────────────────────────────
  &__item {
    flex-shrink: 0;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    // Modifier: active — 4px blue bottom bar
    // Figma: h=4px, w=124px under "ПРОИСШЕСТВИЯ" (left=128, top=93)
    &--active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: $color-primary;
    }
  }

  // ─── Element: link ──────────────────────────────────────────────────
  &__link {
    display: flex;
    align-items: center;
    gap: 4px;
    // Figma: Roboto Bold 14px, white, uppercase
    @include roboto($fs-14, 700, normal);
    color: $color-white;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 0 8px;
    height: 100%;
    transition: opacity 0.15s;

    &:first-child { padding-left: 0; }
    &:hover       { opacity: 0.8; }

    &--more {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  // ─── Element: chevron icon ──────────────────────────────────────────
  &__chevron {
    display: inline-block;
    vertical-align: middle;
    color: $color-primary;   // Figma: chevron is #4b99f5 (blue)
    width: 12px;
    height: 14px;
    flex-shrink: 0;
  }
}
</style>
