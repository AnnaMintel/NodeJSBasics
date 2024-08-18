const fileSystem = require("fs");

// reading info from the file
fileSystem.readFile("some.txt", "utf-8", (err, data) => {
  // create file and save data into
  fileSystem.writeFile("some.txt", data + "\nSome text", (err, data) => {
    console.log("This function is working!");
  });
});
