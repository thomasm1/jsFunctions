// fs.open(path, flag, [mode], callback)
// fs.openSync(path, flag, [mode]) Synchonous

const dirFile = "dir.txt"
const flagsFile = "flags.txt"

const fs = require("fs");

let stats = fs.statSync(dirFile);
console.log(stats.info)

fs.open(flagsFile, "r+", (err, fd) => {
    if (err) {
        console.log(`code: ${err.code}\nmessage: ${err.message}`)
    } else {
        console.log(`File ${fd}) opened`)
        fs.close(fd, (err) => {
            console.log("File closed")
        })
    }
})


