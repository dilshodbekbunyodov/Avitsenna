<script setup lang="ts">
const baseUrlFront = useRuntimeConfig().public.baseUrlFront
const route = useRoute()

// import {useFetchExchangeRates} from "@/modules/home/composables/useFetchHomeNews";
//
// const blockTypes = await useFetchExchangeRates();

// const baseURL = useRuntimeConfig().public.baseUrl
// const route = useRoute()

// useHead({
//   link: [
//     {rel: "canonical", href: baseURL + route.path}
//   ]
// })

useHead({
  title: 'Bosh sahifa - avitsenna.uz',
  link: [
    {href: baseUrlFront + route.path},
  ],
})

useSeoMeta({
  title: "avitsenna.uz",
  ogTitle: "Bosh sahifa - Avitsenna.uz",
  ogType: "website",
  ogSiteName: "Avitsenna.uz",
  ogUrl: 'https://avitsenna.uz',
  robots: "index, follow",
  ogLocale: "uz_UZ",
  ogLocaleAlternate: "uz_UZ",
});
</script>
<template>
  <div>
    <!--    <pre>{{blockTypes}}</pre>-->
    <!--    MAVZULAR va MAVSUMIY DORILAR  -->
    <HomeSectionTopics/>

    <!--    YANGI MAQOLALAR   -->
    <HomeSectionMoreTopics/>

    <!--    OMMABOP MAQOLALAR   -->
    <HomeSectionMoreTopReads/>

    <!--    GO'ZALLIK VA SALOMATLIK BUTUN OILA UCHUN VITAMINLAR -->
    <HomeSectionBeauty/>

    <!-- РЕКЛАМНЫЙ БАННЕР-->
    <HomeSectionBannerAdvertisement/>

    <!--    KASALLIKLAR   -->
    <HomeSectionHealthCondition/>

    <!-- E'TIBORGA LOYIQ  -->
    <HomeSectionSpotLight/>
  </div>
</template>
