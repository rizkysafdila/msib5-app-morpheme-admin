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

// const { status: productListStatus }
//   = await useAsyncData('productList',
//     () =>
//       productStore.index(),
//     { lazy: true },
//   )

// if (productListStatus.value === 'error')
//   throw createError({ statusCode: 404, statusMessage: 'Product List Not Found' })

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
      <VBtn
        to="/products/create"
        prefix-icon="tabler:plus"
        color="success"
        class="dark:bg-emerald-700 dark:border-emerald-700"
        :block="isMobile"
      >
        Add New
      </VBtn>
    </div>
    <VDataTable
      :headers="headers"
      :items="productStore.getAllProducts"
      :loading="productStore.isLoading"
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
