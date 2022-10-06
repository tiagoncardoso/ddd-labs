import { Sequelize } from 'sequelize-typescript'

describe('ProductRepository test', () => {
    let sequelize: Sequelize

    beforeEach(async() => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'memory',
            logging: false,
            sync: {force: true},
        })
    })

    afterAll(async () => {
        await sequelize.close()
    })
})