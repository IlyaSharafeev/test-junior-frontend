<script setup lang="ts">
// ─── Icon components ──────────────────────────────────────────────────────────
import IconArrowRight    from './icons/IconArrowRight.vue'
import IconComment       from './icons/IconComment.vue'
import IconRateUp        from './icons/IconRateUp.vue'
import IconRateDown      from './icons/IconRateDown.vue'
import IconWeatherCloud  from './icons/IconWeatherCloud.vue'
import IconLocationPin   from './icons/IconLocationPin.vue'
import IconSun           from './icons/IconSun.vue'

import photoFeatured    from '@/assets/images/photos/featured-article.png'
import photoSidebar1    from '@/assets/images/photos/sidebar-card-1.png'
import photoSidebar2    from '@/assets/images/photos/sidebar-card-2.png'
import photoDiscussed1  from '@/assets/images/photos/discussed-1.png'
import photoDiscussed2  from '@/assets/images/photos/discussed-2.png'
import photoDiscussed3  from '@/assets/images/photos/discussed-3.png'
import photoDiscussed4  from '@/assets/images/photos/discussed-4.png'
import photoMedium1     from '@/assets/images/photos/medium-card-1.png'
import photoMedium2     from '@/assets/images/photos/medium-card-2.png'
import photoThumb1      from '@/assets/images/photos/news-thumb-1.png'
import photoThumb2      from '@/assets/images/photos/news-thumb-2.png'
import photoThumb3      from '@/assets/images/photos/news-thumb-3.png'
import photoThumb4      from '@/assets/images/photos/news-thumb-4.png'
import photoThumb5      from '@/assets/images/photos/news-thumb-5.png'

// ─── Data ─────────────────────────────────────────────────────────────────────
const featured = {
  img:     photoFeatured,
  title:   'Коронавірус у Києві: за добу діагноз підтвердили у 559 осіб, 23 пацієнти померли',
  excerpt: 'За минулу добу коронавірус діагностували у 559 киян, 23 людини померли. Джерело: мер Києва Віталій Кличко під час онлайн пресконференції.',
}

// Left column — Figma: time Roboto Regular 14px rgba(0,0,0,0.54),
//               title Roboto Slab Medium 16px line-height 22px w=276
const leftNews = [
  { time: '08:30', title: 'Україна зібрала вже 80% врожаю зернових культур' },
  { time: '08:45', title: 'Росія заборонила співробітникам ФСБ мати дозвіл на проживання за кордоном' },
  { time: '09:30', title: 'Вибори-2020: ЦВК не попереджає, що підрахунок голосів буде тривалим' },
  { time: '10:20', title: 'У Білорусі почали відраховувати студентів за протести: з університету — 5 осіб' },
  { time: '10:20', title: 'Україна зібрала вже 80% врожаю зернових культур' },
  { time: '10:20', title: 'Вибори-2020: ЦВК не попереджає, що підрахунок всіх голосів буде тривалим' },
]

// Sidebar cards — Figma: img 276×156 rounded-12, title Roboto Slab Bold 18px lh-24
const sidebarCards = [
  { img: photoSidebar1, title: 'Під кінець робочого тижня температура поповзе вгору' },
  { img: photoSidebar2, title: 'Україна зібрала вже 80% врожаю зернових культур' },
]

// "Сейчас обсуждают" — Figma: 2-column grid, img 276×156 rounded-12
const discussedCards = [
  { img: photoDiscussed1, title: 'Під кінець робочого тижня температура поповзе вгору',    category: 'ЗДОРОВЬЕ', time: '08:30', comments: 246 },
  { img: photoDiscussed2, title: 'Україна зібрала 80% врожаю зернових',                    category: 'ЗДОРОВЬЕ', time: '08:30', comments: 206 },
  { img: photoDiscussed3, title: 'Україна зібрала 80% врожаю зернових',                    category: 'ЗДОРОВЬЕ', time: '08:30', comments: 206 },
  { img: photoDiscussed4, title: 'Під кінець робочого тижня температура поповзе вгору',    category: 'ЗДОРОВЬЕ', time: '08:30', comments: 206 },
]

