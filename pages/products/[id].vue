<script lang="ts" setup>
import { number, object, string } from 'yup'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)

const productStore = useProductStore()

// const { status: productDataStatus }
//   = await useAsyncData('productData',
//     () =>
//       productStore.fetchSingleProduct(id),
//     { lazy: false },
//   )
const { status: categoryListStatus }
  = await useAsyncData('categoryList',
    () =>
      productStore.fetchCategories(),
    { lazy: true },
  )

// if (productDataStatus.value === 'error')
//   throw createError({ statusCode: 404, statusMessage: 'Product Not Found' })
if (categoryListStatus.value === 'error')
  throw createError({ statusCode: 404, statusMessage: 'Categories Not Found' })

productStore.FETCH_SINGLE_PRODUCT(id)
const product = productStore.product

definePageMeta({
  layout: 'dashboard',
  breadcrumbs: [
    {
      title: 'Products',
      to: '/products',
    },
    {
      title: 'Edit',
      to: '#',
    },
  ] as VBreadcrumbItemProps[],
})

useHead({
  title: t(`Edit Product - ${product.title} `),
  meta: [{ name: t('description'), content: t('Detail Product Page') }],
})

// Validation
const schema = object({
  title: string().required().label('name'),
  price: number().required().label('price'),
  category: string().required().label('category'),
  description: string().required().label('description'),
})

const name = ref<string>(product.title)
const price = ref<number>(product.price)
const category = ref<string>(product.category)
const description = ref<string>(product.description)
const images = ref<string>(product.images[0] || '')

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(() => {
  const updatedProduct = {
    title: name.value,
    category: category.value,
    price: Number(price.value),
    description: description.value,
    images: [images.value],
  } as IProduct

  productStore.UPDATE_PRODUCT(id, updatedProduct)
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
  <AppPageHeader title="Edit Product" subtitle="Edit your product here" />
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
            <VBtn type="submit" color="success" class="!px-6 dark:bg-emerald-700 dark:border-emerald-700">
              Update
            </VBtn>
          </div>
        </template>
      </VCard>
    </form>
  </ClientOnly>
</template>
