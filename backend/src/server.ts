import app from './app'
import { env } from './env'

const host = env('SERVER_HOST') || 'localhost'
const port = env('SERVER_PORT') || 3333

app.listen(port, () => console.log(`Started server in http://${host}:${port}/`))
