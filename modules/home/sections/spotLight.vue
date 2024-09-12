<script setup lang="ts">
import {useFetchNoteWorthy} from "~/modules/home/composables/useFetchHomeNews";

const noteWorthy = await useFetchNoteWorthy({type: 'noteworthy'})
</script>

<template>
  <section class="explore">
    <div class="container">
      <h2 class="section__title" v-skeleton>
        {{$td(noteWorthy, 'title')}}
      </h2>
      <div class="explore-content">
        <div
            v-for="(item, index) in noteWorthy.special_elements"
            :key="index"
            class="explore-item"
        >
          <nuxt-link :to="item.link" target="_blank">
            <img :src="'https://back.avitsenna.uz/uploads/' + item.image" alt="nutr"/>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