// "Последние" — left column, desktop only, Figma: Roboto Slab Regular 14px lh-22
const recentNews = [
  { category: 'ПОЛИТИКА', time: '08:30', comments: 246, title: 'Під кінець робочого тижня температура повітря поповзе вгору' },
  { category: 'СПОРТ',    time: '08:30', comments: 89,  title: 'Вибори-2020: ЦВК не попереджає, що підрахунок голосів буде не тривалим' },
  { category: 'ЗДОРОВЬЕ', time: '08:30', comments: 206, title: 'Коронавірус у Києві: за добу діагноз підтвердили у 559 осіб, 23 пацієнти померли' },
  { category: 'ПОЛИТИКА', time: '08:30', comments: 246, title: 'Під кінець робочого тижня температура поповзе вгору' },
  { category: 'СПОРТ',    time: '08:30', comments: 89,  title: 'Вибори-2020: ЦВК не попереджає, що підрахунок голосів буде не тривалим' },
  { category: 'ЗДОРОВЬЕ', time: '08:30', comments: 206, title: 'Коронавірус у Києві: за добу діагноз підтвердили у 559 осіб, 23 пацієнти померли' },
]

// Mobile medium cards — Figma: two side-by-side 276×156 rounded-12
const mediumCards = [
  { img: photoMedium1, title: 'Під кінець робочого тижня температура поповзе вгору' },
  { img: photoMedium2, title: 'Україна зібрала вже 80% врожаю зернових культур' },
]

// Mobile news list — Figma: thumb 120×75 rounded-8, time 14px, title 14px Roboto Slab Medium lh-22
const mobileNewsList = [
  { img: photoThumb1, time: '12:30', title: 'Вибори-2020: ЦВК попереджає, що підрахунок голосів буде тривалим' },
  { img: photoThumb2, time: '12:40', title: 'Коронавірус у Києві: за останню добу діагноз підтвердили у 559 осіб' },
  { img: photoThumb3, time: '12:40', title: 'Під кінець робочого тижня температура поповзе вгору' },
  { img: photoThumb4, time: '12:40', title: 'Коронавірус у Києві: за останню добу діагноз підтвердили у 559 осіб' },
  { img: photoThumb5, time: '12:40', title: 'Україна зібрала вже 80% врожаю зернових' },
]

// Currency — Figma: Roboto Medium 18px, lh=20, rgba(0,0,0,0.8) + rgba(0,0,0,0.7)
const currencies = [
  { cur: 'USD', nbu: '28.40', buy: '28.33', sell: '28.53', trend: [true,  false, true]  },
  { cur: 'EUR', nbu: '33.31', buy: '33.12', sell: '33.56', trend: [false, false, false] },
  { cur: 'RUB', nbu: '0.361', buy: '0.334', sell: '0.377', trend: [false, false, false] },
]
</script>

