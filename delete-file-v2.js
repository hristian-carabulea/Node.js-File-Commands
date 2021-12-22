// Node.js v16.13.1
// Delete file, example 2

const { unlink } = require('fs');

unlink('file2.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted file2.txt');
});
