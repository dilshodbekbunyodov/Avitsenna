<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";
import {ref} from 'vue';

const route = useRoute()
const router = useRouter();
const search = ref<boolean>(false);
const value = ref(null)
const activeMenu = ref(false)

const searchValue = () => {
  router.push({path: '/qidiruv/', query: {q: value.value}});
  search.value = false
  value.value = null
};

watch(route, async (newValue) => {
  if (newValue) {
    const elements = document.querySelectorAll('.mega-sub-menu');

    elements.forEach(element => {
      element.style.visibility = 'hidden';
      element.style.opacity = '0';
      element.style.display = 'none';
    });

    setTimeout(() => {
      elements.forEach(element => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.display = 'block';
      });
    }, 1000);
  }
});
</script>

<template>
  <div @click="search = false">
    <header class="header">
      <div class="container">
        <div class="header-mobi" :class="activeMenu ? 'header-mobi__open' : ''" @click="activeMenu = !activeMenu">
          <div class="header-mobi__wrap">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.9842 17.6825L15.8675 14.575C16.8731 13.2939 17.4187 11.7119 17.4167 10.0833C17.4167 8.63294 16.9866 7.21512 16.1808 6.00915C15.375 4.80319 14.2297 3.86326 12.8897 3.30822C11.5497 2.75318 10.0752 2.60795 8.65267 2.89091C7.23015 3.17387 5.92347 3.8723 4.89789 4.89789C3.8723 5.92347 3.17387 7.23015 2.89091 8.65267C2.60795 10.0752 2.75318 11.5497 3.30822 12.8897C3.86326 14.2297 4.80319 15.375 6.00915 16.1808C7.21512 16.9866 8.63294 17.4167 10.0833 17.4167C11.7119 17.4187 13.2939 16.8731 14.575 15.8675L17.6825 18.9842C17.7677 19.0701 17.8691 19.1383 17.9808 19.1848C18.0925 19.2314 18.2123 19.2553 18.3333 19.2553C18.4543 19.2553 18.5742 19.2314 18.6859 19.1848C18.7976 19.1383 18.899 19.0701 18.9842 18.9842C19.0701 18.899 19.1383 18.7976 19.1848 18.6859C19.2314 18.5742 19.2553 18.4543 19.2553 18.3333C19.2553 18.2123 19.2314 18.0925 19.1848 17.9808C19.1383 17.8691 19.0701 17.7677 18.9842 17.6825ZM4.58334 10.0833C4.58334 8.99554 4.90591 7.93217 5.51025 7.0277C6.1146 6.12323 6.97358 5.41828 7.97858 5.002C8.98357 4.58572 10.0894 4.4768 11.1563 4.68902C12.2232 4.90124 13.2032 5.42506 13.9724 6.19425C14.7416 6.96344 15.2654 7.94344 15.4777 9.01034C15.6899 10.0772 15.581 11.1831 15.1647 12.1881C14.7484 13.1931 14.0434 14.0521 13.139 14.6564C12.2345 15.2608 11.1711 15.5833 10.0833 15.5833C8.62465 15.5833 7.2257 15.0039 6.19425 13.9724C5.1628 12.941 4.58334 11.542 4.58334 10.0833Z"
                fill="currentColor"></path>
          </svg>
        </div>


        <nav class="header-nav">
          <div class="header__logo">
            <nuxt-link to="/"> Avitsenna.uz</nuxt-link>
          </div>
          <div id="mega-menu-wrap-max_mega_menu_1" class="mega-menu-wrap">

            <ul id="mega-menu-max_mega_menu_1" class="mega-menu max-mega-menu mega-menu-horizontal">
              <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-menu-item-7659"
                  id="mega-menu-item-7659">
                <!--                <div class="menu__arrow" style="left: 476px;"></div>-->
                <nuxt-link to="/kasalliklar" class="mega-menu-link"
                           aria-haspopup="true" aria-expanded="false" tabindex="0"><strong>Kasalliklar</strong>
                  <svg
                      xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path fill="currentColor"
                          d="M27.963 6.75L30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z">
                    </path>
                  </svg>
                  <span class="mega-indicator" data-has-click-event="true"></span></nuxt-link>
                <ul class="mega-sub-menu" style="padding-left: 204.5px;  padding-right: 204.5px;">
                  <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-disable-link mega-4-columns mega-menu-columns-4-of-4 mega-menu-item-13222"
                      id="mega-menu-item-13222"><a class="mega-menu-link" tabindex="0">Maqolalar<span
                      class="view-all" @click="$router.push('/kasalliklar')">
                                            Hammasini korish
                                            <span>
                                                <svg width="16px" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.5 8H13.5" stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                    <path d="M9 3.5L13.5 8L9 12.5" stroke="currentColor"
                                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </span></a>
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13130"
                          id="mega-menu-item-13130">
                        <nuxt-link :to="`/category/allergologiya`" class="mega-menu-link">Allergologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13223"
                          id="mega-menu-item-13223">
                        <nuxt-link class="mega-menu-link" :to="`/category/andrologiya`">Andrologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13224"
                          id="mega-menu-item-13224">
                        <nuxt-link :to="`/category/dermatologiya`" class="mega-menu-link">Dermatologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13133"
                          id="mega-menu-item-13133">
                        <nuxt-link class="mega-menu-link" :to="`/category/endokrinologiya`">Endokrinologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13225"
                          id="mega-menu-item-13225">
                        <nuxt-link class="mega-menu-link" :to="`/category/flebologiya`">Flebologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13226"
                          id="mega-menu-item-13226">
                        <nuxt-link class="mega-menu-link" :to="`/category/gastroenterologiya`">Gastroenterologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13227"
                          id="mega-menu-item-13227">
                        <nuxt-link class="mega-menu-link" :to="`/category/gepatologiya`">Gepatologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13228"
                          id="mega-menu-item-13228">
                        <nuxt-link class="mega-menu-link" :to="`/category/ginekologiya`">Ginekologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13229"
                          id="mega-menu-item-13229">
                        <nuxt-link class="mega-menu-link" :to="`/category/kardiologiya`">Kardiologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13230"
                          id="mega-menu-item-13230">
                        <nuxt-link class="mega-menu-link" :to="`/category/kosmetologiya`">Kosmetologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13231"
                          id="mega-menu-item-13231">
                        <nuxt-link class="mega-menu-link" :to="`/category/logopediya`">Logopediya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13232"
                          id="mega-menu-item-13232">
                        <nuxt-link class="mega-menu-link" :to="`/category/mammologiya`">Mammologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13233"
                          id="mega-menu-item-13233">
                        <nuxt-link
                            class="mega-menu-link" :to="`/category/narkologiya`">Narkologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13234"
                          id="mega-menu-item-13234">
                        <nuxt-link class="mega-menu-link" :to="`/category/nefrologiya`">Nefrologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13235"
                          id="mega-menu-item-13235">
                        <nuxt-link class="mega-menu-link" :to="`/category/nevropatologiya`">Nevropatologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13236"
                          id="mega-menu-item-13236">
                        <nuxt-link class="mega-menu-link" :to="`/category/oftalmologiya`">Oftalmologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13237"
                          id="mega-menu-item-13237">
                        <nuxt-link class="mega-menu-link" :to="`/category/onkologiya`">Onkologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13238"
                          id="mega-menu-item-13238">
                        <nuxt-link class="mega-menu-link" :to="`/category/otolaringologiya`">Otolaringologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13239"
                          id="mega-menu-item-13239">
                        <nuxt-link class="mega-menu-link" :to="`/category/pediatriya`">Pediatriya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-has-description mega-menu-item-13240"
                          id="mega-menu-item-13240">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/plastik-jarrohlik`"
                        ><span
                            class="mega-description-group"><span class="mega-menu-title">Plastik
                                                        jarrohlik</span><span class="mega-menu-description">Bu rukn
                                                        orqali plastik jarroh Alohanov Laziz Bahodirovichning tibbiyotga
                                                        oid maqolalari bilan tanishishingiz mumkin.</span></span>
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13241"
                          id="mega-menu-item-13241">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/proktologiya`"
                        >Proktologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13242"
                          id="mega-menu-item-13242">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/psixologiya`">Psixologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13243"
                          id="mega-menu-item-13243">

                        <nuxt-link class="mega-menu-link" :to="`/category/pulmonologiya`">Pulmonologiya</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13244"
                          id="mega-menu-item-13244">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/seksologiya`"
                        >Seksologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13245"
                          id="mega-menu-item-13245">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/trixologiya`"
                        >Trixologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13246"
                          id="mega-menu-item-13246">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/urologiya`"
                        >Urologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13247"
                          id="mega-menu-item-13247">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/venerologiya`"
                        >Venerologiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13248"
                          id="mega-menu-item-13248">
                        <nuxt-link class="mega-menu-link"
                                   :to="`/category/xirurgiya`">Xirurgiya
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-menu-item-13139"
                  id="mega-menu-item-13139">
                <!--                <div class="menu__arrow" style="left: 630px;"></div>-->
                <nuxt-link class="mega-menu-link" to="/category/barcha-maqolalar">
                  <strong>Maqolalar</strong>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path fill="currentColor"
                          d="M27.963 6.75L30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"></path>
                  </svg>
                  <span class="mega-indicator" data-has-click-event="true"></span>
                </nuxt-link>
                <ul class="mega-sub-menu" style="padding-left: 204.5px;  padding-right: 204.5px;">
                  <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-disable-link mega-menu-columns-1-of-4 mega-menu-item-13141"
                      id="mega-menu-item-13141">
                    <a class="mega-menu-link" tabindex="0">Asosiy <span class="mega-indicator"
                                                                        data-has-click-event="true"></span>
                    </a>
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13197"
                          id="mega-menu-item-13197">
                        <nuxt-link class="mega-menu-link" :to="'/category/bolalar-salomatligi'">Bolalar</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13199"
                          id="mega-menu-item-13199">
                        <nuxt-link class="mega-menu-link" :to="'/category/ayollar-uchun'">Ayollar</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13198"
                          id="mega-menu-item-13198">
                        <nuxt-link class="mega-menu-link" :to="'/category/erkaklar-uchun'">Erkaklar</nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-category mega-menu-item-13200"
                          id="mega-menu-item-13200">
                        <nuxt-link class="mega-menu-link" :to="'/category/keksalar-salomatligi'">Keksalar</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-disable-link mega-3-columns mega-menu-columns-3-of-4 mega-menu-item-13140"
                      id="mega-menu-item-13140">
                    <a class="mega-menu-link" tabindex="0">Ommabop <span class="mega-indicator"
                                                                         data-has-click-event="true"></span>
                    </a>
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13251"
                          id="mega-menu-item-13251">
                        <nuxt-link class="mega-menu-link" :to="'/tag/allergiya'">
                          Allergiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13252"
                          id="mega-menu-item-13252">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/asab-kasalliklari'">Asab
                          kasalliklari
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13253"
                          id="mega-menu-item-13253">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/bogim-muammosi'">Bo’g’im
                          kasalliklari
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13254"
                          id="mega-menu-item-13254">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/buyrak-kasalliklari'">Buyrak
                          kasalliklari
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13255"
                          id="mega-menu-item-13255">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/chekishni-tashlash'">Chekishni
                          tashlash
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13256"
                          id="mega-menu-item-13256">
                        <nuxt-link class="mega-menu-link" :to="'/tag/emlash'">
                          Emlash
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13257"
                          id="mega-menu-item-13257">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/epilepsiya'">Epilepsiya
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13258"
                          id="mega-menu-item-13258">
                        <nuxt-link class="mega-menu-link" :to="'/tag/gripp'">
                          Gripp
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13259"
                          id="mega-menu-item-13259">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/homiladorlik'">Homiladorlik
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13260"
                          id="mega-menu-item-13260">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/ich-qotishi'">Ich qotishi
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13261"
                          id="mega-menu-item-13261">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/jinsiy-hayot'">Jinsiy hayot
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13262"
                          id="mega-menu-item-13262">
                        <nuxt-link class="mega-menu-link" :to="'/tag/kamqonlik'">
                          Kamqonlik
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13263"
                          id="mega-menu-item-13263">
                        <nuxt-link class="mega-menu-link" :to="'/tag/ozish'">
                          Ozish
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13264"
                          id="mega-menu-item-13264">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/qandli-diabet'">Qandli diabet
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13265"
                          id="mega-menu-item-13265">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/qon-bosimi'">Qon bosimi
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13266"
                          id="mega-menu-item-13266">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/soch-parvarishi'">Soch parvarishi
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13267"
                          id="mega-menu-item-13267">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/teri-kasalliklari'">Teri
                          kasalliklari
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13268"
                          id="mega-menu-item-13268">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/umurtqa-kasalliklari'">Umurtqa
                          kasalliklari
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13269"
                          id="mega-menu-item-13269">
                        <nuxt-link class="mega-menu-link" :to="'/tag/uyqu'">
                          Uyqu
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13270"
                          id="mega-menu-item-13270">
                        <nuxt-link class="mega-menu-link" :to="'/tag/varikoz'">
                          Varikoz
                        </nuxt-link>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13271"
                          id="mega-menu-item-13271">
                        <nuxt-link class="mega-menu-link"
                                   :to="'/tag/yuz-parvarishi'">Yuz parvarishi
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-disable-link mega-menu-item-13155"
                  id="mega-menu-item-13155">
                <!--                <div class="menu__arrow" style="left: 700px;"></div>-->
                <a class="mega-menu-link" tabindex="0" aria-haspopup="true" aria-expanded="false" role="button">
                  <strong>Ma'lumot</strong>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path fill="currentColor"
                          d="M27.963 6.75L30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"></path>
                  </svg>
                  <span class="mega-indicator" data-has-click-event="true"></span>
                </a>
                <ul class="mega-sub-menu" style="padding-left: 204.5px;
  padding-right: 204.5px;">
                  <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-4 mega-menu-item-13156"
                      id="mega-menu-item-13156">
                    <a target="_blank" class="mega-menu-link"
                       href="https://med24.uz/uz/kliniki?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Klinikalar
                      <span class="mega-indicator" data-has-click-event="true"></span>
                    </a>
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13169"
                          id="mega-menu-item-13169">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/klinika/medion?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Medion</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13172"
                          id="mega-menu-item-13172">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/klinika/darmon-servis?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Darmon
                          Servis</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13272"
                          id="mega-menu-item-13272">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/klinika/doctor-d?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Doctor
                          D</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13273"
                          id="mega-menu-item-13273">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/klinika/akfa-medline?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Akfa
                          Medline</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13274"
                          id="mega-menu-item-13274">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/klinika/ayol-care-tsentr-zhenskogo-zdorovya?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Ayol
                          Care</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13275"
                          id="mega-menu-item-13275">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/klinika/star-med-center?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Star
                          Med Center</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13175"
                          id="mega-menu-item-13175">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/kliniki?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">
                          <strong>Hammasi</strong>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-4 mega-menu-item-13276"
                      id="mega-menu-item-13276">
                    <a target="_blank" class="mega-menu-link"
                       href="https://med24.uz/uz/doctors?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Shifokorlar
                      <span class="mega-indicator" data-has-click-event="true"></span>
                    </a>
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13277"
                          id="mega-menu-item-13277">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/doctors/nevropatolog?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Nevropatolog</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13278"
                          id="mega-menu-item-13278">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/doctors/gastroenterolog?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Gastroenterolog</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13279"
                          id="mega-menu-item-13279">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/doctors/ginekolog?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Ginekolog</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13280"
                          id="mega-menu-item-13280">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/doctors/endokrinolog?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Endokrinolog</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13281"
                          id="mega-menu-item-13281">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/doctors/proktolog?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Proktolog</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13282"
                          id="mega-menu-item-13282">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/doctors/psikhiatr?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Psixiatr</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13283"
                          id="mega-menu-item-13283">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/doctors?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">
                          <strong>Hammasi</strong>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-4 mega-menu-item-13284"
                      id="mega-menu-item-13284">
                    <a target="_blank" class="mega-menu-link"
                       href="https://apteka.uz/uz/?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Dorilar
                      <span class="mega-indicator" data-has-click-event="true"></span>
                    </a>
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13285"
                          id="mega-menu-item-13285">
                        <a target="_blank" class="mega-menu-link"
                           href="https://apteka.uz/uz/products/antibiotiki?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Antibiotiklar</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13286"
                          id="mega-menu-item-13286">
                        <a target="_blank" class="mega-menu-link"
                           href="https://apteka.uz/uz/products/obezbolivayushchie?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Og’riq
                          qoldiruvchi</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13287"
                          id="mega-menu-item-13287">
                        <a target="_blank" class="mega-menu-link"
                           href="https://apteka.uz/uz/products/protivoallergicheskie?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Antiallergik</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13288"
                          id="mega-menu-item-13288">
                        <a target="_blank" class="mega-menu-link"
                           href="https://apteka.uz/uz/products/vitaminy?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Vitaminlar</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13289"
                          id="mega-menu-item-13289">
                        <a target="_blank" class="mega-menu-link"
                           href="https://apteka.uz/uz/products/protivovospalitelnye?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Yallig’lanishga
                          qarshi</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13290"
                          id="mega-menu-item-13290">
                        <a target="_blank" class="mega-menu-link"
                           href="https://apteka.uz/uz/products/serdechno-sosudistye-preparaty?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Yurak-qon
                          tomir</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13291"
                          id="mega-menu-item-13291">
                        <a target="_blank" class="mega-menu-link"
                           href="https://apteka.uz/uz/?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">
                          <strong>Hammasi</strong>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-4 mega-menu-item-13292"
                      id="mega-menu-item-13292">
                    <a target="_blank" class="mega-menu-link"
                       href="https://med24.uz/uz/diagnostika?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Xizmatlar
                      <span class="mega-indicator" data-has-click-event="true"></span>
                    </a>
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13299"
                          id="mega-menu-item-13299">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/diagnostika/mrt?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">MRT</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13293"
                          id="mega-menu-item-13293">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/diagnostika/mrt?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">EKO
                          (EKU)</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13294"
                          id="mega-menu-item-13294">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/uslugi/analizy?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Analizlar</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13295"
                          id="mega-menu-item-13295">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/uslugi/stomatologiya/implantatsiya-zubov?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Tish
                          implantatsiyasi</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13296"
                          id="mega-menu-item-13296">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/diagnostika/uzi?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">UZI</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13297"
                          id="mega-menu-item-13297">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/uslugi/analizy/testy-na-covid-19?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">Koronovirusga
                          testlar</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-13298"
                          id="mega-menu-item-13298">
                        <a target="_blank" class="mega-menu-link"
                           href="https://med24.uz/uz/diagnostika?utm_source=avitsenna&amp;utm_medium=referral&amp;utm_campaign=menu">
                          <strong>Hammasi</strong>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div class="header-search">
          <div class="header-search__subs">
            <div @click.stop="search = !search" class="js-open-search header-subscribe-link">Izlash</div>
          </div>
          <div class="header-search__ico">
            <svg @click.stop="search = !search" width="22" height="22" viewBox="0 0 22 22" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M18.9842 17.6825L15.8675 14.575C16.8731 13.2939 17.4187 11.7119 17.4167 10.0833C17.4167 8.63294 16.9866 7.21512 16.1808 6.00915C15.375 4.80319 14.2297 3.86326 12.8897 3.30822C11.5497 2.75318 10.0752 2.60795 8.65267 2.89091C7.23015 3.17387 5.92347 3.8723 4.89789 4.89789C3.8723 5.92347 3.17387 7.23015 2.89091 8.65267C2.60795 10.0752 2.75318 11.5497 3.30822 12.8897C3.86326 14.2297 4.80319 15.375 6.00915 16.1808C7.21512 16.9866 8.63294 17.4167 10.0833 17.4167C11.7119 17.4187 13.2939 16.8731 14.575 15.8675L17.6825 18.9842C17.7677 19.0701 17.8691 19.1383 17.9808 19.1848C18.0925 19.2314 18.2123 19.2553 18.3333 19.2553C18.4543 19.2553 18.5742 19.2314 18.6859 19.1848C18.7976 19.1383 18.899 19.0701 18.9842 18.9842C19.0701 18.899 19.1383 18.7976 19.1848 18.6859C19.2314 18.5742 19.2553 18.4543 19.2553 18.3333C19.2553 18.2123 19.2314 18.0925 19.1848 17.9808C19.1383 17.8691 19.0701 17.7677 18.9842 17.6825ZM4.58334 10.0833C4.58334 8.99554 4.90591 7.93217 5.51025 7.0277C6.1146 6.12323 6.97358 5.41828 7.97858 5.002C8.98357 4.58572 10.0894 4.4768 11.1563 4.68902C12.2232 4.90124 13.2032 5.42506 13.9724 6.19425C14.7416 6.96344 15.2654 7.94344 15.4777 9.01034C15.6899 10.0772 15.581 11.1831 15.1647 12.1881C14.7484 13.1931 14.0434 14.0521 13.139 14.6564C12.2345 15.2608 11.1711 15.5833 10.0833 15.5833C8.62465 15.5833 7.2257 15.0039 6.19425 13.9724C5.1628 12.941 4.58334 11.542 4.58334 10.0833Z"
                  fill="currentColor"></path>
            </svg>
          </div>
          <div class="header-search__input">
            <div>
              <div class="header-search__ico-active">
                <svg v-if="search" width="22" height="22" viewBox="0 0 22 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M18.9842 17.6825L15.8675 14.575C16.8731 13.2939 17.4187 11.7119 17.4167 10.0833C17.4167 8.63294 16.9866 7.21512 16.1808 6.00915C15.375 4.80319 14.2297 3.86326 12.8897 3.30822C11.5497 2.75318 10.0752 2.60795 8.65267 2.89091C7.23015 3.17387 5.92347 3.8723 4.89789 4.89789C3.8723 5.92347 3.17387 7.23015 2.89091 8.65267C2.60795 10.0752 2.75318 11.5497 3.30822 12.8897C3.86326 14.2297 4.80319 15.375 6.00915 16.1808C7.21512 16.9866 8.63294 17.4167 10.0833 17.4167C11.7119 17.4187 13.2939 16.8731 14.575 15.8675L17.6825 18.9842C17.7677 19.0701 17.8691 19.1383 17.9808 19.1848C18.0925 19.2314 18.2123 19.2553 18.3333 19.2553C18.4543 19.2553 18.5742 19.2314 18.6859 19.1848C18.7976 19.1383 18.899 19.0701 18.9842 18.9842C19.0701 18.899 19.1383 18.7976 19.1848 18.6859C19.2314 18.5742 19.2553 18.4543 19.2553 18.3333C19.2553 18.2123 19.2314 18.0925 19.1848 17.9808C19.1383 17.8691 19.0701 17.7677 18.9842 17.6825ZM4.58334 10.0833C4.58334 8.99554 4.90591 7.93217 5.51025 7.0277C6.1146 6.12323 6.97358 5.41828 7.97858 5.002C8.98357 4.58572 10.0894 4.4768 11.1563 4.68902C12.2232 4.90124 13.2032 5.42506 13.9724 6.19425C14.7416 6.96344 15.2654 7.94344 15.4777 9.01034C15.6899 10.0772 15.581 11.1831 15.1647 12.1881C14.7484 13.1931 14.0434 14.0521 13.139 14.6564C12.2345 15.2608 11.1711 15.5833 10.0833 15.5833C8.62465 15.5833 7.2257 15.0039 6.19425 13.9724C5.1628 12.941 4.58334 11.542 4.58334 10.0833Z"
                      fill="currentColor"></path>
                </svg>
              </div>
              <input @click.stop v-if="search" @keydown.enter="searchValue" v-model="value" name="q" type="text"
                     placeholder="Izlash...">
            </div>
          </div>
        </div>
      </div>
    </header>

    <MobileMenu
        v-model:activeMenu="activeMenu"
    />
  </div>
</template>

<style>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mega-sub-menu {
  margin-top: 30px !important;
  visibility: hidden !important;
  opacity: 0 !important;
//display: none; transition: visibility 0s, opacity 0.6s, margin-top 0.6s !important;
  animation: slideIn 0.6s ease forwards; /* Apply animation */
}


.mega-menu-item:hover .mega-sub-menu {
  margin-top: 0 !important;
  visibility: visible !important;
  opacity: 1 !important;
//display: block;
}
</style>
