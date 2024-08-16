import mockData from '@mod/mockData.json'
import { IProductDto } from '@mod/product-detail/services/product.dto'

export class AppApiGateway {
  static getProducts (): IProductDto[] {
    const products: IProductDto[] = []

    for (const data of mockData) {
      const product: IProductDto = {
        id: data.id || 0,
        name: data.name || '',
        description: data.description || '',
        price: data.price || 0,
        category: data.category || '',
        inStock: data.inStock || false,
        imageURL: data.imageURL || ''
      }

      products.push(product)
    }

    return products
  }
}
