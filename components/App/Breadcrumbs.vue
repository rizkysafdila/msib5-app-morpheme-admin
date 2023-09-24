<script lang="ts" setup>
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const route = useRoute()
const colorMode = useColorMode()

const items = computed<VBreadcrumbItemProps[]>(() => {
  return (route.meta.breadcrumbs ?? []) as VBreadcrumbItemProps[]
})
</script>

<template>
  <VContainer padded>
    <VBreadcrumbs>
      <VBreadcrumbsItem
        class="hover:!text-emerald-500"
        active-class="!text-emerald-500 dark:!text-emerald-400 !bg-emerald-100 dark:!bg-emerald-900"
        to="/"
      >
        <VIcon
          name="tabler:home"
          class="p-1"
          :class="{ '!text-emerald-400': colorMode.value === 'dark' && route.path === '/' }"
        />
      </VBreadcrumbsItem>
      <VBreadcrumbsDivider />
      <div v-for="item, index in items" :key="item.title">
        <VBreadcrumbsItem
          class="hover:!text-emerald-500"
          active-class="!text-emerald-500 dark:!text-emerald-400 !bg-emerald-100 dark:!bg-emerald-900"
          :to="item.to"
        >
          {{ item.title }}
        </VBreadcrumbsItem>
        <VBreadcrumbsDivider v-if="items.length - 1 !== index" />
      </div>
    </VBreadcrumbs>
  </VContainer>
</template>
