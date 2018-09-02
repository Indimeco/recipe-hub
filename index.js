const express = require('express');

const app = express();

app.get('/', serveStatic('/static/home.html'));
app.use(express.static(__dirname+'/'+'static'));

let server = app.listen(8081, function () {
   let host = server.address().address
   let port = server.address().port
   
   console.log(`App listening at http://${host}:${port}`);
});

function serveStatic(fileName){
	return (request, response) => {response.sendFile(`${__dirname}/${fileName}`);}
}