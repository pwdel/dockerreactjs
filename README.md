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

#### Another Side Note - Jinja vs. React

React vs. Jinja for flask applications - why would you want to use React when you could just use Jinja?

Jinja is a server-side template rendering engine while React is client-side.

> Jinja makes sense when you can't do much on the client other than render pages. Nowadays clients, even on phones, can do a lot more than they used to. Therefore it makes sense to use that to improve the user experience. For example, you can check inputs as they are being typed or you can use controls to draw to canvas. All of these sorts of dynamic things can't be done with Jinja-rendered templates alone.

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
In a normal, non-docker environment, this error would come from missing a line in the package.json file, essentially a script which tells the application to start. In our example so far, our package.json file is completely blank.

One quick observation while attempting to diagnose this is that having to run npm install AFTER modifying package.json is very time consuming. For the time being, to eliminate the long wait time between cycles, it might make more sense to order the Dockerfile like so, until we need to put actual dependencies together:

```
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY package.json ./
COPY package-lock.json ./
```
Once we have actual dependencies that we need to install, we could re-arrange the dockerfile with npm install after running COPY package.json.

Once we modify package.json to include some reference to a script, the container seems to build properly, but since we don't have any actual script, we get:

```
Error: Cannot find module '/app/your-script.js'
```
To understand the basics of what kind of script would be needed to run something, we started a [node tutorial](/notes/nodejstutorial.md).

After building a simple, runnable script and testing it on node without docker, we then run a build, having modified our package.json such that the start script points to app/main:

```
{
  "scripts": {
      "start": "app/main.js"
  }
}
```
We then get a permission denied error.  This appears to be a Docker problem, in which the file must be written as an executable, rather than a node problem. Essentially Docker is a linux environment (alpine) so we have to try something like the following:

```
RUN ["chmod", "+x", "executable.sh"]
```
Where executable.sh is a shell file that goes and starts the node file.  Note, the original line:

```
CMD ["npm", "start"]
```
..."start" refers to the start within the start package.json - "start": "app/main.js"

On the other hand, this may be a node error, as [this stackoverflow thread](https://stackoverflow.com/questions/51811564/sh-1-node-permission-denied) seems to indicate that the solution seems to be to run npm under a root account.

This stackoverflow exchange seems to indicate that [you can set up a temporary sudo user to execute npm installations, and there may be some caching issues to work thorough](https://stackoverflow.com/questions/21906419/dockerfile-npm-create-a-sudo-user-to-run-npm-install).


```
sh: app/main.js: Permission denied
npm ERR! code ELIFECYCLE
npm ERR! errno 126
npm ERR! @ start: `app/main.js`
npm ERR! Exit status 126

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
