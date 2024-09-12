<script setup lang="ts">
import {
  useFetchDetailArticles,
  useFetchDetailArticlesSeo,
  useFetchTagsIs
} from "~/modules/home/composables/useFetchHomeDetails";

let slugId: { id: string }
const route = useRoute()
const baseUrl = useRuntimeConfig().public.baseUrl
const baseUrlFront = useRuntimeConfig().public.baseUrlFront

const load = ref(false)
const showBtn = ref(true)
const articles = ref<any[]>([])
let currentPage = ref<number>(1)

slugId = await useFetchTagsIs(route.params.slug) as { id: string };

const tag = {lang: 'uz', "filter[tag_id]": slugId.id, per_page: 8, page: currentPage.value};

await useFetchDetailArticles(tag)
    .then((res: any) => {
      articles.value = res
    })

const {seo, breadcrumbs} = await useFetchDetailArticlesSeo(route.params.slug)

const addPerPage = async (): Promise<void> => {
  currentPage.value++;
  try {
    load.value = true
    const res = await useFetchDetailArticles({
      ...tag,
      page: currentPage.value,
    });

    if (Array.isArray(res)) {
      articles.value.push(...res);
      load.value = false

      if (res && !res.length) {
        showBtn.value = false
      }
    }
  } catch (error) {
    load.value = false
    console.error("Error:", error);
  }
};

useHead({
  title: slugId?.name_uz,
  link: [
    {href: baseUrlFront + route.path},
  ],
})

useSeoMeta({
  title: seo.meta_title_uz || slugId.name_uz,
  description: seo.meta_description_uz,
  ogTitle: seo.meta_title_uz || slugId.name_uz,
  ogDescription: seo.meta_description_uz,
  ogImageAlt: seo.meta_title_uz || slugId.name_uz,
  ogType: "website",
  ogSiteName: "avitsenna.uz",
  ogUrl: baseUrlFront + route.path,
  ogImage: baseUrl + "/img/logo.jpg",
  formatDetection: "telephone=no",
  robots: "index, follow",
  ogLocale: "uz_UZ",
  ogLocaleAlternate: "uz_UZ",
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: breadcrumbs.map((el, index) => ({
      position: index + 1,
      item: {
        "@id": el.path,
        name: el.name_uz
      }
    }))
  })
])

</script>

<template>
  <section class="chapter">
    <div class="container">
      <div class="chapter-main">
        <h1 class="chapter__title" v-skeleton>
          {{ $td(slugId, 'name') }}
        </h1>
      </div>
      <div class="chapter-wrap">
        <h2 class="section__title">
          MAQOLALAR
        </h2>

        <div class="content">
          <div class="content-main">

            <div class="news-item" v-for="(item, index) in articles" :key="index">
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

            <!-- ПОКАЗАТЬ ЕЩЕ -->

            <div class="show-more" v-if="articles && articles.length">
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
</template>

