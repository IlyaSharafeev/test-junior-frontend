<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppNav      from './AppNav.vue'
import IconBurger  from './icons/IconBurger.vue'
import IconSearch  from './icons/IconSearch.vue'
import IconUser    from './icons/IconUser.vue'
import IconMail    from './icons/IconMail.vue'

defineProps<{ drawerOpen: boolean }>()
const emit = defineEmits<{ (e: 'toggleDrawer'): void }>()

const dropdownOpen = ref(false)
const dropdownRef  = ref<HTMLElement | null>(null)

function toggleDropdown() { dropdownOpen.value = !dropdownOpen.value }

function handleOutsideClick(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    dropdownOpen.value = false
  }
}
onMounted(()  => document.addEventListener('click', handleOutsideClick, true))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick, true))

const topNavItems = ['НОВОСТИ', 'СПОРТ', 'БЕТТИНГ', 'ФИНАНСЫ', 'ШОУБИЗ', 'ЛАЙФСТАЙЛ', 'IT', 'АВТО']

const dropdownItems = [
  { label: 'Мой профиль',       href: '#' },
  { label: 'Мои комментарии',   href: '#' },
  { label: 'Выход',             href: '#' },
]
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">

      <!-- ── Row 1 ─────────────────────────────────────────────────────── -->
      <div class="app-header__row app-header__row--top">

        <button
          class="app-header__burger"
          :aria-expanded="drawerOpen"
          aria-controls="drawer-menu"
          aria-label="Открыть меню"
          @click="emit('toggleDrawer')"
        >
          <IconBurger class="app-header__icon" />
        </button>

        <a href="/" class="app-header__logo" aria-label="META — на главную">
          <span class="app-header__logo-bracket">&langle;</span>
          <span class="app-header__logo-text">META</span>
          <span class="app-header__logo-bracket">&rangle;</span>
        </a>

        <!-- desktop-only top mini-nav -->
        <nav class="app-header__top-nav" aria-label="Разделы">
          <ul class="app-header__top-nav-list">
            <li v-for="item in topNavItems" :key="item" class="app-header__top-nav-item">
              <a href="#" class="app-header__top-nav-link">{{ item }}</a>
            </li>
          </ul>
        </nav>

        <div class="app-header__actions">

          <div class="app-header__lang" aria-label="Выбор языка">
            <a href="#" class="app-header__lang-btn app-header__lang-btn--active">UA</a>
            <a href="#" class="app-header__lang-btn">RU</a>
          </div>

          <button class="app-header__icon-btn" aria-label="Поиск">
            <IconSearch class="app-header__icon" />
          </button>

          <!-- user + dropdown -->
          <div ref="dropdownRef" class="app-header__user-wrapper">
            <button
              class="app-header__icon-btn"
              :aria-expanded="dropdownOpen"
              aria-haspopup="true"
              aria-label="Личный кабинет"
              @click.stop="toggleDropdown"
            >
              <IconUser class="app-header__icon" />
              <span class="app-header__badge" aria-label="1 уведомление">1</span>
            </button>

            <Transition name="app-header-dropdown">
              <ul v-if="dropdownOpen"
                  class="app-header__dropdown"
                  role="menu"
                  aria-label="Меню пользователя">
                <li v-for="item in dropdownItems" :key="item.label" role="none">
                  <a :href="item.href"
                     class="app-header__dropdown-item"
                     role="menuitem">{{ item.label }}</a>
                </li>
              </ul>
            </Transition>
          </div>

          <button class="app-header__icon-btn" aria-label="Почта">
            <IconMail class="app-header__icon" />
          </button>

        </div>
      </div><!-- /row--top -->

      <div class="app-header__sep" role="presentation"></div>

      <!-- ── Row 2: secondary nav ─────────────────────────────────────── -->
      <div class="app-header__row app-header__row--nav">
        <AppNav />
      </div>

    </div>
  </header>
</template>

