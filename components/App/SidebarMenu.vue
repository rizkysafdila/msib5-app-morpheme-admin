<script lang="ts" setup>

</script>

<template>
  <VList
    v-for="menu in MENUS"
    :key="menu.title"
  >
    <VListItem default-class="py-1 text-white text-md" :to="menu.to">
      <template #prepend.icon>
        <VIcon class="text-white" :name="menu.icon" />
      </template>
      {{ menu.title }}
    </VListItem>
  </VList>
</template>
