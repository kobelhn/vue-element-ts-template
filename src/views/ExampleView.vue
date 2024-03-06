<template>
    <div class="example-container">
        <div class="text-center font-bold">Hello World</div>
        <el-button type="primary">测试</el-button>
        <el-date-picker v-model="date" type="date"></el-date-picker>
        <el-input-number v-model="counterStore.count" :min="0" :max="100000"></el-input-number>
        <el-button type="primary" @click="increment">Increment</el-button>
        <example-components />
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/example'
import ExampleComponents from '@/components/ExampleComponents.vue';

const date = ref(undefined)

const counterStore = useCounterStore()

const increment = () => {
    counterStore.increment()
}

</script>