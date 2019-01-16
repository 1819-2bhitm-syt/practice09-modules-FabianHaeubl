const readline = require('readline');
const fs = require('fs');

let filename = `teachers.csv`;

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
    let firstName = "";
    let lastName = "";
    for(line of compressedLines){
        for(let i = 0; i < line.length; i++){

            if(i == ";"){
                for(let j = i - 1; j => 0; j--){
                    let firstName =+ line.charAt(j);
                }
                for(let j = i; j < line.length; j++){
                    let lastName =+ line.charAt(j);
                }
            }
        }
        console.log(firstName+", "+lastName);
    }
});

console.log(`---------------------------------
email addresses
---------------------------------`);



function getMailAddress(firstName, lastName){
    firstName.toLowerCase();
    lastName.toLowerCase();

    lastName.replace("ä", "ae");
    lastName.replace("ö", "oe");
    lastName.replace("ü", "ue");


}
