### Adding Messages to Homepage and Recommendation Page

Within the return function we display either a buy, sell or hold field:

```
<div>
  <p>Today's $FCNTX Recommendation</p>
  <SvgBluecircle width="350" height="auto" />
  <h1>Hold</h1>
</div>
```

### Modifying Favicon

Basically, modify all of the specified favicons and logos in the, "public" file and keep the name the same.

To move quickly, I used [Favicon.io](https://favicon.io/emoji-favicons/blue-circle).

### reportWebVitals.js

Not needed at this time.

### setupTests.js

Not needed at this time.

### Deploying on Docker

After finishing up the app, build the image using the Docker procedure established previously:

```
docker build -t sample:dev .
```
After building everything, we get a lot of deprecated package warnings, however it deployed successfully on localhost:3001 with:

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

### Deploying on Heroku
