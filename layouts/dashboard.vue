<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const router = useRouter()
const colorMode = useColorMode()
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm') // only smaller than lg
const isAsideOpen = ref(false)
const isMini = ref(false)

watchEffect(() => {
  isAsideOpen.value = !isMobile.value
})
</script>

<template>
  <VAppShell padded-container main-class="bg-white dark:bg-gray-true-900">
    <!-- navigation -->
    <template #navigation>
      <VAppBar
        class="flex justify-between"
        sticky
      >
        <VLogo :white="colorMode.value === 'dark'" />
        <div class="flex">
          <ColorModeSwitcher />
          <!-- <VBtn
            v-if="isMobile"
            prefix-icon="ic:round-menu"
            @click="isMini = !isMini"
          /> -->
        </div>
      </VAppBar>
      <AppBreadcrumbs />
    </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        v-model:mini="isMini"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{ 'z-20 !w-10/12 sidebar': isMobile }"
        color="emerald"
        shadow="lg"
        height="auto"
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
          <VBtn
            v-if="!isMobile"
            prefix-icon="ic:round-menu"
            @click="isMini = !isMini"
          />
        </div>

        <AppSidebarMenu />
      </VNavDrawer>
    </template>

    <!-- content -->
    <slot />
  </VAppShell>
</template>

<style>
.app-bar-transparent {
  --app-bar-bg-color: theme('colors.transparent');
  --app-bar-color: theme('colors.white');
}
</style>
