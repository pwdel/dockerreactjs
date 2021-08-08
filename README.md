# Prerequisites

* Docker

# Quick Install

1. With terminal, navigate to "/app" - the folder with Dockerfile in it.
2. Run in the '/app' directory:

```
$ docker build -t ps-container:dev .
```

3. After image is built, run:

```
sudo docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
ps-container:dev
```
