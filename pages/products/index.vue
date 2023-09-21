<script lang="ts" setup>
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'
import type { VDataTableHeader } from '@morpheme/table'

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard',
  breadcrumbs: [
    {
      title: 'Products',
      to: '/products',
    },
  ] as VBreadcrumbItemProps[],
})

useHead({
  title: t('Products'),
  meta: [{ name: t('description'), content: t('Products Page') }],
})

const headers = ref<VDataTableHeader[]>([
  {
    text: 'ID',
    value: 'id',
  },
  {
    text: 'Image',
    value: 'image',
    sortable: false,
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Price',
    value: 'price',
  },
  {
    text: 'Category',
    value: 'category',
  },
  {
    text: 'Action',
    value: 'action',
    align: 'center',
    sortable: false,
  },
])

const items = ref([
  {
    id: 1,
    image: 'https://nuxt.com/assets/design-kit/logo/icon-green.svg',
    name: 'Nuxt 3',
    price: 12345,
    category: 'Fashion',
  },
])
const page = ref(1)
const itemsPerPage = ref(10)
const totalItems = ref(0)
const loading = ref(false)
const search = ref('')
</script>

<template>
  <AppPageHeader
    title="Products"
    subtitle="Manage your products here"
  />
  <VCard class="mt-5">
    <div class="flex flex-wrap md:flex-nowrap gap-3 md:justify-between md:items-center mb-5">
      <VInput
        v-model="search"
        placeholder="Search..."
        wrapper-class="w-full md:w-auto"
        prepend-icon="ri:search-line"
      />
      <VBtn prefix-icon="tabler:plus" color="primary" :block="isMobile">
        Tambah
      </VBtn>
    </div>
    <VDataTable
      v-model:page="page"
      v-model:itemsPerPage="itemsPerPage"
      :headers="headers"
      :items="items"
      :total-items="totalItems"
      :loading="loading"
      server-side
      hover
    >
      <template #item.image="{ item }">
        <NuxtImg
          :src="item.image"
          width="50"
          height="50"
          class="max-w-full rounded"
        />
      </template>
      <template #item.price="{ item }">
        {{
          item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        }}
      </template>
      <template #item.action="{ item }">
        <TableAction :id="item.id" path="/products" />
      </template>
    </VDataTable>
  </VCard>
</template>
