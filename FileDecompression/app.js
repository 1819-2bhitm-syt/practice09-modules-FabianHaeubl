const readline = require('readline');
const fs = require('fs');

let filename = `compressed.txt`;

const rl = readline.createInterface({
    input: fs.createReadStream(filename),
    crlfDelay: Infinity
});
let compressedLines = [];
rl.on('line', (line) => {
    //console.log(`Line from file: ${line}`);
    compressedLines.push(line);
});

rl.on('close', () => {
   for(line of compressedLines){
        console.log(decompress(line));
   }
});

function decompress(line){
    let letter = line.charAt(0);
    let l = line.substring(1, line.length);
    let zahl = parseInt(l);
    let decompressed = "";

    for(i = 0; i < zahl; i++){
        decompressed += letter;
    }
    return decompressed;
}