<template>
  <main class="main-content">
    <div class="main-content__grid">

      <!-- ══════════════════════════════════════════════════════════════
           LEFT COLUMN — desktop only
      ══════════════════════════════════════════════════════════════ -->
      <aside class="main-content__col main-content__col--left">
        <!-- Figma: Roboto Slab Bold 20px #4b99f5, y=205 -->
        <h2 class="main-content__section-title">ГЛАВНОЕ</h2>

        <ul class="news-list">
          <li v-for="(item, i) in leftNews" :key="i" class="news-list__item">
            <!-- Figma: time Roboto Regular 14px rgba(0,0,0,0.54) lh=20 -->
            <span class="news-list__time">{{ item.time }}</span>
            <!-- Figma: title Roboto Slab Medium 16px lh=22 w=276 -->
            <a href="#" class="news-list__title">{{ item.title }}</a>
          </li>
        </ul>
      </aside>

      <!-- ══════════════════════════════════════════════════════════════
           CENTER COLUMN
      ══════════════════════════════════════════════════════════════ -->
      <div class="main-content__col main-content__col--center">

        <!-- Desktop featured article -->
        <!-- Figma: img 576×362 rounded-12, title Roboto Slab Bold 32px lh=40 -->
        <article class="featured-article featured-article--desktop">
          <a href="#" class="featured-article__img-link">
            <img :src="featured.img" :alt="featured.title"
                 class="featured-article__img" width="576" height="362" />
          </a>
          <a href="#" class="featured-article__title">{{ featured.title }}</a>
          <!-- Figma: Roboto Regular 18px lh=26 rgba(0,0,0,0.54) -->
          <p class="featured-article__excerpt">{{ featured.excerpt }}</p>
        </article>

        <!-- Mobile featured article -->
        <!-- Figma: img 336×210 rounded-12, title Roboto Slab Bold 24px lh=32 -->
        <article class="featured-article featured-article--mobile">
          <a href="#" class="featured-article__img-link">
            <img :src="featured.img" :alt="featured.title"
                 class="featured-article__img" width="336" height="210" />
          </a>
          <a href="#" class="featured-article__title">{{ featured.title }}</a>
          <!-- Figma: Roboto Regular 14px lh=20 rgba(0,0,0,0.54) -->
          <p class="featured-article__excerpt">{{ featured.excerpt }}</p>
        </article>

        <!-- Mobile medium cards -->
        <!-- Figma: two side-by-side, 276×156 each, rounded-12 -->
        <div class="medium-cards">
          <article v-for="(card, i) in mediumCards" :key="i" class="medium-card">
            <a href="#" class="medium-card__link">
              <img :src="card.img" :alt="card.title"
                   class="medium-card__img" width="276" height="156" />
              <p class="medium-card__title">{{ card.title }}</p>
            </a>
          </article>
        </div>

        <!-- Mobile news list -->
        <!-- Figma: thumb 120×75 rounded-8; time 14px; title Roboto Slab Medium 14px lh=22 -->
        <ul class="mobile-news-list">
          <li v-for="(item, i) in mobileNewsList" :key="i" class="mobile-news-list__item">
            <a href="#" class="mobile-news-list__link">
              <img :src="item.img" :alt="item.title"
                   class="mobile-news-list__thumb" width="120" height="75" />
              <div class="mobile-news-list__body">
                <span class="mobile-news-list__time">{{ item.time }}</span>
                <p class="mobile-news-list__title">{{ item.title }}</p>
              </div>
            </a>
          </li>
        </ul>

        <!-- Mobile "Больше новостей" -->
        <div class="main-content__more-wrap main-content__more-wrap--mobile">
          <a href="#" class="more-btn">
            <span class="more-btn__label">Больше новостей</span>
            <IconArrowRight class="more-btn__icon" />
          </a>
        </div>

        <!-- "Сейчас обсуждают" — desktop only -->
        <!-- Figma: Roboto Slab Bold 20px #4b99f5, 2-col grid, gap not explicit -->
        <section class="discussed">
          <h2 class="main-content__section-title">СЕЙЧАС ОБСУЖДАЮТ</h2>

          <div class="discussed__grid">
            <article v-for="(card, i) in discussedCards" :key="i" class="discussed-card">
              <a href="#" class="discussed-card__img-link">
                <img :src="card.img" :alt="card.title"
                     class="discussed-card__img" width="276" height="156" />
              </a>
              <!-- Figma: meta row: category 12px #4b99f5 + time 14px + comments 14px -->
              <div class="discussed-card__meta">
                <span class="discussed-card__category">{{ card.category }}</span>
                <span class="discussed-card__time">{{ card.time }}</span>
                <span class="discussed-card__comments">
                  <IconComment />
                  {{ card.comments }}
                </span>
              </div>
              <!-- Figma: Roboto Slab Bold 18px lh=24 -->
              <a href="#" class="discussed-card__title">{{ card.title }}</a>
            </article>
          </div>
        </section>

      </div><!-- /col--center -->

      <!-- ══════════════════════════════════════════════════════════════
           RIGHT COLUMN — desktop only
      ══════════════════════════════════════════════════════════════ -->
      <aside class="main-content__col main-content__col--right">

        <!-- Sidebar article cards -->
        <div class="sidebar-cards">
          <article v-for="(card, i) in sidebarCards" :key="i" class="sidebar-card">
            <a href="#" class="sidebar-card__link">
              <!-- Figma: img 276×156 rounded-12 -->
              <img :src="card.img" :alt="card.title"
                   class="sidebar-card__img" width="276" height="156" />
              <!-- Figma: Roboto Slab Bold 18px lh=24 w=276 -->
              <h3 class="sidebar-card__title">{{ card.title }}</h3>
            </a>
          </article>
        </div>

        <!-- "Больше новостей" button — desktop sidebar -->
        <!-- Figma: h=40 w=276, border 2px #4b99f5, rounded=24, Roboto Bold 16px -->
        <div class="main-content__more-wrap">
          <a href="#" class="more-btn">
            <span class="more-btn__label">Больше новостей</span>
            <IconArrowRight class="more-btn__icon" />
          </a>
        </div>

        <!-- Weather widget -->
        <!-- Figma: bg=#f6f6f6, rounded=12, h=204 -->
        <div class="weather-widget">
          <div class="weather-widget__header">
            <!-- Figma: Roboto Slab Bold 20px lh=24 -->
            <h3 class="weather-widget__title">Погода в Киеве</h3>
            <IconLocationPin class="weather-widget__loc-icon" />
          </div>
          <div class="weather-widget__sep"></div>
          <div class="weather-widget__main">
            <!-- Figma: +14° Roboto Light 48px lh=48 tracking=-0.5px -->
            <span class="weather-widget__temp">+14°</span>
            <!-- Figma: weather icon 48×48 -->
            <IconWeatherCloud class="weather-widget__weather-icon" />
          </div>
          <!-- Figma: 4 periods, sun icon 24×24, label 14px, temp 14px Medium -->
          <div class="weather-widget__forecast">
            <div v-for="p in ['Утро','День','Вечер','Ночь']" :key="p"
                 class="weather-widget__period">
              <span class="weather-widget__period-label">{{ p }}</span>
              <IconSun class="weather-widget__period-icon" />
              <span class="weather-widget__period-temp">+14°</span>
            </div>
          </div>
        </div>

        <!-- Currency widget -->
        <!-- Figma: bg=#f6f6f6, rounded=12, h=204 -->
        <div class="currency-widget">
          <div class="currency-widget__header">
            <!-- Figma: Roboto Slab Bold 20px lh=24 -->
            <h3 class="currency-widget__title">Курс валют</h3>
          </div>
          <div class="currency-widget__sep"></div>
          <!-- Figma: Курс НБУ / Обмін валют labels: 14px rgba(0,0,0,0.4) -->
          <div class="currency-widget__col-labels">
            <span class="currency-widget__col-label">Курс НБУ</span>
            <span class="currency-widget__col-label">Обмін валют</span>
          </div>
          <div class="currency-widget__rows">
            <div v-for="row in currencies" :key="row.cur" class="currency-widget__row">
              <!-- Figma: currency Roboto Medium 18px lh=20 -->
              <span class="currency-widget__currency">{{ row.cur }}</span>
              <span class="currency-widget__rate">{{ row.nbu }}</span>
              <component :is="row.trend[0] ? IconRateUp : IconRateDown" class="currency-widget__trend" />
              <span class="currency-widget__rate">{{ row.buy }}</span>
              <component :is="row.trend[1] ? IconRateUp : IconRateDown" class="currency-widget__trend" />
              <span class="currency-widget__rate">{{ row.sell }}</span>
              <component :is="row.trend[2] ? IconRateUp : IconRateDown" class="currency-widget__trend" />
            </div>
          </div>
        </div>

      </aside><!-- /col--right -->

      <!-- ══════════════════════════════════════════════════════════════
           "ПОСЛЕДНИЕ" — second row, left column, desktop only
      ══════════════════════════════════════════════════════════════ -->
      <section class="main-content__recent">
        <h2 class="main-content__section-title">ПОСЛЕДНИЕ</h2>
        <ul class="recent-list">
          <li v-for="(item, i) in recentNews" :key="i" class="recent-list__item">
            <div class="recent-list__meta">
              <span class="recent-list__category">{{ item.category }}</span>
              <span class="recent-list__time">{{ item.time }}</span>
              <span class="recent-list__comments">
                <IconComment />
                {{ item.comments }}
              </span>
            </div>
            <!-- Figma: Roboto Slab Regular 14px lh=22 w=276 -->
            <a href="#" class="recent-list__title">{{ item.title }}</a>
          </li>
        </ul>
      </section>

    </div><!-- /grid -->
  </main>
