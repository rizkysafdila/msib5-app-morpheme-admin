export const useProductStore = defineStore('product', {
  state: (): {
    isLoading: boolean
    categories: []
    products: IProduct[]
    limit?: number
  } => ({
    isLoading: false,
    categories: [],
    products: [] as IProduct[],
  }),
  getters: {},
  actions: {
    async index(): Promise<void> {
      this.isLoading = true
      try {
        const { data } = await useNuxtApp().$axios.get('/products', {
          params: {
            limit: 20,
            select: 'id,title,description,category,price,images',
          },
        })
        this.products = data.products
        return Promise.resolve(data.products)
      }
      catch (err) {
        return Promise.reject(err)
      }
      finally {
        this.isLoading = false
      }
    },

    async getAllCategories(): Promise<void> {
      this.isLoading = true
      try {
        const { data } = await useNuxtApp().$axios.get('/products/categories')
        this.categories = data
        return Promise.resolve(data)
      }
      catch (err) {
        return Promise.reject(err)
      }
      finally {
        this.isLoading = false
      }
    },

    DELETE_PRODUCT(id: number): void {
      this.products = this.products.filter(product => product.id !== id)
    },
  },
})
