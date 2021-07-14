import app from './app'

const host = 'localhost'
const port = 3333

app.listen(port, () => console.log(`Started server in http://${host}:${port}/`))
