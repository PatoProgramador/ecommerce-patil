import { AppApiGateway } from '@app/api-gateways/app.api-gateway'
import { IProductDto } from '@mod/product-detail/services/product.dto'

export class ProductService {
  static getProducts (): IProductDto[] {
    let res

    const response: IProductDto[] = AppApiGateway.getProducts()

    if (response.length > 0) {
      res = response
      return res
    } else {
      throw new Error('No hay productos por mostrar :(')
    }
  }

  static getProductById (id:number): IProductDto {
    let res

    const response: IProductDto | undefined = AppApiGateway.getProductById(id)

    if (response !== undefined) {
      res = response
      return res
    } else {
      throw new Error('No existe el producto con este id :(')
    }
  }
}
