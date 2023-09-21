<script lang="ts" setup>

</script>

<template>
  <VList v-for="menu in MENUS" :key="menu.title" active-variant="filled">
    <VListItem default-class="py-1 text-md" :to="menu.to">
      <template #prepend.icon>
        <VIcon :name="menu.icon" />
      </template>
      {{ menu.title }}
    </VListItem>
  </VList>
</template>
