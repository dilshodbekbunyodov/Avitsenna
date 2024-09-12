export default defineNuxtPlugin(() => {
    return {
        provide: {
            moneyFormat: (num: number) => {
                return Intl.NumberFormat("ru-RU").format(Number(num))
            }
        }
    }
})