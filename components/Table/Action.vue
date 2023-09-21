<script lang="ts" setup>
defineProps<{
  id: number
  path: string
}>()

const modalDeleteIsOpen = ref(false)
const loading = ref(false)

async function onConfirm(e: any) {
  loading.value = true
  await deleteItem()
  loading.value = false
  e.close()
}

function deleteItem() {
  return new Promise((resolve: (value?: any) => void) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
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
