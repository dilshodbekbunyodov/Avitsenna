<template>
  <div>
    <NuxtLoadingIndicator color="#f9794d"/>
    <!-- HEADER -->
    <Header/>

    <!-- SUBSCRIBE POPUP -->
    <!--    <SubscribePopUp-->
    <!--        v-model:form-open="subscribe"-->
    <!--    />-->
    <!-- HEADER -->

    <div class="container">
      <HomeSectionBannerAdvertisement/>
    </div>

    <div class="container">
      <slot/>
    </div>

    <!-- FOOTER -->
    <Footer/>
    <!-- FOOTER -->
  </div>
</template>
