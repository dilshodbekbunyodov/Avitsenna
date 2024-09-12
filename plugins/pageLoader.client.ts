export default defineNuxtPlugin((nuxtApp) => {
    const { start, finish } = useLoadingIndicator()
    nuxtApp.hook('page:start', () => {
      /* your code goes here */
      start()
    })
    nuxtApp.hook('page:finish', () => {
        finish()
    })
  })