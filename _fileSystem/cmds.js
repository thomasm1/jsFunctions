const fs = require('fs')

fs.readFile('calc.js', 'utf8', function(err, data) {
    console.log(data)
}) 

fs.writeFile('cal.js', 'console.log("new code")', function (err) {
    console.log("saved")
})
fs.appendFile('cal.js','console.log("done")',function(err) {
    console.log("appended")
})
fs.unlink('deleteme.js', function(err) {
    console.log("deleted")
})