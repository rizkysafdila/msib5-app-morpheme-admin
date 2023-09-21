<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const router = useRouter()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm') // only smaller than lg
const isAsideOpen = ref(true)
const isMini = ref(false)

const items = ref<VBreadcrumbItemProps[]>([
  {
    title: 'tabler:home',
    to: '/',
  },
  {
    title: 'Products',
    to: '/products',
  },
  {
    title: 'Transactions',
    to: '/transactions',
  },
])

watchEffect(() => {
  isAsideOpen.value = !isMobile.value
})
</script>

<template>
  <VAppShell padded-container>
    <!-- header -->
    <template #navigation>
      <VAppBar color="transparent" class="mt-5">
        <VBreadcrumbs :items="items" />
      </VAppBar>
    </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model:mini="isMini"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{ 'z-20 !w-10/12 sidebar': isMobile }"
        color="emerald"
        shadow="lg"
      >
        <div class="flex justify-center items-center px-3 py-4" :class="{ 'justify-between': !isMini }">
          <VText
            v-if="!isMini"
            class="cursor-pointer"
            variant="md"
            font-weight="semibold"
            @click="router.push('/')"
          >
            E-Commerce
          </VText>
          <VBtn prefix-icon="ic:round-menu" @click="isMini = !isMini" />
        </div>

        <AppSidebar />
      </VNavDrawer>
    </template>

    <!-- content -->
    <slot />

    <!-- footer -->
    <template #content.after>
      <VText variant="sm" color="gray.500" class="m-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>
  </VAppShell>
</template>

<style>
.app-bar-transparent {
  --app-bar-bg-color: theme('colors.transparent');
  --app-bar-color: theme('colors.white');
}
</style>
