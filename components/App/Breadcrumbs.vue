<script lang="ts" setup>
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const route = useRoute()

const items = computed<VBreadcrumbItemProps[]>(() => {
  return (route.meta.breadcrumbs ?? []) as VBreadcrumbItemProps[]
})
</script>

<template>
  <VContainer padded>
    <VBreadcrumbs>
      <VBreadcrumbsItem to="/">
        <VIcon name="tabler:home" class="p-1" />
      </VBreadcrumbsItem>
      <VBreadcrumbsDivider />
      <div v-for="item, index in items" :key="item.title">
        <VBreadcrumbsItem :to="item.to">
          {{ item.title }}
        </VBreadcrumbsItem>
        <VBreadcrumbsDivider v-if="items.length - 1 !== index" />
      </div>
    </VBreadcrumbs>
  </VContainer>
</template>

<!-- <style lang="scss">
:root {
  --breadcrumbs-item-active-color: var(--color-primary-500)
  --breadcrumbs-item-active-bg-color: var(--color-primary-50)
  --breadcrumbs-item-hover-color: var(--color-primary-500)
}
</style> -->
