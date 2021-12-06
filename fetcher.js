const request = require('request');
const fs = require('fs');
const data = process.argv.slice(2);
//const { pathToFileURL } = require('url');
const linkSendDataFrom = data[0];
const pathOfFile = data[1];


request(linkSendDataFrom, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    fs.writeFile(pathOfFile, body, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${pathOfFile}`);
      }
    });

  }
});