</template>

<style lang="scss" scoped>
// ─── Block ───────────────────────────────────────────────────────────────────
.main-content {
  flex: 1;
  background: $color-page-bg;

  // ─── Element: grid ──────────────────────────────────────────────────
  &__grid {
    @include content-container;
    // Desktop: Figma content y starts at 205, ticker bottom at ~173 → ~32px gap
    padding-top: 16px;
    padding-bottom: 40px;

    @include desktop {
      display: grid;
      // Three content columns + gap
      grid-template-columns: $col-left $col-center $col-right;
      grid-template-rows: auto auto;
      column-gap: $col-gap;     // 40px exact from Figma
      padding-top: 32px;        // 205 − 173 = 32px from ticker to content
    }
  }

  // ─── Element: column ────────────────────────────────────────────────
  &__col {
    &--left {
      // Hidden on mobile; desktop: grid col 1 row 1
      display: none;

      @include desktop {
        display: block;
        grid-column: 1;
        grid-row: 1;
      }
    }

    &--center {
      @include desktop {
        grid-column: 2;
        grid-row: 1;
      }
    }

    &--right {
      // Hidden on mobile
      display: none;

      @include desktop {
        display: block;
        grid-column: 3;
        grid-row: 1;
      }
    }
  }

  // ─── Element: section title ─────────────────────────────────────────
  // Figma: Roboto Slab Bold 20px #4b99f5
  &__section-title {
    @include roboto-slab($fs-20, 700, normal);
    color: $color-primary;
    margin-bottom: 16px;
    white-space: nowrap;
  }

  // ─── Element: "more" button wrapper ────────────────────────────────
  &__more-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;

    &--mobile {
      @include desktop { display: none; }
    }
  }

  // ─── Element: recent (desktop only, grid row 2 col 1) ──────────────
  &__recent {
    display: none;

    @include desktop {
      display: block;
      grid-column: 1;
      grid-row: 2;
      margin-top: 40px;
    }
  }
}

