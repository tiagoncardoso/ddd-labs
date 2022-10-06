import OrderItem from "./OrderItem"

export default class Order {
    private _id: string
    private _customerId: string
    private _items: OrderItem[] = []

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id
        this._customerId = customerId
        this._items = items

        this.validate()
    }

    total(): number {
        return this._items.reduce((acumulator, item) => acumulator + (item.price * item.quantity), 0)
    }

    validate() {
        if (this._id === '') {
            throw new Error('Id is required')
        }

        if (!this._customerId) {
            throw new Error('Customer Id is required')
        }

        if(!this._items.length) {
            throw new Error('Items cannot be empty')
        }
    }

}