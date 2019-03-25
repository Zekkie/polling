class ScoreObserver {
	constructor() {
		this.requests = []
	}

	notify(data) {
		this.requests.forEach((r) => {
			r.send(data);
			r.end();
		})

		this.requests = [];
	}

	subscribe(request) {
		console.log("new request has been subbed")
		this.requests.push(request);
	}
}

module.exports = ScoreObserver;