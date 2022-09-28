import Product from "../entity/Product";

export default class ProductService {
    static increasePrice(products: Array<Product>, percentage: number): void {
        products.forEach((product) => {
            product.changePrice((product.price * percentage) / 100 + product.price)
        })
    }
}