<script lang="ts" setup>
// import { object, string } from 'yup'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'
import { VQuillEditor } from '@morpheme/quill-editor'

const { t } = useI18n()
const productStore = useProductStore()

definePageMeta({
  layout: 'dashboard',
  breadcrumbs: [
    {
      title: 'Products',
      to: '/products',
    },
    {
      title: 'Create',
      to: '/products/create',
    },
  ] as VBreadcrumbItemProps[],
})

useHead({
  title: t('Products - Add New Product'),
  meta: [{ name: t('description'), content: t('Add New Product Page') }],
})

// const schema = object({
//   name: string().required().label('Product name'),
// })

// const { handleSubmit, resetForm, values } = useForm({
//   validationSchema: schema,
// })

const image = ref()
const description = ref('')

const categories = computed(() => {
  return productStore.categories.map(category => ({
    text: toCapitalize(category),
    value: category,
  }))
})

watchEffect(productStore.getAllCategories)
</script>

<template>
  <AppPageHeader title="Add New Product" subtitle="Add your new product here" />
  <VCard class="mt-5">
    <form>
      <div class="w-full lg:w-1/2 xl:w-1/4">
        <VFileUpload
          v-model="image"
          label="Image"
          theme="dropzone"
          preview
          image
        />
      </div>
      <div class="grid md:grid-cols-3 gap-3 mt-5">
        <VInput label="Name" prepend-icon="solar:box-outline" placeholder="Product name" />
        <VInput label="Price" prepend-icon="ph:currency-circle-dollar" placeholder="Price" />
        <VFormSelect
          label="Category"
          :items="categories"
        />
      </div>
      <div class="mt-5">
        <VQuillEditor
          v-model="description"
          name="description"
          label="Description"
          placeholder="Product Description"
        />
      </div>
    </form>
    <template #footer>
      <div class="flex w-full justify-end items-center gap-2">
        <VBtn to="/products" class="!px-4" outlined>
          Cancel
        </VBtn>
        <VBtn color="primary" class="!px-6">
          Submit
        </VBtn>
      </div>
    </template>
  </VCard>
</template>
