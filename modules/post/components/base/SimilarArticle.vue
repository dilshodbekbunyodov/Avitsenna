<template>
    <div class="tw-bg-[#eaeaea] tw-flex tw-p-4 tw-border-l-4 tw-border-[#16a085]">
        <div class="tw-mr-2">
            Ushbu maqolani ham o'qing:
        </div>
        <nuxt-link :to="`/${data.slug}`">
             {{ $td(data, 'title') }}
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">

defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style scoped>

</style>