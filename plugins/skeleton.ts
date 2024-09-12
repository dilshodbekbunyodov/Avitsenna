import type { Directive } from 'vue'

const skeleton : Directive = {
	created(el, binding, vnode, prevVnode) {
		// see below for details on arguments
		if (!el.classList.contains('skeleton-box')) {
			el.classList.add('skeleton-box')
			if (binding.value) {
				el.style.width = binding.value.split(':')[0]
				el.style.height = binding.value.split(':')[1]
			}
		}
	},
	// beforeUpdate(el, binding, vnode, prevVnode) {
	// 	if (!el.classList.contains('skeleton-box')) {
	// 		el.classList.add('skeleton-box')
	// 		if (binding.value) {
	// 			el.style.width = binding.value.split(':')[0]
	// 			el.style.height = binding.value.split(':')[1]
	// 		}
	// 	}
	// },
  	// updated(el, binding, vnode, prevVnode) {
	// 	el.classList.remove('skeleton-box')
	// 	if (binding.value) {
	// 		el.style.width = null
	// 		el.style.height = null
	// 	}
	// },
	mounted(el, binding, vnode, prevVnode) {
		setTimeout(() => {
			el.classList.remove('skeleton-box')
			if (binding.value) {
				el.style.width = null
				el.style.height = null
			}
		}, 250)
	},
	beforeMount(el) {
		el.classList.add('skeleton-box')
	},
	getSSRProps() {
		return {
			class: 'skeleton-box',
			'data-skeleton': true
		}
	}
}
function registerDirectives(app:any): void {
	app.directive('skeleton', skeleton);
}


export default defineNuxtPlugin((nuxtApp) => {
    registerDirectives(nuxtApp.vueApp)
})