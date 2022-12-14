import Address from "./Address"

export default class Customer {
    private _id: string
    private _name: string = ''
    private _address!: Address;
    private _active: boolean = false
    private _rewardPoints = 0

    constructor(id: string, name: string) {
        this._id = id
        this._name = name

        this.validate()
    }

    set Address(address: Address) {
        this._address = address
    }

    get id() {
        return this._id 
    }

    get name() {
        return this._name
    }

    get isActive() {
        return this._active
    }

    get Address() {
        return this._address
    }

    get rewardPoints() {
        return this._rewardPoints
    }

    validate() {
        if (!this._id.length) {
            throw new Error('Id is required')
        }

        if (!this._name.length) {
            throw new Error('Name is required')
        }
    }

    changeName(name: string) {
        this._name = name
        this.validate()
    }

    activate() {
        if (this._address === undefined) {
            throw new Error('Address is mandatory to activate a customer')
        }
        this._active = true
    }

    deactivate() {
        this._active = false
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points
    }
}