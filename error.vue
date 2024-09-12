<template>
  <NuxtLayout>
<!--    <pre>{{error}}</pre>-->
    <main v-if="error?.statusCode === 404" class="main tw-flex tw-justify-center">
      <div class="main-content tie-col-md-12" role="main">

        <div class="container-404">
          <h2>404 :(</h2>
          <h3>Kechirasiz, negadir ushbu sahifa topilmadi.</h3>

          <h4>Balki, ichki qidiruv tizimimiz orqali oʻzingizni qiziqtirgan maʼlumotni izlab koʻrarsiz. Yoki quyidagi
            boʻlimlarga tegishli sara maqolalarni koʻrib chiqing.</h4>
        </div>
      </div>
    </main>
    <main v-if="error?.statusCode === 500" class="main tw-flex tw-justify-center">
      <div class="container-404">
        <h2>500 :(</h2>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
  },
});

</script>

