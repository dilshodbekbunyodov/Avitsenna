<script setup lang="ts">
import {artM, inf, menuItems} from '@/composables/menuItems'
import {useRouter} from "vue-router";

const router = useRouter();

interface itemInterface {
  title: string,
  val: string
}

const emit = defineEmits(['update:activeMenu'])
const props = defineProps({
  activeMenu: {
    type: Boolean,
    default: () => false
  }
})

const disease = ref<boolean>(false)
const articles = ref<boolean>(false)
const info = ref<boolean>(false)
const search = ref<any>(null)
const items = ref<itemInterface[]>([
  {
    title: "Kasalliklar",
    val: 'disease'
  },
  {
    title: "Maqolalar",
    val: 'articles'
  },
  {
    title: "Ma'lumot",
    val: 'info'
  }
])

const handleClick = (value: string) => {
  if (value === 'articles') {
    articles.value = true;
    disease.value = false;
    info.value = false;
  } else if (value === 'disease') {
    articles.value = false;
    disease.value = true;
    info.value = false;
  } else if (value === 'info') {
    articles.value = false;
    disease.value = false;
    info.value = true;
  }
}

const searchValue = () => {
  if (search.value) {
    router.push({path: '/qidiruv/', query: {q: search.value}});
    emit('update:activeMenu')
    search.value = null
  }
};
</script>

<template>
  <div
      class="tw-bg-[#fbf5ed] tw-h-100 tw-w-full tw-z-[999]"
      :class="props.activeMenu ? 'openMenu' : 'defaultMenu'"
  >
    <ul class="menu-open" v-if="!disease && !articles && !info">
      <li class="menu-search menu__link">
        <div class="menu-search__input">
          <input
              @keydown.enter="searchValue" placeholder="Izlash..."
              v-model="search"
          />
          <button @click="searchValue">
            Izlash
          </button>
        </div>
      </li>

      <li v-for="(item, index) in items" :key="index">
        <button
            class="tw-flex tw-w-full tw-items-center tw-justify-between menu__link"
            @click="handleClick(item.val)"
        >
          <span class="tw-font-black tw-font-bold">{{ item.title }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path fill="currentColor"
                  d="M27.963 6.75L30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"></path>
          </svg>
        </button>
      </li>
    </ul>

    <div v-if="disease" class="dropdown-left">
      <div class="container">
        <div class="dropdown-back" @click="disease =! disease">
          <img src="/assets/img/back.svg" alt="ico">
          Ortga
        </div>
        <div class="dropdown-mobile__title">
          Kasalliklar
        </div>

        <div class="dropdown-title">
          <h3>Maqolalar</h3>
          <nuxt-link to="/kasalliklar" class="tw-flex tw-items-center" @click="emit('update:activeMenu', false)">
            HAMMASINI KORISH
            <span>
            <svg width="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 8H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9 3.5L13.5 8L9 12.5" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </svg>
          </span>
          </nuxt-link>
        </div>

        <ul class="drop__menu">
          <li v-for="(list, index2) in menuItems" :key="index2">
            <nuxt-link :to="list.link" @click="emit('update:activeMenu')">
              {{ list.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="articles" class="dropdown-left">
      <div class="container">
        <div class="dropdown-back" @click="articles =! articles">
          <img src="/assets/img/back.svg" alt="ico">
          Ortga
        </div>
        <div class="dropdown-mobile__title">
          Maqolalar
        </div>

        <template v-for="(art, index3) in artM" :key="index3">
          <div class="dropdown-title">
            <h3>{{ art.head }}</h3>
          </div>

          <ul class="drop__menu">
            <li v-for="(s, i) in art.sub" :key="i + 1">
              <nuxt-link :to="s.link" @click="emit('update:activeMenu')">
                {{ s.title }}
              </nuxt-link>
            </li>
          </ul>
        </template>
      </div>
    </div>

    <div v-if="info" class="dropdown-left">
      <div class="container">
        <div class="dropdown-back" @click="info =! info">
          <img src="/assets/img/back.svg" alt="ico">
          Ortga
        </div>
        <div class="dropdown-mobile__title">
          Ma'lumotlar
        </div>

        <template v-for="(inff, index4) in inf" :key="index4">
          <div class="dropdown-title">
            <h3>{{ inff.head }}</h3>
          </div>

          <ul class="drop__menu">
            <li v-for="(v, iv) in inff.sub" :key="iv + 1">
              <nuxt-link :to="v.link" target="_blank" @click="emit('update:activeMenu')">
                {{ v.title }}
              </nuxt-link>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>
