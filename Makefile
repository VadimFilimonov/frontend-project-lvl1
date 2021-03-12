install:
	npm install

lint:
	npx editorconfig-checker
	npx eslint bin/*
	npx eslint src/*

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js
