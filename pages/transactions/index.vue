<script lang="ts" setup>
import type { VDataTableHeader } from '@morpheme/table'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard',
  breadcrumbs: [
    {
      title: 'Transactions',
      to: '/transactions',
    },
  ] as VBreadcrumbItemProps[],
})

useHead({
  title: t('Transactions'),
  meta: [{ name: t('description'), content: t('Transactions Page') }],
})

const headers = ref<VDataTableHeader[]>([
  {
    text: 'Order Number',
    value: 'orderNumber',
  },
  {
    text: 'Product Name',
    value: 'name',
    sortable: false,
  },
  {
    text: 'Quantity',
    value: 'quantity',
  },
  {
    text: 'Phone Number',
    value: 'phone',
  },
  {
    text: 'Address',
    value: 'address',
  },
])

const items = ref([
  {
    text: 'Pending',
  },
  {
    text: 'Sending',
  },
  {
    text: 'Complete',
  },
])
const selectedTab = ref(0)
const loading = ref(false)
</script>

<template>
  <AppPageHeader
    title="Transactions"
    subtitle="Monitor your transaction here"
  />
  <VCard class="mt-5" body-class="!p-0" hide-header hide-footer>
    <VTabs
      v-model="selectedTab"
      :items="items"
      active-class="!text-primary-500"
      slider-class="!bg-primary-500 !border-primary-500"
    />
    <VContainer v-if="selectedTab === 0" padded>
      <TabHeader title="Pending" />
      <VDataTable
        :headers="headers"
        :items="[]"
        :loading="loading"
        server-side
        hover
      />
    </VContainer>
    <VContainer v-if="selectedTab === 1" padded>
      <TabHeader title="Sending" />
      <VDataTable
        :headers="headers"
        :items="[]"
        :loading="loading"
        server-side
        hover
      />
    </VContainer>
    <VContainer v-if="selectedTab === 2" padded>
      <TabHeader title="Complete" />
      <VDataTable
        :headers="headers"
        :items="[]"
        :loading="loading"
        server-side
        hover
      />
    </VContainer>
  </VCard>
</template>