// ─── "Больше новостей" button ─────────────────────────────────────────────────
// Figma: h=40 w=276 border-2 #4b99f5 rounded=24 Roboto Bold 16px
.more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border: 2px solid $color-primary;
  border-radius: $radius-24;
  @include roboto($fs-16, 700, normal);
  color: $color-text-primary;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: $color-primary;
    color: $color-white;
  }

  &__icon { width: 21px; height: 24px; color: inherit; }
}

// ─── Left column: news list ───────────────────────────────────────────────────
// Figma: items at y=247,331,437... → item height varies (time+title)
.news-list {
  &__item {
    padding: 20px 0;
    border-bottom: 1px solid $color-divider;

    &:last-child { border-bottom: none; }
  }

  // Figma: Roboto Regular 14px rgba(0,0,0,0.54) lh=20
  &__time {
    display: block;
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-secondary;
    margin-bottom: 4px;
  }

  // Figma: Roboto Slab Medium 16px lh=22 w=276
  &__title {
    display: block;
    @include roboto-slab($fs-16, 500, $lh-22);
    color: $color-text-primary;
    transition: color 0.15s;

    &:hover { color: $color-primary; }
  }
}

// ─── Featured article ─────────────────────────────────────────────────────────
.featured-article {
  // Modifier: desktop
  &--desktop {
    display: none;
    margin-bottom: 40px;

    @include desktop { display: block; }
  }

  // Modifier: mobile
  &--mobile {
    margin-bottom: 20px;

    @include desktop { display: none; }
  }

  &__img-link { display: block; margin-bottom: 12px; }

  &__img {
    // Figma desktop: 576×362 rounded=12; mobile: 336×210 rounded=12
    width: 100%;
    object-fit: cover;
    border-radius: $radius-12;

    .featured-article--desktop & { height: 362px; }
    .featured-article--mobile  & { height: 210px; }
  }

  // Figma desktop: Roboto Slab Bold 32px lh=40; mobile: Bold 24px lh=32
  &__title {
    display: block;
    color: $color-text-primary;
    margin-bottom: 8px;
    transition: color 0.15s;

    &:hover { color: $color-primary; }

    .featured-article--desktop & {
      @include roboto-slab($fs-32, 700, $lh-40);
      margin-bottom: 12px;
    }

    .featured-article--mobile & {
      @include roboto-slab($fs-24, 700, $lh-32);
    }
  }

  // Figma desktop: Roboto Regular 18px lh=26; mobile: 14px lh=20
  &__excerpt {
    color: $color-text-secondary;

    .featured-article--desktop & { @include roboto($fs-18, 400, $lh-26); }
    .featured-article--mobile  & { @include roboto($fs-14, 400, $lh-20); }
  }
}

