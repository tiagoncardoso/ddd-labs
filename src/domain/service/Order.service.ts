import { v4 as uuidv4 } from 'uuid'
import Customer from "../domain/entity/Customer";
import Order from "../domain/entity/Order";
import OrderItem from "../domain/entity/OrderItem";

export default class OrderService {

    static total(orders: Array<Order>): number {
        return orders.reduce((acumulator, order) => acumulator + order.total(), 0)
    }

    static createOrder(customer: Customer, items: Array<OrderItem>): Order {
        if (items.length === 0) {
            throw new Error("Order must have at least one item")
        }

        const order = new Order(uuidv4(), customer.id, items)
        customer.addRewardPoints(order.total() / 2)

        return order
    }
}