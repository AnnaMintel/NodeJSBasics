const fs = require("fs");

//fs.mkdirSync('test_files');
fs.mkdir('folder_1', () => {
    fs.writeFile('./folder_1/aloha.txt', 'Hello', () => { })
}) 

// Create directory named 'text-files' and write a file in it
fs.mkdir('folder_2', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    fs.writeFile('./folder_2/new.txt', 'Aloha', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File created successfully!');
        }
    });
});

// creating folders with unique id
const currentDate = new Date();
const milliseconds = currentDate.getTime();

fs.mkdir(`text-files-${milliseconds}`, () => {
  fs.writeFile(`./text-files-${milliseconds}/new.txt`, "Hello", () => {
    console.log("Success" + milliseconds);
  });
});

// deleting folders
fs.unlink('./hello/hello.txt', () => {
    fs.rmdir('./hello', () => {})
})