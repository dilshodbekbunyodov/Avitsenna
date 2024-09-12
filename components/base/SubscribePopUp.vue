<script setup lang="ts">
defineProps({
  formOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:formOpen'])
</script>

<template>
  <!-- SUBSCRIBE POPUP -->
  <transition name="fade">
    <div class="subscribe" @click.stop="emit('update:formOpen', false)" v-show="formOpen">
      <div class="subscribe-content" @click.stop>
			<span class="subscribe__close" @click="emit('update:formOpen', false)">
				<img src="/assets/img/close.svg" alt="ico">
			</span>
        <div class="subscribe__img">
          <img src="/assets/img/subscibe.jpg" alt="ico">
        </div>
        <div class="subscribe__wrap">
          <div class="subscribe__logo">
            <img src="/assets/img/hl-logo.png" alt="logo">
          </div>
          <div class="subscribe__title">
            Get our Wellness Wire newsletter
          </div>
          <div class="subscribe__text">
            Nurture yourself with health tips, wellness advice, and more.
          </div>
          <div class="subscribe-form">
            <div class="footer-top__form">
              <input type="email" placeholder="Enter your email">
              <button class="btn" type="submit">Sign up</button>
            </div>
          </div>
          <div class="subscribe__check">
            <p>Other newsletters you won’t want to miss:</p>
            <label>
              <input type="checkbox">
              <span>Sign up for Men's Health</span>
            </label>
            <label>
              <input type="checkbox">
              <span>Sign up for Men's Health</span>
            </label>
          </div>
          <div class="subscribe__privacy">
            Your <a href="#">privacy</a> is important to us
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>