<script setup lang="ts">
import {useFetchFooterItemsSlug} from "~/modules/home/composables/useFetchHomeNews";

const route = useRoute()

const itemValues = await useFetchFooterItemsSlug(route.params.slug)

useHead({
  title: itemValues.name_uz
})
</script>

<template>
  <div class="article-text">
    <h2 class="contact__title" v-skeleton="`10px:4px`">{{ itemValues.name_uz }}</h2>
    <div v-html="itemValues.content_uz" v-skeleton="`10px:4px`"/>
  </div>
</template>

<style scoped>
.contact__title {
  font-family: 'Proxima Nova Bold', sans-serif;
  font-size: 38px;
  line-height: 42px;
  margin-top: 45px;
  margin-bottom: 15px;
}
.article-text h2 {
  font-family: 'Proxima Nova Bold', sans-serif;
  font-size: 38px;
  line-height: 42px;
  margin-top: 45px;
  margin-bottom: 15px;
}
</style>