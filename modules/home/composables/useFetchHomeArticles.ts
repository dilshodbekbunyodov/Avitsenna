import {useAPIFetch} from '@/composables/useAPIFetch';

export function useFetchArticles(params: object) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles/${params.id}`, {params}).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchArticlesCategory(params: object) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles`, {params}).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchArticlesCrossLinks(id: number) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles/${id}/cross-links?lang=uz`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchArticlesSeo(id: number) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles/${id}/metadata?lang=uz'`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useSendComment(data: any) {
    return useAPIFetch(`/articles/${data.id}/comments`, { method: 'post', body: data })
}
