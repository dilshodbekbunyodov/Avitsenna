import { useAPIFetch } from '@/composables/useAPIFetch';

export function useFetchLetters() {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/rubrics/list-by-letters`).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}

export function useFetchSearch(params: any) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/search`, { params }).then(res => {
            // @ts-ignore
            resolve(res.data.value.data)
        }).catch(err => reject(err))
    })
}