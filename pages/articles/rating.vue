<script setup lang="ts">
import {useSendComment} from "~/modules/home/composables/useFetchHomeArticles";

const emit = defineEmits(['update:ratingForm'])
const props = defineProps({
  ratingForm: {
    type: Boolean,
    default: false
  }
})
interface valInterface {
  text: string,
  name: string,
  email: string,
  website: string,
}

const route = useRoute()
const ratingValue = ref<number>(0)
const values = ref<valInterface>({
  text: '',
  name: '',
  email: '',
  website: '',
})
const logRating = (event: number) => {
  ratingValue.value = event
}

const rateText = () => {
  switch (ratingValue.value) {
    case 1:
      return 'Foydasiz';
    case 2:
      return 'Birmuncha foydali';
    case 3:
      return 'Foydali';
    case 4:
      return 'Anchagina foydali';
    case 5:
      return 'Juda foydali';
    default:
      return '';
  }
}

const sendComments = () => {
  useSendComment({...values.value, id: route.params.slug})
      .then(() => {
        emit('update:ratingForm', false)
      })
}
</script>

<template>
  <div class="article-about__dropdown">
    <div class="tw-text-center tw-mb-0" v-if="false">
      <h1>Ushbu maqola qanchalik foydali?</h1>
      <p>Baholash uchun yulduzchalardan birini bosing!</p>

      <div class="tw-flex tw-justify-center tw-w-[65%]">
        <NuxtRating
            :read-only="false"
            :ratingValue="1"
            :rating-size="'70px'"
            @ratingHovered="logRating"
        />
      </div>
      <p>{{ rateText() }}</p>

      <p>O'rtacha baho 5 / 5. Baholar soni: 1</p>
    </div>

    <div id="respond" class="comment-respond">
      <nuxt-link to="https://t.me/med24uz_bot" target="_blank" class="btn__usefull tw-text-center">
        <img src="assets/img/tg.svg" alt="">
        Foydali maqolalarni Telegram kanalimizda kuzatib boring!
        <br>
        Aʼzo boʻlish
      </nuxt-link>
      <h3 id="reply-title" class="comment-reply-title tw-font-black">Fikr qo'shish</h3>
      <div id="commentform" class="comment-form">
        <p class="comment-notes">
          <span id="email-notes">Sizning elektron pochta manzilingiz nashr etilmaydi.</span>
          <span class="required-field-message">Majburiy maydonlar belgilangan
            <span class="required">*</span>
          </span>
        </p>
        <p class="comment-form-comment">
          <label for="comment">
            Izoh
            <span class="required">*</span>
          </label>
          <textarea v-model="values.text" id="comment" name="comment" cols="45" rows="8" required="required">
          </textarea>
        </p>
        <p class="comment-form-author">
          <label for="author">Ism
            <span class="required">*</span>
          </label>
          <input
              v-model="values.name"
              id="author" name="author" required="required"
          />
        </p>
        <p class="comment-form-email">
          <label for="email">
            Email
            <span class="required">*</span>
          </label>
          <input
              v-model="values.email"
              id="email" name="email" required="required"
          />
        </p>
        <p class="comment-form-url">
          <label for="url">Veb-sayt</label>
          <input
              v-model="values.website"
              id="url" name="url" type="text"
          />
        </p>

        <button
            @click="sendComments"
            class="tw-bg-[#08f] tw-p-1 tw-px-2 tw-border-0 tw-text-white"
        >
          Fikrni yuborish
        </button>
      </div>
    </div>
  </div>
</template>
