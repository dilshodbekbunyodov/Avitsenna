<script setup lang="ts">
import {useFetchArticles} from "~/modules/home/composables/useFetchHomeNews";

const params = ref({
  sort: 'published_at',
  lang: 'uz',
  per_page: 4,
})

const articles = await useFetchArticles(params.value)
</script>

<template>
  <section class="news">
    <div class="container">
      <h2 class="section__title">
        Yangi maqolalar
      </h2>
      <div class="news-content" v-skeleton>
        <div
            class="news-item"
            v-for="(item, index) in articles"
            :key="index"
        >
          <nuxt-link
              :to="`/${item.slug}`"
          >
            <div class="news-item__img">
              <img :src="'https://back.avitsenna.uz/uploads/' + item.image_uz" alt="ico">
            </div>
            <div class="news-item__wrap">
              <div class="news-item__name">
                {{ $td(item, 'title') }}
              </div>
              <div class="news-item__desc">
                <p>
                  {{ $td(item, 'excerpt') }}
                </p>
              </div>
              <div class="news-item__more btn">
                ko'proq o'qish
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
