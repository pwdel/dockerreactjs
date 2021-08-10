## Collecting Components

To design this app according to our specifications, we need three key shapes:

* [Shape Repo](https://commons.wikimedia.org/wiki/Emoji_One_colored_circles)
* [Blue Circle](https://commons.wikimedia.org/wiki/File:Eo_circle_blue_blank.svg)
* [Green Up Arrow](https://commons.wikimedia.org/wiki/File:Eo_circle_green_arrow-up.svg
)
* [Red Down Arrow](https://commons.wikimedia.org/wiki/File:Eo_circle_red_arrow-down.svg
)

To replace the standard logo at the center of the React page, we simply do the following on App.js.  Note the .svg object was "imported" as its own object.

```
import bluecircle from './bluecircle.svg';

...
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bluecircle} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.patdel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patrick Delaney Homepage
        </a>
      </header>
    </div>
  );
}
```
We will make additional modifications at will, including removing some of the text notifications and links from the App.js file.

```
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://www.patdel.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Patrick Delaney Homepage
</a>
```
To add the component itself, went to above component website, inspected element on SVG item and selected, "Copy Outer HTML" for the object itself, then copy/pasted this into its own file.


### Edit CSS For Custom Branding

There seem to be two locations where the CSS is held:

index.css holds the following:

```
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

* index.css appears to control the font and layout of everything which goes below the header, as well as, "code" sections.

Then, there's App.css, which holds several key design keys:

```
...

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

...
```

We can adjust and change the color schemes, fonts, etc. here.

### manifest.json

Per [MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest):

> Web app manifests are part of a collection of web technologies called progressive web apps (PWAs), which are websites that can be installed to a device’s homescreen without an app store. Unlike regular web apps with simple homescreen links or bookmarks, PWAs can be downloaded in advance and can work offline, as well as use regular Web APIs.

Inspecting our web app manifest we see the following:

```
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```
Inspecting the manifest, we can see that there are different icon and size selections (png files) depending upon the size of platform used - as well as favicon.ico size selections.

If we look at our mobile view we can get an idea of how this manifests itself:

![](/img/mobileview.png)

### index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```


### Creating a Custom Surrounding Interface with Prompts

Basically, we need a hamburger menu with the capability to navigate to another page which would include some form of, "selector" which allows us to select the buy, hold or sell signal on the recommendation page.

#### Adding Basic Styles

1. Create a Global style and put under [global.js](/src/global.js)
2. Create a [theme.js](/src/theme.js) file which holds our variables.
3. Add new functionality to [/src/app.js](/src/app.js), and put the old code in another file called app1.js for safekeeping.
4. Import themeprovider

Note - to get this to work we had to go to the terminal and input, "npm i styled-components"

Note that this did not actually install, "styled components," possibly because we may have been in the wrong directory, or because we were running React while attempting the command, or because we need to use Yarn. Backing out and following the tutorial a bit more:

1. We can attempt to end the app by canceling it and re-installing with npm.

It worked!  It turns out we don't have to use Yarn, we can just back out of the app and then use:

> npm i styled-components

then restart the application, and it works.

#### Creating Burger Menu and Components

### Creating Three Different Page Layouts


### Switching Page Layouts Based Upon Button


### Modifying Favicon


### reportWebVitals.js

### setupTests.js


# References

* [Creating Multi Page Website React](https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/) - notes on where routes and sofourth are kept.
* [Creating a Hamburger Menu](https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/)
* [Hamburger Menu Github](https://github.com/maximakymenko/react-burger-menu-article-app/tree/master/src)
