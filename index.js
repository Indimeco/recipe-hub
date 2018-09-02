// TODO
// Abstract repeated html elements into components, build pages using those instead (if possible)
// Create data structure for application (login, local storage, server storage, format, etc)
// Write CSS for layout of application
// Add react for App HTML

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