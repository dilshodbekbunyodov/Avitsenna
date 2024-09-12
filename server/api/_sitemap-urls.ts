export default cachedEventHandler(async e => {
    const config = useRuntimeConfig()
    const { data } = await $fetch(`${config.public.apiBase}sitemap`)
    const urls = Object.values(data).flat().map((el:any) => `${config.public.backendHost}${el.url}`)
    const data_urls = await Promise.all(
        urls.map(el => $fetch(el))
    )
    console.log('🚀 ~ data_urls:', data_urls.map(el => el.data).flat().map(p => ({ loc: p.url, lastmod: p.updated_at })))
    return data_urls.map(el => el.data).flat().map(p => ({ loc: p.url, lastmod: p.updated_at }))
  }, {
    name: 'sitemap-dynamic-urls',
    maxAge: 60 * 10 // cache URLs for 10 minutes
  })