<script lang="ts" setup>
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'
import type { VDataTableHeader } from '@morpheme/table'

const { t } = useI18n()
const productStore = useProductStore()

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

const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')

watchEffect(productStore.index)
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
      <VBtn to="/products/create" prefix-icon="tabler:plus" color="primary" :block="isMobile">
        Tambah
      </VBtn>
    </div>
    <VDataTable
      v-model:page="page"
      v-model:itemsPerPage="itemsPerPage"
      :headers="headers"
      :items="productStore.products"
      :total-items="productStore.products.length"
      :loading="productStore.isLoading"
      server-side
      hover
    >
      <template #item.image="{ item }">
        <NuxtImg
          :src="item.images[0]"
          width="50"
          height="50"
          class="max-w-full rounded"
        />
      </template>
      <template #item.name="{ item }">
        <VText>{{ item.title }}</VText>
      </template>
      <template #item.price="{ item }">
        {{
          item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        }}
      </template>
      <template #item.category="{ item }">
        <VText class="capitalize">
          {{ item.category }}
        </VText>
      </template>
      <template #item.action="{ item }">
        <TableAction :id="item.id" path="/products" />
      </template>
    </VDataTable>
  </VCard>
</template>
