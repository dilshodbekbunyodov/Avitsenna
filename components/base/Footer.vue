<script setup lang="ts">
import {useFetchFooterItems} from "~/modules/home/composables/useFetchHomeNews";

interface itemsInterface {
  title: string,
  link: string
}

interface bottomInterface {
  title: string,
  link: string
}

const footerItems = await useFetchFooterItems()

const bottomItems = ref<bottomInterface[]>([
  {
    title: 'Top.uz',
    link: 'https://top.uz/',
  },
  {
    title: 'Apteka.uz',
    link: 'https://apteka.uz',
  },
  {
    title: 'Med24.uz',
    link: 'https://med24.uz/',
  },
])

const openTgBot = () => {
  window.open('https://t.me/med24uz_botconst', '_blank')
}
</script>

<template>
  <div>
    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-top__nav">
            <div class="footer-top__logo">
              <nuxt-link to="/">Avitsenna.uz</nuxt-link>
            </div>
            <ul class="footer-top__follow">
              <li>
                <nuxt-link to="https://www.facebook.com/avitsennauz" target="_blank">
                  <svg width="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z"
                        fill="currentColor"></path>
                  </svg>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="https://t.me/med24uz_bot" target="_blank">
                  <svg xmlns="//www.w3.org/2000/svg" xmlns:xlink="//www.w3.org/1999/xlink" width="20px" height="20px"
                       viewBox="0 0 20 20" version="1.1">

                    <path
                        d="M 18.40625 6.109375 C 18.890625 7.257812 19.148438 8.445312 19.148438 9.703125 C 19.148438 10.964844 18.890625 12.148438 18.40625 13.296875 C 17.925781 14.445312 17.257812 15.40625 16.445312 16.257812 C 15.628906 17.074219 14.628906 17.742188 13.480469 18.222656 C 12.332031 18.703125 11.148438 18.964844 9.890625 18.964844 C 8.628906 18.964844 7.445312 18.703125 6.296875 18.222656 C 5.148438 17.742188 4.183594 17.074219 3.332031 16.257812 C 2.519531 15.445312 1.851562 14.445312 1.371094 13.296875 C 0.890625 12.148438 0.628906 10.964844 0.628906 9.703125 C 0.628906 8.445312 0.890625 7.257812 1.371094 6.109375 C 1.851562 4.964844 2.519531 4 3.332031 3.148438 C 4.148438 2.332031 5.148438 1.667969 6.296875 1.183594 C 7.445312 0.703125 8.628906 0.445312 9.890625 0.445312 C 11.148438 0.445312 12.332031 0.703125 13.480469 1.183594 C 14.628906 1.667969 15.59375 2.332031 16.445312 3.148438 C 17.257812 4 17.890625 5 18.40625 6.109375 Z M 12.890625 13.964844 L 14.40625 6.816406 C 14.480469 6.519531 14.445312 6.296875 14.296875 6.148438 C 14.148438 6 14 6 13.777344 6.074219 L 4.851562 9.519531 C 4.667969 9.59375 4.519531 9.667969 4.445312 9.777344 C 4.371094 9.890625 4.371094 9.964844 4.40625 10.035156 C 4.445312 10.109375 4.554688 10.183594 4.742188 10.222656 L 7.035156 10.925781 L 12.332031 7.59375 C 12.480469 7.480469 12.59375 7.480469 12.667969 7.519531 C 12.703125 7.554688 12.703125 7.59375 12.628906 7.667969 L 8.332031 11.59375 L 8.148438 13.964844 C 8.296875 13.964844 8.445312 13.890625 8.628906 13.742188 L 9.742188 12.667969 L 12.035156 14.371094 C 12.519531 14.628906 12.777344 14.480469 12.890625 13.964844 Z M 12.890625 13.964844 "></path>

                  </svg>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer-top__wrap">
            <div class="footer-top__left">
              <div class="footer-top__title">
                Telegram kanalimizga obuna bo'ling
              </div>
              <div class="footer-top__text">
                Foydali maqolalarni kuzatib boring!
              </div>
              <div class="footer-top__form">
                <button class="btn" style="display:flex;" type="submit">
                  <img src="/assets/img/tg.svg" alt="">
                  A'zo bo'lish
                </button>
              </div>
            </div>
            <div class="footer-top__right">
              <ul class="footer-top__menu">
                <li>
                  <nuxt-link class="tw-font-bold">
                    Biz haqimizda
                  </nuxt-link>
                </li>
                <li
                    v-for="(value, index) in footerItems"
                    :key="index"
                >
                  <nuxt-link class="tw-font-bold" :to="`/rubric/${value.slug}`" v-skeleton="`10px:4px`">
                    {{ $td(value, 'name') }}
                  </nuxt-link>
                </li>
              </ul>
              <ul class="footer-top__menu">
                <li>
                  <p>
                    Sayt materiallaridan to‘liq yoki qisman foydalanilganda veb-sayt manzili ko‘rsatilishi shart! Barcha
                    huquqlar amaldagi qonunchilikka binoan himoyalangan. Saytdagi barcha materiallar ma’lumot uchun
                    qo‘yilgan.
                    Agarda sizda jiddiyroq savol paydo bo‘lsa, albatta shifokorga murojaat qiling!
                  </p>
                </li>
              </ul>
            </div>

            <div class="footer-top__mobi">
              Sayt materiallaridan to‘liq yoki qisman foydalanilganda veb-sayt manzili ko‘rsatilishi shart! Barcha
              huquqlar amaldagi qonunchilikka binoan himoyalangan. Saytdagi barcha materiallar ma’lumot uchun qo‘yilgan.
              Agarda sizda jiddiyroq savol paydo bo‘lsa, albatta shifokorga murojaat qiling!
            </div>

          </div>
        </div>
      </div>

      <div class="footer-bot">
        <div class="container">
          <div class="footer-bot__logo">
            <nuxt-link to="/"> Avitsenna.uz</nuxt-link>
          </div>
          <div class="footer-bot__menu">
            <div class="footer-bot__wrap">
              <div>
                <span>HAMKORLAR </span>
                <nuxt-link
                    v-for="(bottom ,index) in bottomItems"
                    :key="index"
                    :to="bottom.link"
                    target="_blank"
                >
                  {{ bottom.title }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
