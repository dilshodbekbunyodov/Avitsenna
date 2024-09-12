export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            td: (obj:any, key:string) => obj && obj[`${key}_${nuxtApp.$i18n?.locale?.value}`] || obj[`${key}_ru`] || obj[`${key}_uz`] || ''
        }
    }
})