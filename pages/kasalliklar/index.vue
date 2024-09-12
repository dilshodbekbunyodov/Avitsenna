<script setup lang="ts">
import {useFetchLetters} from "~/modules/home/composables/useFetchLetters";

const letters = await useFetchLetters()

useHead({
  title: 'Kasalliklar',
})
</script>

<template>
  <div>
    <section class="offer">
      <div class="offer-bg">
        <img src="/assets/img/dna-gff0b_1920.jpg" alt="offer">
        <h1 class="offer-bg__title">
          Kasalliklar
        </h1>
      </div>
    </section>

    <section class="alphabet">
      <div class="alphabet-letters">
        <div class="container">
          <div class="alphabet-letters__list" v-skeleton="`10px:4px`">
            <template
                v-for="(val, ins) in letters"
                :key="ins"
            >
              <nuxt-link
                  :to="{ path: `/alpha/`, query: { letter: val[0].first_letter } }"
              >
                {{ val && val[0].first_letter }}
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- ALPHABET -->

    <section class="alphabet">
      <div class="topics">
        <div class="container">
          <div class="content">
            <div class="content-main">
              <div
                  class="topics-item"
                  id="a"
                  v-for="(item, index) in letters"
                  :key="index"
                  v-skeleton="`10px:4px`"
              >
                <div class="topics-item__title">
                  <h3>{{ item && item[0].first_letter }}</h3>
                  <hr>
                </div>
                <ul class="topics-item__list">
                  <li
                      v-for="(letter, index2) in item"
                      :key="index2"
                  >
                    <nuxt-link :to="`/category/${letter.slug}`">
                      {{ $td(letter, 'name') }}
                    </nuxt-link>
                  </li>
                </ul>
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

    <!-- БАННЕР РЕКЛАМНЫЙ  МОБИЛЬНЫЙ-->
    <div class="article-banner article-banner-mobile">
      <!--    <img src="/assets/img/offer.jpg" alt="img">-->
    </div>

  </div>
</template>
