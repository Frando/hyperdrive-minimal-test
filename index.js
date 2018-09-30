const hyperdrive = require('hyperdrive')
const drive = hyperdrive('./drive')
drive.mkdir('/test', (err, res) => {
  console.log('mkdir', err, res)
  drive.readdir('/', (err, names) => console.log(err, names))
})
