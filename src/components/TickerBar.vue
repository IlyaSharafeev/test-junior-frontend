<script setup lang="ts">
import IconTickerTag from './icons/IconTickerTag.vue'
import IconSunSmall  from './icons/IconSunSmall.vue'

// Figma: pill h=36, rounded=18px, bg=rgba(0,0,0,0.05)
// icon within pill: w=20.27, h=16; text: Roboto Medium 16px
// weather pill: bg=#4b99f5, city+sun+temp, h=36, rounded=18
const tickerItems = [
  'COVID-19',
  'Выборы 2020',
  'Антимонопольный закон',
  'Евро 2020',
  'Антимонопольный закон',
]
</script>

<template>
  <section class="ticker-bar" aria-label="Актуальные темы">
    <div class="ticker-bar__inner">

      <ul class="ticker-bar__list">
        <li v-for="(label, i) in tickerItems" :key="i" class="ticker-bar__item">
          <a href="#" class="ticker-bar__tag">
            <!-- Figma: icon w=20.27px h=16px, left-pad=12px within pill -->
            <IconTickerTag class="ticker-bar__tag-icon" />
            <span class="ticker-bar__tag-label">{{ label }}</span>
          </a>
        </li>
      </ul>

      <!-- Weather pill — desktop only -->
      <!-- Figma: bg=#4b99f5, h=36, rounded=18, city+icon+temp -->
      <div class="ticker-bar__weather">
        <a href="#" class="ticker-bar__weather-pill">
          <span class="ticker-bar__weather-city">Харьков</span>
          <IconSunSmall class="ticker-bar__weather-icon" />
          <span class="ticker-bar__weather-temp">+14°</span>
        </a>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.ticker-bar {
  background: $color-page-bg;
  border-bottom: 1px solid $color-divider-strong;

  // ─── Element: inner ────────────────────────────────────────────────
  &__inner {
    display: flex;
    align-items: center;
    gap: 12px;
    // Figma mobile: pills at y=109, header ends at y=97 → top-pad=12px
    // Figma desktop: pills at y=137, header ends at y=113 → top-pad=24px
    padding: 12px $content-padding-mobile;

    @include desktop {
      padding: 24px $content-padding-desktop 12px;
    }
  }

  // ─── Element: list ─────────────────────────────────────────────────
  &__list {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    overflow-x: auto;
    @include no-scrollbar;
  }

  &__item { flex-shrink: 0; }

  // ─── Element: tag pill ─────────────────────────────────────────────
  &__tag {
    // Figma: h=36, rounded=18, bg=rgba(0,0,0,0.05), padding-left=12px
    display: inline-flex;
    align-items: center;
    gap: 8px;          // gap between icon (20.27px) and text ≈ 8px from Figma
    height: 36px;
    padding: 0 12px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: $radius-18;
    @include roboto($fs-16, 500, normal);
    color: $color-text-primary;
    white-space: nowrap;
    transition: background 0.15s;

    &:hover { background: rgba(0, 0, 0, 0.08); }
  }

  &__tag-icon {
    // Figma: w=20.27, h=16 (icon centred inside 36px pill)
    width: 20px;
    height: 16px;
    flex-shrink: 0;
  }

  // ─── Element: weather (desktop only) ───────────────────────────────
  &__weather {
    display: none;
    flex-shrink: 0;

    @include desktop { display: flex; }
  }

  &__weather-pill {
    // Figma: bg=#4b99f5, h=36, rounded=18, w=170
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 36px;
    padding: 0 16px;
    background: $color-primary;
    border-radius: $radius-18;
    @include roboto($fs-16, 500, normal);
    color: $color-white;
    white-space: nowrap;
    transition: opacity 0.15s;

    &:hover { opacity: 0.9; }
  }

  &__weather-city  { @include roboto($fs-16, 500, normal); }
  &__weather-icon  { width: 20px; height: 20px; }
  &__weather-temp  { @include roboto($fs-16, 500, normal); }
}
</style>
