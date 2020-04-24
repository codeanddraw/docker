1. Create Dockerfile
2. docker build -t username/circle-area:3.0 .
3. docker push username/circle-area
4. docker run -e diameter=9 username/circle-area:3.0
5. docker run -e diameter=2 username/circle-area:3.0
6. docker run -e diameter=11 --rm -it username/circle-area:3.0 //This container will get removed after it completes running'
7. docker tag oldname repo/oldname //use to tag images again with repo name
