import { useAPIFetch } from '@/composables/useAPIFetch';

export function useFetchSlugId(slug: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/rubrics/${slug}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchSlugIdSeo(slug: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/rubrics/${slug}/metadata`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchTagsIs(slug: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/tags/${slug}`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchDetailArticles(params: object) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles/`, {params}).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchDetailArticlesSeo(slug: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/tags/${slug}/metadata`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}
