<script lang="ts" setup>
defineProps<{
  item: ICardStatistic
}>()
</script>

<template>
  <VCard shadow="sm" header-class="flex justify-between items-center">
    <template #header>
      <VText font-weight="medium">
        {{ item.title }}
      </VText>
    </template>
    <template #header.append>
      <VIcon size="sm" :name="item.icon" />
    </template>
    <VText variant="display-xs" font-weight="semibold">
      {{ item.stats }}
    </VText>
    <VText class="mt-1">
      {{ `+${item.percentage}% from last month` }}
    </VText>
  </VCard>
</template>
