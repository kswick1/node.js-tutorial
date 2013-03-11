var fs = require("fs");

function showImage(pathname){
	console.log("Request handler 'show image' was called.");
	fs.readFile(pathname, "binary", function(error, file) {
	if(error) {
		response.writeHead(500, {"Content-Type": "text/plain"});
		response.write(error + "\n");
		response.end();
	} else {
		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(file, "binary");
		response.end();
		}
	});
}

exports = fileTypes;