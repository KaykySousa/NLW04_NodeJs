import request from 'supertest'
import { getConnection } from 'typeorm'
import { app } from '../app'

import createConnection from '../database/index'

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.dropDatabase()
        await connection.close()
    })

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "Aubree.Legros@example.net",
            name: "Aubree.Legros"
        })

        expect(response.status).toBe(201)
    })

    it("Shouldn't be able to create a user width exists email", async () => {
        const response = await request(app).post("/users").send({
            email: "Aubree.Legros@example.net",
            name: "Aubree.Legros"
        })

        expect(response.status).toBe(400)
    })

})