process.env.PORT = 2000;

const express = require("express");

const app = express();





app.use(express.static("public"));
const ScoreObserver = require("./ScoreObserver.js");
const observer = new ScoreObserver();


const data = {
	score: 5,
}





//fake score generator


setInterval(function() {
	data.score += 1;
	console.log("scored")

	//notifies the pending requests on a score
	observer.notify(data)
}, 10000);





app.get("/", (req, res) => {
	res.sendfile("./public/index.html");
})


//adds requests to the observer
app.get("/poll", (req, res) => {
	observer.subscribe(res);

})



app.listen(process.env.PORT, () => {
	console.log("RUNNING ON PORT: " + process.env.PORT)
})