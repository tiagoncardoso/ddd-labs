import Product from "../domain/entity/Product"
import OrderService from "./Product.service"

describe('Product service unit tests', () => {
    it('should change prices of all products', () => {
        const products = [
            new Product('23', 'Farinha', 100),
            new Product('24', 'Lasanha', 200)
        ]

        OrderService.increasePrice(products, 100)
        const [product1, product2] = products

        expect(product1.price).toBe(200)
        expect(product2.price).toBe(400)
    })
})