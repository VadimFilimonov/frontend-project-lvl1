install:
	npm install

lint:
	npx eslint bin/*

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js
