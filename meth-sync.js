const {readFileSync, writeFileSync}= require('fs')

const f=readFileSync('./content/first.txt','utf8') 
const s=readFileSync('./content/secd.txt','utf8') 

writeFileSync(
    './content/res.txt',`here is the result: ${f},${s}`,{flag: 'a'}
)