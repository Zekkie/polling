
const scoreElement = document.getElementById("score");

function poll() {
	const xhr = new XMLHttpRequest();

	let polling = false;
	const timeout = setTimeout(() =>{
		
		polling = true;

		xhr.open("GET", "http://localhost:2000/poll", true);
		xhr.send();
		
	},1000)
	xhr.onreadystatechange = function(e) {

	if(e.currentTarget.readyState > 3) {
		const score = JSON.parse(e.currentTarget.response).score;

		console.log(score)
		scoreElement.innerHTML = score;
	}
		
	}

	xhr.onloadend = function(e) {
		poll();
	}
}

poll();

