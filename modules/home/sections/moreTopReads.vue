<script setup lang="ts">
import {useFetchPopularArticles} from "~/modules/home/composables/useFetchHomeNews";

const params = ref({
  'filter[is_popular]': true,
  lang: 'uz'
})

const popular = await useFetchPopularArticles(params.value)
</script>

<template>
  <section class="top">
    <div class="container">
      <h2 class="section__title">
        Ommabop maqolalar
      </h2>
      <div class="top-content" v-skeleton>
        <div class="top-item"
             v-for="(item, index) in popular"
             :key="index"
        >
          <nuxt-link :to="`/${item.slug}`">
            <div class="top-item__img">
              <img :src="'https://back.avitsenna.uz/uploads/' + item.image_uz" alt="img">
            </div>
            <div class="top-item__name" v-skeleton="`10px:4px`">
              {{ $td(item, 'title') }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
