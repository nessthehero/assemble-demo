Setup:
	Install Node package manager modules and update bower.
	- npm install
	- bower install

Coding, testing:
	Spins up a server, starts compass, auto refreshes on save.
	- grunt server

	Runs JSLint, maybe other validations down the road.
	- grunt check

Build:
	Compresses and concatenates all files and copies them to ./dist.
	- grunt

Deploy:
	Deploys the built code to deploy/site/_files
	- grunt deploy