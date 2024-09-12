import { UseFetchOptions } from "nuxt/dist/app/composables";


export const useAPIFetch = (url: string, options?: UseFetchOptions<any>) => useFetch(
    url, {
        baseURL: useRuntimeConfig().public.apiBase,
        ...options,
        // lazy: true,
    }
)
