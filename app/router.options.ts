import type {RouterOptions} from '@nuxt/schema'

export default <RouterOptions>{
    scrollBehavior(to, from) {
        // if (to.name?.startsWith('static')) {
        return {top: 0, behavior: 'instant'}
        // }
    },
    scrollBehaviorType: 'instant'
}
