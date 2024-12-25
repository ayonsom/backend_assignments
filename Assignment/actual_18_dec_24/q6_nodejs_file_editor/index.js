const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const filePath = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read':
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file '${filePath}':`, err.message);
      } else {
        console.log(data);
      }
    });
    break;

  case 'delete':
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file '${filePath}':`, err.message);
      } else {
        console.log(`File '${filePath}' deleted`);
      }
    });
    break;

  case 'create':
    fs.writeFile(filePath, '', (err) => {
      if (err) {
        console.error(`Error creating file '${filePath}':`, err.message);
      } else {
        console.log(`File '${filePath}' created`);
      }
    });
    break;

  case 'append':
    fs.appendFile(filePath, `\n${content}`, (err) => {
      if (err) {
        console.error(`Error appending content to file '${filePath}':`, err.message);
      } else {
        console.log(`Content appended to the file '${filePath}'`);
      }
    });
    break;

  case 'rename':
    const newFilePath = process.argv[4];
    fs.rename(filePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming file '${filePath}' to '${newFilePath}':`, err.message);
      } else {
        console.log(`File '${filePath}' renamed to '${newFilePath}'`);
      }
    });
    break;

  case 'list':
    fs.readdir(filePath, (err, files) => {
      if (err) {
        console.error(`Error listing directory '${filePath}':`, err.message);
      } else {
        files.forEach(file => {
          console.log(file);
        });
      }
    });
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}