// ─── Mobile medium cards ──────────────────────────────────────────────────────
// Figma: two side-by-side, 276×156 each, gap ~16px; Roboto Slab Bold 18px lh=24
.medium-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;

  @include desktop { display: none; }
}

.medium-card {
  &__link { display: block; text-decoration: none; }

  // Figma: 276×156 (proportion), rounded=12
  &__img {
    width: 100%;
    height: 156px;
    object-fit: cover;
    border-radius: $radius-12;
    margin-bottom: 8px;
  }

  &__title {
    @include roboto-slab($fs-18, 700, $lh-24);
    color: $color-text-primary;
    transition: color 0.15s;

    &:hover { color: $color-primary; }
  }
}

// ─── Mobile news list ─────────────────────────────────────────────────────────
// Figma: thumb 120×75 rounded=8; time Roboto Regular 14px lh=22; title Roboto Slab Medium 14px lh=22
.mobile-news-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;

  @include desktop { display: none; }

  &__item { /* no extra margin */ }

  &__link {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    text-decoration: none;
  }

  &__thumb {
    // Figma: 120×75 rounded=8
    width: 120px;
    height: 75px;
    object-fit: cover;
    border-radius: $radius-8;
    flex-shrink: 0;
  }

  &__body { flex: 1; }

  &__time {
    display: block;
    @include roboto($fs-14, 400, $lh-22);
    color: $color-text-secondary;
    margin-bottom: 2px;
  }

  &__title {
    @include roboto-slab($fs-14, 500, $lh-22);
    color: $color-text-primary;
    transition: color 0.15s;

    &:hover { color: $color-primary; }
  }
}

// ─── "Сейчас обсуждают" section ───────────────────────────────────────────────
.discussed {
  // Desktop only; appears after featured article
  display: none;

  @include desktop {
    display: block;
    margin-top: 40px;
    border-top: 1px solid $color-divider-strong;
    padding-top: 40px;
  }

  // ─── Element: grid ──────────────────────────────────────────────
  // Figma: 2-column grid, card gap ≈ 40px horizontal, 24px vertical
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px $col-gap;
  }
}

.discussed-card {
  &__img-link { display: block; margin-bottom: 8px; }

  // Figma: 276×156 rounded=12
  &__img {
    width: 100%;
    height: 156px;
    object-fit: cover;
    border-radius: $radius-12;
  }

  // Figma: meta row flex
  &__meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  // Figma: Roboto Medium 12px #4b99f5 lh=20
  &__category {
    @include roboto($fs-12, 500, $lh-20);
    color: $color-primary;
  }

  // Figma: Roboto Regular 14px rgba(0,0,0,0.54) lh=20
  &__time {
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-secondary;
  }

  // Figma: 14px rgba(0,0,0,0.54)
  &__comments {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-secondary;
  }

  // Figma: Roboto Slab Bold 18px lh=24 w=276
  &__title {
    display: block;
    @include roboto-slab($fs-18, 700, $lh-24);
    color: $color-text-primary;
    transition: color 0.15s;

    &:hover { color: $color-primary; }
  }
}

// ─── Right column: sidebar cards ─────────────────────────────────────────────
.sidebar-cards {
  margin-bottom: 24px;
}

.sidebar-card {
  &__link { display: block; text-decoration: none; margin-bottom: 32px; }

  // Figma: 276×156 rounded=12
  &__img {
    width: 100%;
    height: 156px;
    object-fit: cover;
    border-radius: $radius-12;
    margin-bottom: 8px;
  }

  // Figma: Roboto Slab Bold 18px lh=24 w=276
  &__title {
    @include roboto-slab($fs-18, 700, $lh-24);
    color: $color-text-primary;
    transition: color 0.15s;

    &:hover { color: $color-primary; }
  }
}

