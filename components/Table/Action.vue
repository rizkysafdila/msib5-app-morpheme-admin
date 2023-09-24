<script lang="ts" setup>
const props = defineProps<{
  id: number
  path: string
}>()

const productStore = useProductStore()

const modalDeleteIsOpen = ref<boolean>(false)
const modalShowIsOpen = ref<boolean>(false)
const loading = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const toastTitle = ref<string>('')

productStore.FETCH_SINGLE_PRODUCT(props.id)
const product = productStore.product

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
        fab
        text
        @click="modalShowIsOpen = !modalShowIsOpen"
      />
      <VBtn
        prefix-icon="tabler:pencil"
        prefix-icon-size="md"
        :to="`${path}/${id}`"
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
      v-model="modalShowIsOpen"
      title="Detail Product"
      :loading="loading"
    >
      <div class="flex flex-wrap gap-4">
        <NuxtImg :src="product.images[0]" class="rounded-lg" />
        <div class="flex justify-between items-start w-full">
          <div class="flex flex-wrap">
            <VText class="w-full" variant="xl" font-weight="semibold">
              {{ product.title }}
            </VText>
            <VText class="w-full" variant="md" font-weight="medium">
              {{ toCurrency(product.price) }}
            </VText>
          </div>
          <VBadge
            class="!text-gray-900 !bg-gray-300"
            small
          >
            {{ toCapitalize(product.category) }}
          </VBadge>
        </div>
        <div class="w-full">
          <VInput class="!text-gray-true-900 dark:!text-white" text :model-value="product.description" label="Description" />
        </div>
      </div>
    </VModal>

    <VModal
      v-model="modalDeleteIsOpen"
      title="Delete Product"
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
