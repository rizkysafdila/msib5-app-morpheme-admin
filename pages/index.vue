<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: t('Dashboard'),
  meta: [{ name: t('description'), content: t('Dashboard Page') }],
})

const items: ICardStatistic[] = [
  {
    title: 'Total Revenue',
    icon: 'ph:currency-circle-dollar',
    stats: toCurrency(45231.89),
    percentage: 20.1,
  },
  {
    title: 'Transactions',
    icon: 'ph:hand-coins',
    stats: `+${2350}`,
    percentage: 180.1,
  },
  {
    title: 'Categories',
    icon: 'iconoir:grid-add',
    stats: 142,
    percentage: 19,
  },
  {
    title: 'Cancelled',
    icon: 'ph:x-bold',
    stats: 2,
    percentage: 0.0002,
  },
]
</script>

<template>
  <AppPageHeader
    title="Dashboard"
    subtitle="Monitor your metrics for shipping, transactions, product and many more in here"
  />
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
    <div v-for="item in items" :key="item.title">
      <CardStatistic :item="item" />
    </div>
  </div>
</template>
