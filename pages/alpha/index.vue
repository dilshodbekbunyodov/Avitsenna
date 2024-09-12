<script setup lang="ts">
import {useFetchSearch} from "~/modules/home/composables/useFetchLetters";

const baseUrlFront = useRuntimeConfig().public.baseUrlFront

const route = useRoute()
const showBtn = ref<boolean>(true)
const load = ref<boolean>(false)
const search = ref<any[]>([])
const currentPage = ref<number>(1)

const data = await useFetchSearch({letter: route.query.letter})
search.value = data

const addPerPage = async () => {
  currentPage.value++;
  try {
    load.value = true
    const res = await useFetchSearch({
      letter: route.query.letter,
      page: currentPage.value,
    })

    if (Array.isArray(res)) {
      search.value.push(...res);
      load.value = false

      if (res && !res.length) showBtn.value = false
    }

  } catch (e) {
    load.value = false
    console.error("Error:", e);
  }
}

useHead({
  title: 'Qidirish - Avitsenna.uz',
  link: [{rel: "canonical",  href: baseUrlFront + route.path }],
})
</script>

<template>
  <div>

    <section class="chapter">
      <div class="container">
        <div class="chapter-main">
          <h1 class="chapter__title" v-skeleton="`10px:4px`">
            "{{ route.query.letter }}" Harf bo'yicha qidirish
          </h1>
        </div>
        <div class="chapter-wrap">
          <h2 class="section__title">
            MAQOLALAR
          </h2>

          <div class="content">
            <div class="content-main">

              <div class="alert" v-if="search && !search.length">
                Kechirasiz, bu so'rovda hech narsa topilmadi.
              </div>
              <div
                  class="news-item"
                  v-for="(item, index) in search"
                  :key="index"
              >
                <nuxt-link :to="`/${item.slug}`" v-skeleton>
                  <div class="news-item__img">
                    <img :src="'https://back.avitsenna.uz/uploads/' + item.image_uz"
                         alt="ico"/>
                  </div>
                  <div class="news-item__wrap">
                    <div class="news-item__name">
                      {{ $td(item, 'title') }}
                    </div>
                    <div class="news-item__desc" v-if="item.excerpt_uz">
                      {{item.excerpt_uz}}
                    </div>
                    <div class="news-item__desc" v-else v-html="item.content_uz">
                    </div>
                  </div>
                </nuxt-link>
              </div>

              <div class="show-more" v-if="search && search.length">
                <button class="btn" @click="addPerPage" v-if="showBtn">
                  {{ load ? "Yuklanmoqda..." : "Ko'proq ko'rsatish" }}
                </button>
              </div>

              <!-- БАННЕР РЕКЛАМНЫЙ  МОБИЛЬНЫЙ-->
              <div class="article-banner article-banner-mobile">
                <!--              <img src="/assets/img/offer.jpg" alt="img">-->
              </div>

            </div>
            <div class="content-side">
              <div class="advertise">
                <div class="advertise-content">
                  <!--                <img src="/assets/img/spotlight.png" alt="">-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
