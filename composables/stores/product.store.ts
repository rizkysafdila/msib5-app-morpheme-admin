export const useProductStore = defineStore('product', {
  state: (): {
    isLoading: boolean
    categories: []
    products: IProduct[]
    product: IProduct
  } => ({
    isLoading: false,
    categories: [],
    products: [
      {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        category: 'smartphones',
        price: 549,
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/3.jpg',
          'https://i.dummyjson.com/data/products/1/4.jpg',
          'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        ],
      },
      {
        id: 2,
        title: 'iPhone X',
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        category: 'smartphones',
        price: 899,
        images: [
          'https://i.dummyjson.com/data/products/2/1.jpg',
          'https://i.dummyjson.com/data/products/2/2.jpg',
          'https://i.dummyjson.com/data/products/2/3.jpg',
          'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        ],
      },
      {
        id: 3,
        title: 'Samsung Universe 9',
        description: 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
        category: 'smartphones',
        price: 1249,
        images: [
          'https://i.dummyjson.com/data/products/3/1.jpg',
        ],
      },
      {
        id: 4,
        title: 'OPPOF19',
        description: 'OPPO F19 is officially announced on April 2021.',
        category: 'smartphones',
        price: 280,
        images: [
          'https://i.dummyjson.com/data/products/4/1.jpg',
          'https://i.dummyjson.com/data/products/4/2.jpg',
          'https://i.dummyjson.com/data/products/4/3.jpg',
          'https://i.dummyjson.com/data/products/4/4.jpg',
          'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
        ],
      },
      {
        id: 5,
        title: 'Huawei P30',
        description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
        category: 'smartphones',
        price: 499,
        images: [
          'https://i.dummyjson.com/data/products/5/1.jpg',
          'https://i.dummyjson.com/data/products/5/2.jpg',
          'https://i.dummyjson.com/data/products/5/3.jpg',
        ],
      },
      {
        id: 6,
        title: 'MacBook Pro',
        description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
        category: 'laptops',
        price: 1749,
        images: [
          'https://i.dummyjson.com/data/products/6/1.png',
          'https://i.dummyjson.com/data/products/6/2.jpg',
          'https://i.dummyjson.com/data/products/6/3.png',
          'https://i.dummyjson.com/data/products/6/4.jpg',
        ],
      },
      {
        id: 7,
        title: 'Samsung Galaxy Book',
        description: 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
        category: 'laptops',
        price: 1499,
        images: [
          'https://i.dummyjson.com/data/products/7/1.jpg',
          'https://i.dummyjson.com/data/products/7/2.jpg',
          'https://i.dummyjson.com/data/products/7/3.jpg',
          'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        ],
      },
      {
        id: 8,
        title: 'Microsoft Surface Laptop 4',
        description: 'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
        category: 'laptops',
        price: 1499,
        images: [
          'https://i.dummyjson.com/data/products/8/1.jpg',
          'https://i.dummyjson.com/data/products/8/2.jpg',
          'https://i.dummyjson.com/data/products/8/3.jpg',
          'https://i.dummyjson.com/data/products/8/4.jpg',
          'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
        ],
      },
      {
        id: 9,
        title: 'Infinix INBOOK',
        description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
        category: 'laptops',
        price: 1099,
        images: [
          'https://i.dummyjson.com/data/products/9/1.jpg',
          'https://i.dummyjson.com/data/products/9/2.png',
          'https://i.dummyjson.com/data/products/9/3.png',
          'https://i.dummyjson.com/data/products/9/4.jpg',
          'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
        ],
      },
      {
        id: 10,
        title: 'HP Pavilion 15-DK1056WM',
        description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
        category: 'laptops',
        price: 1099,
        images: [
          'https://i.dummyjson.com/data/products/10/1.jpg',
          'https://i.dummyjson.com/data/products/10/2.jpg',
          'https://i.dummyjson.com/data/products/10/3.jpg',
          'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
        ],
      },
      {
        id: 11,
        title: 'perfume Oil',
        description: 'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
        category: 'fragrances',
        price: 13,
        images: [
          'https://i.dummyjson.com/data/products/11/1.jpg',
          'https://i.dummyjson.com/data/products/11/2.jpg',
          'https://i.dummyjson.com/data/products/11/3.jpg',
          'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        ],
      },
      {
        id: 12,
        title: 'Brown Perfume',
        description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
        category: 'fragrances',
        price: 40,
        images: [
          'https://i.dummyjson.com/data/products/12/1.jpg',
          'https://i.dummyjson.com/data/products/12/2.jpg',
          'https://i.dummyjson.com/data/products/12/3.png',
          'https://i.dummyjson.com/data/products/12/4.jpg',
          'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
        ],
      },
      {
        id: 13,
        title: 'Fog Scent Xpressio Perfume',
        description: 'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
        category: 'fragrances',
        price: 13,
        images: [
          'https://i.dummyjson.com/data/products/13/1.jpg',
          'https://i.dummyjson.com/data/products/13/2.png',
          'https://i.dummyjson.com/data/products/13/3.jpg',
          'https://i.dummyjson.com/data/products/13/4.jpg',
          'https://i.dummyjson.com/data/products/13/thumbnail.webp',
        ],
      },
      {
        id: 14,
        title: 'Non-Alcoholic Concentrated Perfume Oil',
        description: 'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
        category: 'fragrances',
        price: 120,
        images: [
          'https://i.dummyjson.com/data/products/14/1.jpg',
          'https://i.dummyjson.com/data/products/14/2.jpg',
          'https://i.dummyjson.com/data/products/14/3.jpg',
          'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
        ],
      },
      {
        id: 15,
        title: 'Eau De Perfume Spray',
        description: 'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
        category: 'fragrances',
        price: 30,
        images: [
          'https://i.dummyjson.com/data/products/15/1.jpg',
          'https://i.dummyjson.com/data/products/15/2.jpg',
          'https://i.dummyjson.com/data/products/15/3.jpg',
          'https://i.dummyjson.com/data/products/15/4.jpg',
          'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
        ],
      },
      {
        id: 16,
        title: 'Hyaluronic Acid Serum',
        description: 'L\'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid',
        category: 'skincare',
        price: 19,
        images: [
          'https://i.dummyjson.com/data/products/16/1.png',
          'https://i.dummyjson.com/data/products/16/2.webp',
          'https://i.dummyjson.com/data/products/16/3.jpg',
          'https://i.dummyjson.com/data/products/16/4.jpg',
          'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
        ],
      },
      {
        id: 17,
        title: 'Tree Oil 30ml',
        description: 'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
        category: 'skincare',
        price: 12,
        images: [
          'https://i.dummyjson.com/data/products/17/1.jpg',
          'https://i.dummyjson.com/data/products/17/2.jpg',
          'https://i.dummyjson.com/data/products/17/3.jpg',
          'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
        ],
      },
      {
        id: 18,
        title: 'Oil Free Moisturizer 100ml',
        description: 'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
        category: 'skincare',
        price: 40,
        images: [
          'https://i.dummyjson.com/data/products/18/1.jpg',
          'https://i.dummyjson.com/data/products/18/2.jpg',
          'https://i.dummyjson.com/data/products/18/3.jpg',
          'https://i.dummyjson.com/data/products/18/4.jpg',
          'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
        ],
      },
      {
        id: 19,
        title: 'Skin Beauty Serum.',
        description: 'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
        category: 'skincare',
        price: 46,
        images: [
          'https://i.dummyjson.com/data/products/19/1.jpg',
          'https://i.dummyjson.com/data/products/19/2.jpg',
          'https://i.dummyjson.com/data/products/19/3.png',
          'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
        ],
      },
      {
        id: 20,
        title: 'Freckle Treatment Cream- 15gm',
        description: 'Fair & Clear is Pakistan\'s only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.',
        category: 'skincare',
        price: 70,
        images: [
          'https://i.dummyjson.com/data/products/20/1.jpg',
          'https://i.dummyjson.com/data/products/20/2.jpg',
          'https://i.dummyjson.com/data/products/20/3.jpg',
          'https://i.dummyjson.com/data/products/20/4.jpg',
          'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
        ],
      },
    ] as IProduct[],
    product: null,
  }),
  getters: {
    getAllProducts: (state) => {
      return state.products
    },
  },
  actions: {
    // Products
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

    async fetchSingleProduct(id: number): Promise<void> {
      this.isLoading = true
      try {
        const { data } = await useNuxtApp().$axios.get(`/products/${id}`, {
          params: {
            select: 'id,title,description,category,price,images',
          },
        })
        this.product = data

        return Promise.resolve(data)
      }
      catch (err) {
        return Promise.reject(err)
      }
      finally {
        this.isLoading = false
      }
    },

    FETCH_SINGLE_PRODUCT(id: number): void {
      this.product = this.products.find(product => product.id === id)
    },

    STORE_PRODUCT(newProduct: IProduct): void {
      this.products = [newProduct, ...this.products]
    },

    UPDATE_PRODUCT(id: number, updatedProduct: IProduct): void {
      const index = this.products.findIndex(product => product.id === id)
      if (index !== -1)
        this.products[index] = { ...this.products[index], ...updatedProduct }
      else
        console.error('Product not found')
    },

    DELETE_PRODUCT(id: number): void {
      this.products = this.products.filter(product => product.id !== id)
    },

    // Categories
    async fetchCategories(): Promise<void> {
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
  },
})
