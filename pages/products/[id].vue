<script lang="ts" setup>
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard',
  breadcrumbs: [
    {
      title: 'Products',
      to: '/products',
    },
    {
      title: 'Details',
      to: '/products/1',
    },
  ] as VBreadcrumbItemProps[],
})

useHead({
  title: t('Products - Detail Product'),
  meta: [{ name: t('description'), content: t('Detail Product Page') }],
})
</script>

<template>
  <div />
</template>
