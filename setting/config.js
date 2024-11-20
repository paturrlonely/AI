const fs = require('fs')

global.owner = "6281260431003"
global.footer = " _© N-Kiuur ZcoderX 2024 - 2025_"
global.status = true //saat ini public
global.access = '6283843107764'

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})