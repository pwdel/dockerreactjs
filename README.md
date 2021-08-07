# Docker + ReactJS

### Notes and Background About React and Node

* React - It's principlally a front end library.
* Node - Excellent choice for backend since it is asynchronous, has non-blocking I/O, and is event-driven nature. Also has front end capability.
* Together Using NPM, Node works alongside the NPM registry to easily install any package through the NPM CLI. Node bundles a React application into a single file for easy compilation using webpack and several other Node modules.

#### Side Note - the MERN Stack and How Things Could Differ

* MongoDB - document database
* Express(.js) - Node.js web framework
* React(.js) - a client-side JavaScript framework - frameworks provides you the skeleton of an application, including pre-built code to listen at a port, parse HTTP requests, and format HTTP responses.
* Node(.js) - the premier JavaScript web server - web server responds to HTTP requests, sending back the data the request asked for.

In the case of Flask, - Flask is the framework, whereas Werkzeug is the Web Server Gateway Interface (WSGI), whereas the server may be Ngnix. In python, they use WSGI as an attempt to standardize things, whereas Node has everything architected directly in Javascript, custom for Node and there is no WSGI standard. Another example of an alternate WSGI in python is Gunicorn.

### Installing React Globally

1. Install NPM globally on Ubuntu.

```
sudo apt install npm
```
2. Install react globally on Ubuntu.

```
sudo npm install -g create-react-app@3.4.1
```
3. Create [dockerfile](/Dockerfile)
4. Create [dockerignore](/.dockerignore)
5. Build and run dev version.

```
docker build -t sample:dev .

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

Note - the above Dockerfile as initially created doesn't work because of the following line:

> COPY package.json ./

Basically, we get an error saying that the package doesn't exist, and same for "package-lock.json" - so, we created files in the root directory with those titles (just blank files). These are presumably analogous to gemfiles or requirements.txt in python.

After doing that, the build passed - however, we get:

> The command '/bin/sh -c npm install --silent' returned a non-zero code: 1

So, we removed "--silent" from the dockerfile as well as all references to it.  After doing so, the dockerfile moved forward.  However, we get another error, stating that the package.json files need to be in json format.

After this point, the build seems to run, but we get the following package.json warnings:

```
npm WARN app No description
npm WARN app No repository field.
npm WARN app No license field.
```
Additionally, we get a number of deprecated package warnings, but ultimately the build is successful.

After attempting to run the docker build command we get the following error:

```
npm ERR! missing script: start
```


6. If you want to use docker-compose...create docker-compose yml file.

```
version: '3.7'

services:

  sample:
    container_name: sample
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - '.:/app'
      - '/app/node_modules'
    ports:
      - 3001:3000
    environment:
      - CHOKIDAR_USEPOLLING=true

```
7. Build with docker compose:

```
docker-compose up -d --build
```
8. Create prod dockerfile.

9. Build prod dockerfile.

```
docker build -f Dockerfile.prod -t sample:prod .
```

10. Start prod container.

```
docker run -it --rm -p 1337:80 sample:prod
```
11. Create docker-compose prod yml.

12. Run prod container with docker-compose

```
docker-compose -f docker-compose.prod.yml up -d --build
```
14. React Router

# References

1. [Using React and Node](https://www.simform.com/use-nodejs-with-react/)
2. [Dockerizing a React App](https://mherman.org/blog/dockerizing-a-react-app/)
