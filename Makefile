

build:
	docker image build -t s-and-s .

run:
	docker container run -d -p 3000:3000 --rm --name s-and-s s-and-s:latest

tag:
	docker tag s-and-s:latest corykitchens/s-and-s:latest

publish: tag
	docker image push corykitchens/s-and-s:latest