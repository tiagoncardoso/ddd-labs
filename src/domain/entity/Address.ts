export default class Address {
    _street: string
    _number: string
    _neighborhood: string
    _city: string
    _zipCode: number

    constructor(street: string, number: string, neighborhood: string, city: string, zipCode: number) {
        this._street = street
        this._number = number
        this._neighborhood = neighborhood
        this._city = city
        this._zipCode = zipCode
    }
}