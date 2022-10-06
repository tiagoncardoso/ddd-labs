import OrderItem from "./OrderItem"

describe('Order unit tests', () => {
    it('Should trhow error when item quantity is equal or less than zero', () => {
        expect(() => {
            let item1 = new OrderItem('1', '23', 'carro', 1000, 0)
        }).toThrowError('Item quantity cannot be equal or less than zero')
    })
})