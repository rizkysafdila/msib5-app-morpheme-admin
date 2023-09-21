<script lang="ts" setup>
const props = defineProps<{
  id: number
  path: string
}>()

const productStore = useProductStore()

const modalDeleteIsOpen = ref(false)
const loading = ref(false)
const isToastOpen = ref(false)
const toastTitle = ref<string>('')

async function onConfirm(e: any) {
  loading.value = true
  productStore.DELETE_PRODUCT(props.id)
  loading.value = false
  e.close()

  isToastOpen.value = true
  toastTitle.value = 'Product deleted successfully'
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

    <VToast
      v-model="isToastOpen"
      color="success"
      placement="top-end"
      icon="tabler:circle-check"
      :timeout="3000"
    >
      {{ toastTitle }}
    </VToast>
  </ClientOnly>
</template>
