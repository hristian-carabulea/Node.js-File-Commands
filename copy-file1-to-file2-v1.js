// Node.js v16.13.1
// Copy file 1 to file 2, example 1

const fs = require('fs');

fs.copyFile('file1.txt', 'file2.txt', (err) => {
   if (err) throw err;
   console.log('successfully copied file1.txt to file2.txt');
});
