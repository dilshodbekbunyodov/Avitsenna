<script setup lang="ts">
import {useFetchBeautyHealth, useFetchVitamins} from "~/modules/home/composables/useFetchHomeNews";

const beautyHealth = await useFetchBeautyHealth({type: 'beauty_health'})
const vitamins = await useFetchVitamins({type: 'rubric_article'})
</script>

<template>
  <div>
    <section class="season" v-skeleton>
      <div class="container" >
        <h2 class="section__title">
          {{ $td(beautyHealth, 'title') }}
        </h2>
        <div class="season-avitsenna-carousel owl-carousel">
          <Swiper
              :slides-per-view="4"
              :breakpoints="{
                    320: {
                        slidesPerView: 1.5,
                    },

                    640: {
                        slidesPerView: 3,
                    }
                }"
              :modules="[SwiperNavigation]"
          >

            <SwiperSlide
                v-for="(item, index) in beautyHealth.special_elements"
                :key="index"
            >
              <nuxt-link
                  :to="item.link"
                  target="_blank"
                  class="aptekauz-shop__item"
              >
                <div class="aptekauz-shop__img">
                  <img :src="'https://back.avitsenna.uz/uploads/' + item.image" alt="carousel"/>
                </div>
                <div class="aptekauz-shop__wrap">
                  <div class="aptekauz-shop__name">
                    {{ $td(item, 'title') }}
                  </div>
                  <div class="aptekauz-shop__price">
                    <span>Aptekadagi narxlar</span>
                    <div>{{ item.price }} so'mdan</div>
                  </div>
                  <div class="aptekauz-shop__basket">
                    {{ $td(item, 'button_title') }}
                  </div>
                </div>
              </nuxt-link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <section class="season" v-skeleton>
      <div class="container">
        <h2 class="section__title">
          {{ $td(vitamins, 'title') }}
        </h2>
        <div class="season-avitsenna-carousel">
          <Swiper
              :slides-per-view="4"
              :breakpoints="{
                    320: {
                        slidesPerView: 1.5,
                    },

                    640: {
                        slidesPerView: 3,
                    }
                }"
              :modules="[SwiperNavigation]"
          >
            <SwiperSlide
                v-for="(value, index2) in vitamins.special_elements"
                :key="index2"
            >
              <nuxt-link
                  :to="value.link"
                  target="_blank"
                  class="aptekauz-shop__item"
              >
                <div class="aptekauz-shop__img">
                  <img v-skeleton :src="'https://back.avitsenna.uz/uploads/' + value.image" alt="carousel">
                </div>
                <div class="aptekauz-shop__wrap">
                  <div class="aptekauz-shop__name">
                    {{$td(value, 'title')}}
                  </div>
                  <div class="aptekauz-shop__price">
                    <span>Aptekadagi narxlar</span>
                    <div> {{value.price}} so'mdan</div>
                  </div>
                  <div class="aptekauz-shop__basket">
                    {{$td(value, 'button_title')}}
                  </div>
                </div>
              </nuxt-link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.swiper-slide {
  width: 255px !important;
  margin-right: 20px !important;
}
</style>
