import Order from "./Order"
import OrderItem from "./OrderItem"

describe('Order unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let order = new Order('', '123', [])
        }).toThrowError('Id is required')
    })

    it('Should throw error when customerId is empty', () => {
        expect(() => {
            let order = new Order('12', '', [])
        }).toThrowError('Customer Id is required')
    })

    it('Should trhow error when item length is zero', () => {
        expect(() => {
            let order = new Order('12', '6651', [])
        }).toThrowError('Items cannot be empty')
    })

    it('Should calculate', () => {
        let item1 = new OrderItem('1', '23', 'carro', 1000, 3)
        let item2 = new OrderItem('2', '45', 'bicicleta', 2000, 5)

        let order = new Order('12', '32132', [item1, item2])

        expect(order.total()).toBe(13000)
    })
})