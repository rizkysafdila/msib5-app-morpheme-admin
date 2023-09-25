<script lang="ts" setup>
import { number, object, string } from 'yup'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const { t } = useI18n()
const productStore = useProductStore()
const router = useRouter()

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

const { status: categoryListStatus }
  = await useAsyncData('categoryList',
    () =>
      productStore.fetchCategories(),
    { lazy: true },
  )

if (categoryListStatus.value === 'error')
  throw createError({ statusCode: 404, statusMessage: 'Categories Not Found' })

const schema = object({
  title: string().required().label('name'),
  price: number().required().label('price'),
  category: string().required().label('category'),
  description: string().required().label('description'),
})

const name = ref<string>('')
const price = ref<number>()
const category = ref<string>('')
const description = ref<string>('')
const images = ref<string>('https://source.unsplash.com/300x200')

// function onChangeDesc(e: string): void {
//   description.value = e
// }

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(() => {
  productStore.isLoading = true
  const newProduct = {
    id: Math.random() + 1,
    title: name.value,
    category: category.value,
    price: Number(price.value),
    description: description.value,
    images: [images.value],
  } as IProduct

  productStore.STORE_PRODUCT(newProduct)
  productStore.isLoading = false
  router.push('/products')
})

const categories = computed(() => {
  return productStore.categories.map(category => ({
    text: toCapitalize(category).replace(/-/g, ' '),
    value: category,
  }))
})
</script>

<template>
  <AppPageHeader title="Add New Product" subtitle="Add your new product here" />
  <ClientOnly>
    <form @submit="onSubmit">
      <VCard class="mt-5">
        <div class="w-full lg:w-1/2 xl:w-1/4">
          <VFileUpload
            v-model="images"
            name="image"
            label="Image"
            theme="dropzone"
            preview
            image
          />
        </div>
        <div class="grid md:grid-cols-3 gap-3 mt-5">
          <VInput
            v-model="name"
            label="Name"
            name="title"
            prepend-icon="solar:box-outline"
            placeholder="Product name"
          />
          <VInput
            v-model="price"
            label="Price"
            name="price"
            prepend-icon="ph:currency-circle-dollar"
            placeholder="Price"
          />
          <VFormSelect
            v-model="category"
            label="Category"
            name="category"
            :items="categories"
          />
        </div>
        <div class="mt-5">
          <!-- <VEditor
            :model-value="description"
            label="Description"
            name="description"
            label-class="!font-semibold"
            placeholder="Product Description"
            @change="onChangeDesc"
          /> -->
          <VTextarea
            v-model="description"
            rows="7"
            label="Description"
            name="description"
            placeholder="Product Description"
          />
        </div>
        <template #footer>
          <div class="flex w-full justify-end items-center gap-2">
            <VBtn to="/products" class="!px-4" outlined>
              Cancel
            </VBtn>
            <VBtn
              type="submit"
              color="success"
              class="!px-6 dark:bg-emerald-700 dark:border-emerald-700"
            >
              Submit
            </VBtn>
          </div>
        </template>
      </VCard>
    </form>
  </ClientOnly>
</template>