// ─── Weather widget ───────────────────────────────────────────────────────────
// Figma: bg=#f6f6f6 rounded=12 h≈204 padding=12 16
.weather-widget {
  background: $color-widget-bg;
  border-radius: $radius-12;
  padding: 12px 16px;
  margin-bottom: 16px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  // Figma: Roboto Slab Bold 20px lh=24
  &__title {
    @include roboto-slab($fs-20, 700, $lh-24);
    color: $color-text-primary;
  }

  &__loc-icon { width: 24px; height: 24px; color: $color-primary; }

  &__sep {
    height: 1px;
    background: $color-divider-strong;
    margin-bottom: 12px;
  }

  &__main {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }

  // Figma: Roboto Light 48px lh=48 tracking=-0.5px
  &__temp {
    font-family: $font-primary;
    font-size: $fs-48;
    font-weight: 300;
    line-height: $lh-48;
    letter-spacing: -0.5px;
    color: $color-text-primary;
  }

  &__weather-icon { width: 48px; height: 48px; }

  &__forecast {
    display: flex;
    justify-content: space-between;
  }

  &__period {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex: 1;
  }

  // Figma: 14px rgba(0,0,0,0.4) tracking=0.25px
  &__period-label {
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-tertiary;
    letter-spacing: 0.25px;
    text-align: center;
  }

  &__period-icon { width: 24px; height: 24px; }

  // Figma: 14px Roboto Medium rgba(0,0,0,0.8) tracking=0.1px
  &__period-temp {
    @include roboto($fs-14, 500, $lh-20);
    color: $color-text-primary;
    letter-spacing: 0.1px;
    text-align: center;
  }
}

// ─── Currency widget ──────────────────────────────────────────────────────────
// Figma: bg=#f6f6f6 rounded=12 h≈204
.currency-widget {
  background: $color-widget-bg;
  border-radius: $radius-12;
  padding: 12px 16px;

  &__header { margin-bottom: 8px; }

  // Figma: Roboto Slab Bold 20px lh=24
  &__title {
    @include roboto-slab($fs-20, 700, $lh-24);
    color: $color-text-primary;
  }

  &__sep {
    height: 1px;
    background: $color-divider-strong;
    margin-bottom: 8px;
  }

  &__col-labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  // Figma: Roboto Regular 14px rgba(0,0,0,0.4) lh=20
  &__col-label {
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-tertiary;
  }

  &__rows { display: flex; flex-direction: column; gap: 4px; }

  &__row {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  // Figma: Roboto Medium 18px lh=20 rgba(0,0,0,0.8)
  &__currency {
    @include roboto($fs-18, 500, $lh-20);
    color: $color-text-primary;
    width: 40px;
    flex-shrink: 0;
  }

  // Figma: Roboto Regular 18px lh=20 rgba(0,0,0,0.7)
  &__rate {
    @include roboto($fs-18, 400, $lh-20);
    color: $color-text-70;
    width: 44px;
  }

  &__trend { width: 8px; height: 12px; flex-shrink: 0; }
}

// ─── Recent list ──────────────────────────────────────────────────────────────
.recent-list {
  &__item {
    padding: 20px 0;

    &:not(:last-child) { border-bottom: 1px solid $color-divider-strong; }
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  // Figma: Roboto Medium 12px #4b99f5 lh=20
  &__category {
    @include roboto($fs-12, 500, $lh-20);
    color: $color-primary;
  }

  // Figma: Roboto Regular 14px rgba(0,0,0,0.54) lh=20
  &__time {
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-secondary;
  }

  &__comments {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    @include roboto($fs-14, 400, $lh-20);
    color: $color-text-secondary;
  }

  // Figma: Roboto Slab Regular 14px lh=22 w=276
  &__title {
    display: block;
    @include roboto-slab($fs-14, 400, $lh-22);
    color: $color-text-primary;
    transition: color 0.15s;

    &:hover { color: $color-primary; }
  }
}
</style>
