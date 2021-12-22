// Node.js v16.13.1
// Delete file, example 1

const fs = require('fs');

fs.unlink('file2.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted file2.txt');
});
