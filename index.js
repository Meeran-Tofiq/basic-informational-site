const http = require("http");
const URL = require("node:url").URL;
const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

app.use((req, res, next) => {
	const filename = req.url === "/" ? "index.html" : `.${req.url}.html`;

	fs.readFile(filename, function (err, data) {
		if (err) {
			res.writeHead(404, { "Content-Type": "text/html" });
			return res.write(
				`<h1>Error: 404</h1><p>The page you are looking for doesn't exist.</p> <a href="/">Back home.</a>`
			);
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

app.listen(port, function () {
	console.log("hello");
});

// app.get("/", function (req, res) {
// 	res.writeHead(200, { "Content-Type": "text/html" });
// 	res.write(data);
// 	return res.end();
// });

// http.createServer(function (req, res) {
// 	const filename = req.url === "/" ? "index.html" : `.${req.url}.html`;

// 	fs.readFile(filename, function (err, data) {
// 		if (err) {
// 			res.writeHead(404, { "Content-Type": "text/html" });
// 			return res.write(
// 				`<h1>Error: 404</h1><p>The page you are looking for doesn't exist.</p> <a href="/">Back home.</a>`
// 			);
// 		}
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write(data);
// 		return res.end();
// 	});
// }).listen(8080);
