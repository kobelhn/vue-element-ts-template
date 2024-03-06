<template>
    <svg aria-hidden="true" :style="`font-size: ${iconSize}; width: ${iconSize}; height: ${iconSize}`">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script setup lang="ts">

defineOptions({
    name: 'SvgIcon',
})

const props = withDefaults(defineProps<{
    prefix?: string
    name: string
    color?: string,
    size?: string | number
}>(), {
    prefix: 'icon',
    color: 'currentColor',
    size: 14
})

const iconSize = computed(() => {
    if (typeof props.size === 'number') {
        return `${props.size}px`
    }
    return props.size + 'px'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>