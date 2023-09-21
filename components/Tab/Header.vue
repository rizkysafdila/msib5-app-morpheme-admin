<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <VText class="mb-3" variant="lg" font-weight="semibold">
    <h3>{{ title }}</h3>
  </VText>
</template>
