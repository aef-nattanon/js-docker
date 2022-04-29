const polka = require('polka')
const port = process.env.PORT || 3001

polka()
  .get('/', (req, res) => {
    res.end('ok')
  })
  .listen(port, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${port}`)
  })
