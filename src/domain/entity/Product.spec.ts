import Product from './Product'

describe('Product unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            const product = new Product('', 'Café', 100)
        }).toThrowError('Id is required')
    })

    it('should throw error when name is empty', () => {
        expect(() => {
            const product = new Product('123', '', 100)
        }).toThrowError('Name is required')
    })

    it('should throw error when price is less than zero', () => {
        expect(() => {
            const product = new Product('123', 'ooola', -1)
        }).toThrowError('Price must be greater than zero')
    })

    it('should change name', () => {
        const product = new Product('123', 'ooola', 100)
        product.changeName('aaalo')

        expect(product.name).toBe('aaalo')
    })

    it('should change price', () => {
        const product = new Product('123', 'ooola', 100)
        product.changePrice(150)

        expect(product.price).toBe(150)
    })
})