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
    size: 20
})

const iconSize = computed(() => {
    if (typeof props.size === 'number') {
        return `${props.size}px`
    }
    return props.size + 'px'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const svgClass = computed(() => {
    return ['icon-svg', props.prefix + '-' + props.name]
})

</script>

<template>
    <svg aria-hidden="true" :style="`width: ${iconSize}; height: ${iconSize}`" :class="svgClass">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>