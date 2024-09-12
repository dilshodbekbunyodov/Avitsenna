<script setup lang="ts">
import {
  useFetchArticles,
  useFetchArticlesCategory,
  useFetchArticlesCrossLinks,
  useFetchArticlesSeo,
} from "~/modules/home/composables/useFetchHomeArticles";
import Rating from "~/pages/articles/rating.vue";
import { useFetchSimilarArticles } from '~/modules/post/composables/useFetchSimilarArticles'

const baseUrl = useRuntimeConfig().public.baseUrl
const baseUrlFront = useRuntimeConfig().public.baseUrlFront

const route = useRoute()
const ratingForm = ref(false)
const articles = ref({})
const crossLinks = ref([])
const params = ref({
  lang: "uz",
  "filter[is_popular]": true,
});
const { $td } = useNuxtApp()


let routeId = route.params.slug
await useFetchArticles({id: routeId, lang: 'uz'})
    .then((res) => {
      articles.value = res

      useFetchArticlesCrossLinks(res.id)
          .then((cros) => {
            crossLinks.value = cros
          })
    })

const similarArticled = await useFetchArticlesCategory(params.value);

const {seo, breadcrumbs} = await useFetchArticlesSeo(articles.value.id)

const similars = await useFetchSimilarArticles(articles.value.id)

useHead({
  title: articles.value?.title_uz,
  link: [
      {
        rel: 'canonical',
        href: baseUrlFront + route.path
      }
  ],
});

useSeoMeta({
  title: seo.meta_title_uz || articles.value.rubric.name_uz,
  description: seo.meta_description_uz,
  ogTitle: seo.meta_title_uz || articles.value.rubric.name_uz,
  ogDescription: seo.meta_description_uz,
  ogImageAlt: seo.meta_title_uz || articles.value.rubric.name_uz,
  ogType: "article",
  ogSiteName: "avitsenna.uz",
  ogUrl: baseUrlFront + route.path,
  ogImage: 'https://back.avitsenna.uz/uploads/' + $td(articles.value, 'image'),
  formatDetection: "telephone=no",
  robots: "index, follow",
  ogLocale: "uz_UZ",
  ogLocaleAlternate: "uz_UZ",
  ogImageWidth: 1000,
  ogImageHeight: 667,
  ogImageType: 'image/jpeg'
});

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: breadcrumbs.map((el, index) => ({
      position: index + 1,
      item: {
        "@id": el.path,
        name: el.name_uz,
      },
    })),
  }),
  definePerson({
    name: articles.value.author?.name,
    image: defineImage({
      inLanguage: "ru-RU",
      url: articles.value.author?.avatar ? 'https://back.avitsenna.uz/uploads/' + articles.value.author?.avatar : '',
      caption: articles.value.author?.name
    }),
  }),
  defineImage({
    inLanguage: 'ru-RU',
    url: 'https://back.avitsenna.uz/uploads/' + $td(articles.value, 'image'),
    width: 1000,
    height: 667
  })
]);

onMounted(() => {
  console.log(similars)
})
</script>

<template>
  <section class="article">


    <div class="container">
      <div class="article-head">
        <div class="article-head__info">
          <div class="article__links">
            <nuxt-link to="/" class="homeArrow"> BOSH SAHIFA </nuxt-link>

            <nuxt-link :to="`/category/${articles.rubric.slug}`" class="modal-open" v-skeleton>
              {{ articles.rubric.name_uz }}
            </nuxt-link>
          </div>

          <h1 class="article__title" v-skeleton>
            {{ articles.title_uz }}
          </h1>
        </div>
      </div>

      <!-- content  -->

      <div class="content">
        <div class="content-main">
          <div class="tw-flex tw-items-center" v-skeleton>
            <NuxtRating
              class="tw-w-[130px]"
              :ratingValue="articles.rating"
              :rating-size="'30px'"
            />

            <div class="rmp-results-widget__avg-rating">
              <span class="js-rmp-avg-rating">{{ articles.rating }} ({{articles.rating_count}})</span>
            </div>
          </div>

          <div class="article-text">
            <div v-html="articles.content_uz" v-skeleton/>
            <!-- <ContentBlock :data="articles.content_uz" /> -->

            <PostSimilarArticle :data="similars[0]" />
