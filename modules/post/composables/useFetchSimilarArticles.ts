export function useFetchSimilarArticles(id:number) {
    return new Promise((resolve, reject) => {
        useAPIFetch(`/articles/${id}/similar-articles`).then(res => {
            resolve(res.data.value.data)
        }).catch(err => {
            reject(err)
        })
    })
}