//Destructuring
const {vowels, name_of_person} = require("./Data");
console.log(vowels,name_of_person);

// Operating System Module
const operating_system_module = require('os');
console.log(operating_system_module.platform(), operating_system_module.homedir());

//File System Module
const filesystem = require('fs');

// //reading file
FileSystem.readFile('./docs/first.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//writing file
filesystem.writeFile('./docs/first.txt', 'Hello Node.js', 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

filesystem.writeFile('./docs/second.txt', 'Hello Node.js', 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// Directories
if (!filesystem.existsSync('./docs/testfiles')){
filesystem.mkdir('./docs/testfiles', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Folder Created')
});
}else{
  filesystem.rmdir('./docs/testfiles', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Folder Deleted');
  });
}

// Deleting Files
filesystem.unlink('./docs/second.txt', (err) => {
  if (err) throw err;
  console.log('./docs/second.txt was deleted');
});


// Streams and buffers
const readable = filesystem.createReadStream('./docs/first.txt');
const writable = filesystem.createWriteStream('./docs/second.txt');
readable.pipe(writable);

