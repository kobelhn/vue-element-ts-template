<script setup lang="ts">
import { useCounterStore } from '@/stores/example'
import ExampleComponents from '@/components/ExampleComponents.vue';
import { cloneDeep } from 'lodash-es'

const date = ref(undefined)

const counterStore = useCounterStore()

const state = useLocalStorage('state', { x: 0, y: 0 })

const { x, y, sourceType } = useMouse()

const recordPosition = () => {
    state.value.x = x.value
    state.value.y = y.value
}

const increment = () => {
    counterStore.increment()
}

const testObj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}

const cloneObj = useLocalStorage('testObj', cloneDeep(testObj))
testObj.a = 2
ElMessage.success('testObj.a: ' + testObj.a + ', cloneObj.a: ' + cloneObj.value.a)
</script>

<template>
    <div class="example-container">
        <div class="text-center font-bold">Hello World</div>
        <el-button type="primary">测试</el-button>
        <el-date-picker v-model="date" type="date"></el-date-picker>
        <el-input-number v-model="counterStore.count" :min="0" :max="100000"></el-input-number>
        <el-button type="primary" @click="increment">Increment</el-button>
        <example-components />

        <div>
            <p>Mouse position: {{ x }}, {{ y }} {{ sourceType }}</p>
        </div>
        <div>
            <p>{{ state.x }}</p>
            <p>{{ state.y }}</p>
            <el-button type="primary" @click="recordPosition">Record</el-button>
        </div>
    </div>
</template>