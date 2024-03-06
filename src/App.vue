<script setup lang="ts">
import { zhCn } from 'element-plus/es/locales.mjs';
import type { EpPropMergeType } from 'element-plus/es/utils/index.mjs';

type ElementPlusSizeType = EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never> | undefined;

const size = ref<ElementPlusSizeType>('default')
const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale :size>
    <RouterView />
  </el-config-provider>
</template>

<style scoped>
</style>
