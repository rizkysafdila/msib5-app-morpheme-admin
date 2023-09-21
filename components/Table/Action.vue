<script lang="ts" setup>
const props = defineProps<{
  id: number
  path: string
}>()

const productStore = useProductStore()

const modalDeleteIsOpen = ref(false)
const loading = ref(false)

async function onConfirm(e: any) {
  loading.value = true
  productStore.DELETE_PRODUCT(props.id)
  loading.value = false
  e.close()
}
</script>

<template>
  <ClientOnly>
    <div class="flex justify-center items-center gap-2">
      <VBtn
        prefix-icon="tabler:eye"
        prefix-icon-size="md"
        :to="`${path}`"
        fab
        text
      />
      <VBtn
        prefix-icon="tabler:pencil"
        prefix-icon-size="md"
        :to="`${path}`"
        fab
        text
      />
      <VBtn
        prefix-icon="tabler:trash"
        prefix-icon-size="md"
        fab
        text
        @click="modalDeleteIsOpen = !modalDeleteIsOpen"
      />
    </div>

    <VModal
      v-model="modalDeleteIsOpen"
      title="Delete Item"
      confirm
      confirm-text="Delete"
      confirm-color="error"
      :loading="loading"
      centered
      footer-class="flex-row-reverse"
      close-text="Cancel"
      @confirm="onConfirm"
    >
      <p>Are you sure want to delete this item?</p>
    </VModal>
  </ClientOnly>
</template>
