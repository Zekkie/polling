process.env.PORT = 2000;

const express = require("express");

const app = express();





app.use(express.static("public"));
const ScoreObserver = require("./ScoreObserver.js");
const observer = new ScoreObserver();


const data = {
	score: 5,
}





const listener = (res) => {
	console.log("whoops")
	messageBus.once("message", (d) => {
		res.send(d)
	})
}


setInterval(function() {
	data.score += 1;
	console.log("scored")
	observer.notify(data)
}, 10000);





app.get("/", (req, res) => {
	res.sendfile("./public/index.html");
})



app.get("/poll", (req, res) => {
	observer.subscribe(res);

})



app.listen(process.env.PORT, () => {
	console.log("RUNNING ON PORT: " + process.env.PORT)
})