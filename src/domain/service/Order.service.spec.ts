import Customer from "../domain/entity/Customer"
import Order from "../domain/entity/Order"
import OrderItem from "../domain/entity/OrderItem"
import OrderService from "./Order.service"

describe('Order Service unit tests', () => {
    const items = [
        new OrderItem('1', '2', 'abacate', 100, 3),
        new OrderItem('2', '3', 'limão', 200, 2),
        new OrderItem('3', '4', 'banana', 300, 1),
        new OrderItem('4', '5', 'maçã', 400, 1),
    ]
    const customer = new Customer('123', 'Binngo')

    it('should create a new Order', () => {        
        const order = OrderService.createOrder(customer, items.slice(2, 3))
        
        expect(customer.rewardPoints).toBe(150)
        expect(order.total()).toBe(300)

    })

    it('should throw error when create order with empty items list', () => {
        expect(() => {
            const order = OrderService.createOrder(customer, [])
        }).toThrowError('Order must have at least one item')
    })

    it('should return a sum of all orders', () => {
        const orders = [
            new Order('100', '1', items.slice(0, 2)),
            new Order('101', '95', items.slice(-2)),
            new Order('102', '73', items.slice(1, 3)),
        ]

        expect(OrderService.total(orders)).toBe(2100)
    })
})
