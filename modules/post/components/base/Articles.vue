<script setup lang="ts">
defineProps({
  similarArticled: {
    type: Array,
    default: () =>[]
  }
})
</script>

<template>
  <div class="article-more">
    <div class="article-more__title">TEGISHLI MAQOLALAR</div>

    <div
        class="article-item"
        v-for="(item, index) in similarArticled"
        :key="index"
        v-skeleton="`10px:4px`"
    >
      <div class="article-item__img">
        <nuxt-link :to="`/${item.slug}`">
          <img
              :src="'https://back.avitsenna.uz/uploads/' + item.image_uz"
              alt="article"
          />
        </nuxt-link>
      </div>
      <div class="article-item__wrap">
        <div class="article-item__title">
          <nuxt-link :to="`/${item.slug}`">{{ item.title_uz }}</nuxt-link>
        </div>
        <div class="news-item__desc" v-if="item.excerpt_uz">
          {{item.excerpt_uz}}
        </div>
        <div class="news-item__desc" v-else v-html="item.content_uz">
        </div>
        <nuxt-link :to="`/${item.slug}`" class="article-item__link">
          DAVOMINI O'QISH
          <svg
              width="16px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M2.5 8H13.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M9 3.5L13.5 8L9 12.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
