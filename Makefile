git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
all: test
install:
	@npm install
travis: build-docker
start: install
build-docker:
	docker build . -t="test"
docker-run-dev:
	docker run -it -p 8080:8080 --entrypoint=/bin/bash test
docker-run:
	docker run -it -p 8080:8080 test