<!--            <img :src="'https://back.avitsenna.uz/uploads/' + articles.image_uz" alt="ico">-->

            <div class="article-banner article-banner-mobile">
              <!--              <img src="/assets/img/offer.jpg" alt="img">-->
            </div>
          </div>


          <div class="article-links" v-for="(link, lIndex) in crossLinks" :key="lIndex" v-skeleton>
            <div class="article-links__item">
              <h3 class="article-links__title">
                {{ link.name_ru }}
              </h3>
              <ul>
                <li v-for="(left, lfIndex) in link.links_ru" :key="lfIndex">
                  <nuxt-link :to="left.link" target="_blank">
                    {{ left.link_text }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path
                        d="M27.963 6.75L30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"
                      ></path>
                    </svg>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="article-links__item">
              <h3 class="article-links__title">
                {{ link.name_uz }}
              </h3>
              <ul>
                <li v-for="(left, lfIndex) in link.links_uz" :key="lfIndex">
                  <nuxt-link :to="left.link" target="_blank">
                    {{ left.link_text }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path
                        d="M27.963 6.75L30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"
                      ></path>
                    </svg>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- БАННЕР РЕКЛАМНЫЙ -->
          <div class="article-banner"></div>
        </div>
        <div class="content-side">
          <div class="advertise">
            <div class="advertise-content">
              <!--              <img src="/assets/img/spotlight.png" alt="">-->
            </div>
          </div>
        </div>
      </div>

      <!-- content  -->

      <div class="content">
        <div class="content-main">
          <div class="article-about">
            <div class="article-about__links">
              <div class="article-about__source" @click="ratingForm = !ratingForm">
                <span>{{ ratingForm ? "+" : "-" }}</span>
                Reyting va sharhlar
              </div>
              <ul class="article-about__follow">
                <li>
                  <nuxt-link
                    target="_blank"
                    :to="`https://www.facebook.com/sharer/sharer.php?u=https://avitsenna.uz/?post_type=post&p=${route.params.slug}`"
                  >
                    <svg
                      width="16px"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    target="_blank"
                    :to="`https://connect.ok.ru/offer?url=https://avitsenna.uz/?post_type=post&p=${route.params.slug}&title=${articles.slug}`"
                  >
                    <svg
                      role="img"
                      focusable="false"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M 8.2624472,9.720363 C 8.8999741,9.575357 9.5089991,9.323347 10.062522,8.975332 10.479539,8.696321 10.591544,8.132297 10.312533,7.71528 10.044521,7.314263 9.5104991,7.193258 9.0949821,7.438768 c -1.2750533,0.797534 -2.8951208,0.797534 -4.170174,0 C 4.5012905,7.171757 3.9422672,7.298762 3.674756,7.72128 c 0,10e-4 0,0.002 -10e-4,0.0025 -0.2670111,0.423518 -0.1400058,0.983041 0.2835118,1.250052 l 10e-4,10e-4 c 0.552523,0.347515 1.1610483,0.600025 1.7980749,0.744031 l -1.7325722,1.732572 c -0.3535147,0.347515 -0.360015,0.915039 -0.014001,1.268553 l 0.015001,0.015 C 4.1967778,12.911996 4.4297875,13 4.6617972,13 4.8943069,13 5.1268165,12.912 5.2993237,12.734989 l 1.7105713,-1.702071 1.7020711,1.703071 c 0.360015,0.347514 0.935039,0.338014 1.283053,-0.0225 0.3390139,-0.351515 0.3390139,-0.909038 0,-1.260052 L 8.2624472,9.720363 Z M 7.009895,7.194258 C 8.7199661,7.192258 10.105024,5.8072 10.107524,4.097629 10.107524,2.390058 8.7174661,1 7.009895,1 5.3023239,1 3.9122659,2.390058 3.9122659,4.098629 3.9147659,5.8087 5.3003238,7.193758 7.009895,7.194758 Z m 0,-4.378682 c 0.7080295,10e-4 1.2815534,0.575024 1.2820534,1.282553 0,0.70803 -0.5740239,1.281553 -1.2820534,1.282554 C 6.3023655,5.379683 5.7288416,4.806659 5.7273416,4.098629 5.7283416,3.3901 6.3023655,2.816576 7.009895,2.815076 Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    target="_blank"
                    :to="`mailto:?subject=${articles.slug}?&amp;body=Ushbu saytni tekshiring https://avitsenna.uz/?post_type=post&amp;p=${route.params.slug}`"
                  >
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 532.745 532.745"
                      style="enable-background: new 0 0 532.745 532.745"
                      xml:space="preserve"
                    >
                      <g fill="currentColor">
                        <g>
                          <polygon
                            points="266.373,288.942 532.745,144.64 532.745,84.755 0,84.755 0,144.64 		"
                          ></polygon>
                          <polygon
                            points="266.373,316.451 0,172.174 0,447.99 532.745,447.99 532.745,172.174 		"
                          ></polygon>
                        </g>
                      </g>
                    </svg>
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <!-----------------rating------------------>
            <Rating v-if="ratingForm" v-model:ratingForm="ratingForm" />
            <!-----------------rating------------------>
          </div>

          <PostArticles :similarArticled="similarArticled"/>
        </div>

        <div class="content-side">
          <div class="advertise">
            <div class="advertise-content">
              <!--              <img src="/assets/img/spotlight.png" alt="">-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.article-text h3 {
  font-weight: bold;
  font-size: 1.17em
}

.article-text h2 {
    font-family: 'Proxima Nova Bold', sans-serif;
    font-size: 38px;
    line-height: 42px;
    margin-top: 45px;
    margin-bottom: 15px;
}
</style>