<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <VList
    v-for="menu in MENUS"
    :key="menu.title"
  >
    <VListItem
      hover-class=" hover:!bg-gray-true-800"
      default-class="py-1 text-white text-md"
      :to="menu.to"
      :active="route.fullPath.split('/')[1] === menu.to.split('/')[1]"
    >
      <template #prepend.icon>
        <VIcon class="text-white" :name="menu.icon" />
      </template>
      {{ menu.title }}
    </VListItem>
  </VList>
</template>

<style lang="scss">
:root {
  --v-list-item-active-bg-color: var(--color-gray-true-800);
  --v-list-item-active-border-color: var(--color-gray-true-800);
  --v-list-item-active-color: var(--color-white);
}
</style>
