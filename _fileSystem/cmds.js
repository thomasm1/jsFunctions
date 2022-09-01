const fs = require('fs') 

////////////  FS
    // flags <str>
    // encoding  <str>
    // fd <int>
    // mode <int>
    // autoClsoe <boolean>
    // start <int>
    // end <int> 
    let path = 'filepath.txt';
    let data = 'this is written from string\n';
    let buf = Buffer.from('this is written from buffer\n', 'utf8');
    const dirfile = "dir.txt"
    const flagsfile = "flags.txt"
fs.open(flagsfile, "r+", (err, fd)=>{
    if(err){
        console.log(`code ${err.code}, message${err.message}`)
    } else {
        console.log(`file d "fd" ... ${fd} opened!`);
        fs.close(fd, (err)=>{
            console.log("file close!")
        });
    }
});
fs.open(dirfile, "r+", (err, fd) => {
    if(err) {
        console.log("err 1...")
    } else {
        console.log("file"+fd+"OPENED");
        fs.read(fd, buf, 0, filesize, 0, (err, bytes) => {
            if(err){
                console.log("err 2")
            } else {                
                console.log(`bytes: ${bytes}`);
                console.log(`CONTENT: ${buf.toString()}`);
            }
        });
        fs.close(fd, (err) =>{
            console.log("manually opened, and now manually CLOSED!")
        })    
    }
})
    // fs.statSync(path)
let stats = fs.statSync(dirfile);
console.log(stats);
let filesize = fs.statSync(dirfile).size;
let bufNew = new Buffer(filesize);
    // fs.stat(path, callback)
fs.stat(flagsfile, (err, stats)=>{
    if(err){
        throw err;
    } else {
        console.dir(stats, {colors:true });
    }
});
fs.readFile('calc.js', 'utf8', function (err, data) {
    console.log(data)
})  

    // fs.writeFileSync(file, data[, options]) // no callback
    // fs.writeFile(file, data[, options: encoding, flag, mode], callback)
fs.writeFile(path, data, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('data written successfully');
    }
})
fs.appendFile('calc.js', 'console.log("done")', function(err){
    console.log("data saves")
})
fs.unlink('calc1.js', function(err){
    console.log('Deleted!')
})
    // fs.readdirSync()
let directory = './TextFiles';
let dirBuf = Buffer.from(directory);
let files = fs.readdirSync(directory, 'buffer');
console.log(files);
    // fs.mkdirSync()
const dirnames = {
    sync: "createdDir",
    async: "asyncCreatedDir"
};
fs.mkdirSync(dirnames.sync, 0o776);
 
// fs.createReadStream(path[ , options])
/* const defaults = {
    flags: 'n'
    encoding: null,
    fd: null,
    mode: 0o666
    autoClose: true
}    */

let readstream = fs.createReadStream('./path/filepath.txt', { highWaterMark:30,encoding:'utf8'})
readstream.on('string', (data) => {
    console.log(data.split(" "));
})
readstream.on('data', (data) => {
    if(data.indexOf('buffer') === -1) {
        console.log(data.toUpperCase());  // data.toString();
        readstream.emit('string', data);
    } else {
        console.log(`length: ${data.length}`);
    }
})