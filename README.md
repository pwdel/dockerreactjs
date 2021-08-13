# Prerequisites

* Docker

# Quick Install - Docker Version

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
# Running React Only

To run the react app only, without docker, navigate to the /app file and enter:

```
$ npm start
```

# Demo Deployment:

[morning-escarpment-67260.herokuapp.com](https://morning-escarpment-67260.herokuapp.com/)

# Images


# Notes

Prodution build was not used on the Demo Deployment, only dev build.