<style lang="scss" scoped>
// ─── Block ───────────────────────────────────────────────────────────────────
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: $color-dark-bg;
  width: 100%;

  // ─── Element: inner wrapper ────────────────────────────────────────────
  &__inner {
    display: flex;
    flex-direction: column;
    // Mobile: 97px total. Row1=48px sep=1px row2=48px ≈ 97px
    height: $header-height-mobile;

    @include desktop {
      height: $header-height-desktop;
    }
  }

  // ─── Element: row ─────────────────────────────────────────────────────
  &__row {
    display: flex;
    align-items: center;

    &--top {
      // exact px from Figma: burger at x=16 mobile, x=112 desktop
      height: $header-row1-height;   // 48px both breakpoints
      padding: 0 $header-padding-mobile;
      gap: 8px;

      @include desktop {
        padding: 0 $header-padding-desktop;
        gap: 12px;
      }
    }

    &--nav {
      flex: 1;
      overflow: hidden;
      padding: 0 $header-padding-mobile;

      @include desktop {
        padding: 0 $header-padding-desktop;
      }
    }
  }

  // ─── Element: burger ──────────────────────────────────────────────────
  &__burger {
    display: flex;
    align-items: center;
    justify-content: center;
    // Figma: size=24x24, top=12 → vertically centred in 48px row
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: $color-white;
  }

  // ─── Element: logo ────────────────────────────────────────────────────
  &__logo {
    display: flex;
    align-items: center;
    // Figma desktop: logo at x=168, burger ends at 136 → gap=32px
    // Figma mobile:  logo at x=64,  burger ends at 40  → gap=24px
    margin-left: 24px;
    flex-shrink: 0;
    text-decoration: none;
    gap: 2px;

    @include desktop {
      margin-left: 44px; // 168−(112+24)=32 + 12px default gap already consumed
    }
  }

  &__logo-bracket {
    @include roboto-slab($fs-24, 700, normal);
    color: $color-white;
  }

  &__logo-text {
    @include roboto-slab($fs-24, 700, normal);
    color: $color-white;
  }

  // ─── Element: top mini-nav (desktop only) ─────────────────────────────
  &__top-nav {
    display: none;
    // Figma: top-nav starts at x=315, logo right edge ≈ x=259 → gap≈56px
    margin-left: 40px;
    flex: 1;

    @include desktop {
      display: block;
    }

    &-list {
      display: flex;
      align-items: center;
      gap: 20px;  // derived from absolute positions
    }

    &-item { flex-shrink: 0; }

    &-link {
      // Figma: Roboto Medium 12px, uppercase, #4b99f5
      @include roboto($fs-12, 500, normal);
      color: $color-primary;
      text-transform: uppercase;
      white-space: nowrap;
      transition: opacity 0.15s;

      &:hover { opacity: 0.75; }
    }
  }

  // ─── Element: actions (right group) ───────────────────────────────────
  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;

    @include desktop {
      // Figma: search x=1228, user x=1268, mail x=1308 → gap=40px
      gap: 20px;
    }
  }

  // ─── Element: language switcher ───────────────────────────────────────
  &__lang {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__lang-btn {
    // Figma: Roboto Medium 12px, uppercase
    @include roboto($fs-12, 500, normal);
    text-transform: uppercase;
    color: $color-lang-inactive;
    transition: color 0.15s;

    &--active { color: $color-primary; }
    &:hover   { color: $color-white; }
  }

  // ─── Element: generic icon button ─────────────────────────────────────
  &__icon-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    // Figma: size=20x20, top=14 (centred in 48px row ≈ (48−20)/2=14)
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  // ─── Element: icon svg ─────────────────────────────────────────────────
  &__icon {
    display: block;
    color: $color-white;
  }

  // ─── Element: notification badge ──────────────────────────────────────
  &__badge {
    // Figma: bg=#ff891d, left=299 top=7 rounded=24px, font 11px bold
    position: absolute;
    top: -4px;
    right: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 14px;
    height: 14px;
    padding: 0 2px;
    background: $color-accent;
    border-radius: $radius-24;
    @include roboto($fs-11, 700, $lh-14);
    color: #000;
    text-transform: uppercase;

    @include desktop { display: none; }
  }

  // ─── Element: user wrapper ────────────────────────────────────────────
  &__user-wrapper {
    position: relative;
  }

  // ─── Element: dropdown ────────────────────────────────────────────────
  &__dropdown {
    position: absolute;
    top: calc(100% + 10px);
    right: -8px;
    min-width: 180px;
    background: $color-white;
    border-radius: $radius-8;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    z-index: 200;
  }

  &__dropdown-item {
    display: block;
    padding: 10px 16px;
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-primary;
    white-space: nowrap;
    transition: background 0.15s;

    &:hover { background: rgba(0, 0, 0, 0.04); }
  }

  // ─── Element: row separator ───────────────────────────────────────────
  &__sep {
    height: 1px;
    background: $color-header-sep;
    flex-shrink: 0;
  }
}

// ─── Dropdown transition ─────────────────────────────────────────────────────
.app-header-dropdown-enter-active,
.app-header-dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.app-header-dropdown-enter-from,
.app-header-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
