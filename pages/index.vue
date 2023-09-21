<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: t('Dashboard'),
})
</script>

<template>
  <VText variant="display-sm" font-weight="medium" class="mb-2">
    Dashboard
  </VText>
  <VText>Monitor your metrics for shipping, transactions, product and many more in here</VText>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
    <DashboardHomeCard />
  </div>
</template>
