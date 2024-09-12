import { useAPIFetch } from '@/composables/useAPIFetch';

export function useFetchExchangeRates() {
    return new Promise((resolve, reject) => {
        useAPIFetch('/special-promotion-blocks/').then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchTopics(params: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/special-promotion-blocks/${params.type}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchSeasonal(params: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/special-promotion-blocks/${params.type}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchBeautyHealth(params: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/special-promotion-blocks/${params.type}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchVitamins(params: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/special-promotion-blocks/${params.type}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchDiseases(params: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/special-promotion-blocks/${params.type}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchNoteWorthy(params: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/special-promotion-blocks/${params.type}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchArticles(params: object) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles`, {params}).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchPopularArticles(params: object) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles`, {params}).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}


// layout
export function useFetchFooterItems() {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/static-pages`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchFooterItemsSlug(slug: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/static-pages/${slug}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}