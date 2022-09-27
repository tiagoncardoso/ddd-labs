import Address from "./Address"
import Customer from "./Customer"

describe('Customer unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            const customer = new Customer('', 'John')
        }).toThrowError('Id is required')
    })

    it('should throw error when name is empty', () => {
        expect(() => {
            const customer = new Customer('123', '')
        }).toThrowError('Name is required')
    })
    

    it('should change name', () => {
        // Arrange
        const customer = new Customer('123', 'Binngo')

        // Act
        customer.changeName('Lua')

        // Assert
        expect(customer.name).toBe('Lua')
    })

    it('should return a address instance', () => {
        const customer = new Customer('654', 'Zach')
        const address = new Address('Rua João Carlos', '12', 'Lorena Park', 'Goiânia', 74483660)

        customer.Address = address

        expect(customer.Address).toBeDefined()
    })

    it('should be activate a customer', () => {
        const customer = new Customer('654', 'Zach')
        const address = new Address('Rua João Carlos', '12', 'Lorena Park', 'Goiânia', 74483660)

        customer.Address = address
        customer.activate()

        expect(customer.isActive).toBe(true)
    })

    it('should be throw a error when activate a customer without address', () => {
        expect(() => {
            const customer = new Customer('654', 'Zach')
            customer.activate() 
        }).toThrowError('Address is mandatory to activate a customer')
    })

    it('should deactivate a customer', () => {
        const customer = new Customer('556', 'Paul')

        customer.deactivate()

        expect(customer.isActive).toBeFalsy()
    })
})