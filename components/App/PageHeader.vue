<script lang="ts" setup>
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <VText variant="display-sm" font-weight="medium" class="mb-2">
    <h1>{{ title }}</h1>
  </VText>
  <VText class="text-gray-true-400">
    <p>{{ subtitle }}</p>
  </VText>
</template>
