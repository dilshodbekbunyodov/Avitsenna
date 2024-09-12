<script>
import { h } from 'vue'

export default {
  props: {
    data: {
        type: String,
        default: ''
    },
    articles: {
        type: Array,
        default: () => ([])
    }
  },
  setup(props) {
    const articlesTemplate = `<div class="tw-bg-[#eaeaea] tw-flex tw-p-4 tw-border-l-4 tw-border-[#16a085]"><div class="tw-mr-2"> Ushbu maqolani ham o'qing: </div><a href="/ayollarda-sink-moddasi-yetishmovchiligi" class="">Ayollarda sink moddasi yetishmovchiligi</a></div>`
    const parser = new DOMParser()
    let doc = parser.parseFromString(props.data, 'text/html')
    let collection = Array.from(doc.body.children)
    const vnode = h('article', {innerHTML: props.data})
    console.log('🚀 ~ setup ~ vnode:', Array.from(doc.body.children))
    // return the render function
    return () => vnode
  }
}
</script>