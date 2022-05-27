import express from 'express'
import { routes } from './routes'
import { startTracking } from './Webscraping'

const app = express()
const port = 3333

app.use(express.json())
app.use(routes)


startTracking()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})