<script setup lang="ts">
const footerLinks = [
  'О проекте',
  'Реклама',
  'Условия использования',
  'Политика конфиденциальности',
  'Контакты',
]
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <a href="/" class="app-footer__logo" aria-label="META — на главную">
        <span class="app-footer__logo-bracket">&langle;</span>
        <span class="app-footer__logo-text">META</span>
        <span class="app-footer__logo-bracket">&rangle;</span>
      </a>

      <nav class="app-footer__nav" aria-label="Ссылки в подвале">
        <ul class="app-footer__nav-list">
          <li v-for="link in footerLinks" :key="link">
            <a href="#" class="app-footer__nav-link">{{ link }}</a>
          </li>
        </ul>
      </nav>

      <p class="app-footer__copy">&copy; {{ new Date().getFullYear() }} META. Усі права захищені.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  background: $color-dark-bg;
  padding: 32px 0;

  // ─── Element: inner ──────────────────────────────────────────────────────
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0 $content-padding-mobile;

    @include desktop {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 $content-padding-desktop;
    }
  }

  // ─── Element: logo ────────────────────────────────────────────────────────
  &__logo {
    display: flex;
    align-items: center;
    gap: 2px;
    text-decoration: none;
  }

  &__logo-bracket,
  &__logo-text {
    @include roboto-slab($fs-20, 700, normal);
    color: $color-white;
  }

  // ─── Element: nav ─────────────────────────────────────────────────────────
  &__nav-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 24px;
  }

  &__nav-link {
    @include roboto($fs-14, 400, $lh-20);
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.15s;

    &:hover { color: $color-white; }
  }

  // ─── Element: copyright ───────────────────────────────────────────────────
  &__copy {
    @include roboto($fs-12, 400, normal);
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
  }
}
</style>
