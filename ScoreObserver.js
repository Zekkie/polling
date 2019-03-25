class ScoreObserver {
	constructor() {
		//list of pending requests
		this.requests = []
	}

	notify(data) {
		this.requests.forEach((r) => {

			//respond to the request
			r.send(data);
			r.end();
		})
		//flush requests that are responded to
		this.requests = [];
	}

	subscribe(request) {
		this.requests.push(request);
	}
}

module.exports = ScoreObserver;