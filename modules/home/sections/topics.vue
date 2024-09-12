<script setup lang="ts">
import {useFetchSeasonal, useFetchTopics} from "@/modules/home/composables/useFetchHomeNews";

const topics = await useFetchTopics({type: 'topics'})
const seasonal = await useFetchSeasonal({type: 'seasonal'})
</script>

<template>
  <div>
    <section class="explore">
      <div class="container">
        <h2 class="section__title">
          {{ $td(topics, 'title') }}
        </h2>
        <div class="explore-new" v-skeleton>
          <div
              class="explore-new__item"
              v-for="(item, index) in topics?.special_elements"
              :key="index"
          >
            <nuxt-link
                :to="'/tag/' + item.link "
                class="explore-new__img"
            >
              <img
                  :src="'https://back.avitsenna.uz/uploads/' + item.image"
                  alt="nutr"
              />
            </nuxt-link>
            <div class="explore-new__name">
              {{ $td(item, 'title') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="season">
      <div class="container">
        <h2
            class="section__title"
        >
          {{ $td(seasonal, 'title') }}
        </h2>
        <div class="aptekauz-season" v-skeleton>
          <nuxt-link
              v-for="(value, index2) in seasonal.special_elements"
              :key="index2"
              :to="value.link"
              target="_blank"
              class="aptekauz-season__item"
          >
            <img
                :src="'https://back.avitsenna.uz/uploads/' + value.image"
                alt="img"
            />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>
