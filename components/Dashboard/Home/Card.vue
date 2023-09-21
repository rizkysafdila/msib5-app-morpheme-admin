<script lang="ts" setup>
interface IHomeDashboardCard {
  title: string
  icon: string
  stats: number
  percentage: number
}

defineProps<{
  card: IHomeDashboardCard
}>
</script>

<template>
  <VCard shadow="sm" header-class="flex justify-between items-center">
    <template #header>
      <VText font-weight="medium">
        {{ card.title }}
      </VText>
    </template>
    <template #header.append>
      <VIcon name="ic:baseline-10k" />
    </template>
    <VText variant="display-xs" font-weight="semibold">
      {{ toCurrency(card.stats) }}
    </VText>
    <VText class="mt-1">
      {{ `+${stats.percentage}% from last month` }}
    </VText>
  </VCard>
</template>
