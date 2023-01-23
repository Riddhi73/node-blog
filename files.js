// reading files
const fs = require("fs");

// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// }); // asynchronous function

// console.log('last line')
// writing files

fs.writeFile("./docs/blog.txt", "hello,world", () =>
  console.log("file is written")
);

fs.writeFile("./docs/blog1.txt", "hello,world", () =>
  console.log("file is written")
);
// directories
fs.mkdir('./assets', (err) => {
    if(err) console.log(err)
    console.log('folder created')
})
// deleting files
