const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });


  fs.readFile('./test.csv', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  