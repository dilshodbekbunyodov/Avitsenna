<script setup lang="ts">
import {useFetchDiseases} from "~/modules/home/composables/useFetchHomeNews";

const diseases = await useFetchDiseases({type: 'diseases'})
</script>

<template>
  <section class="explore explore-radius">
    <div class="container">
      <h2 class="section__title" v-skeleton>
        {{ $td(diseases, 'title') }}
        <nuxt-link to="/kasalliklar">Hammasi <span>
          <svg width="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 8H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M9 3.5L13.5 8L9 12.5" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round"></path>
          </svg>
        </span>
        </nuxt-link>
      </h2>

      <div class="explore-new" v-skeleton>
        <div
            class="explore-new__item"
            v-for="(item, index) in diseases?.special_elements"
            :key="index"
        >
          <nuxt-link
              :to="`/${item.link}`"
          >
            <div class="explore-new__img">
              <img :src="'https://back.avitsenna.uz/uploads/' + item.image" alt="nutr">
            </div>
            <div class="explore-new__name">
              {{$td(item, 'title')}}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
