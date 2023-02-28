const { log } = require('console')
const os= require('os')

console.log(os.uptime());

const curOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(curOS);