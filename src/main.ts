import Address from "./entity/Address";
import Customer from "./entity/Customer";
import Order from "./entity/Order";
import OrderItem from "./entity/OrderItem";

let customer = new Customer('123', 'Tiago Cardoso')
const address = new Address('Rua Flem', '12', 'Jardim Planalto', 'Goiânia', 74333110)

customer.Address = address
customer.activate()

const item1 = new OrderItem('1', 'Item 1', 10)
const item2 = new OrderItem('2', 'Item 2', 20)
const item3 = new OrderItem('3', 'Item 3', 30)

const order = new Order('1', '123', [item1, item2, item3])