const hyperdrive = require('hyperdrive')
const drive = hyperdrive('./drive')
const tape = require('tape')

tape('mkdir', (t) => {
  drive.mkdir('/test', (err, res) => {
    console.log('mkdir', err, res)
    drive.readdir('/', (err, names) => {
      t.error(err, 'no err')
      t.equal(names[0], 'test', 'dir was created')
      t.end()
    })
  })
})
