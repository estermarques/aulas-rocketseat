import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello Focuscus'})
})

export default routes