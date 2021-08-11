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

1. Create a "Components" folder inside of /src.
2. Put a Buger and Menu folder in that folder as well as index.js.

> index.js will be used for one purpose: allow us to import components from one file, which is very handy, especially when you have a lot of them.

In index.js we put:

```
// index.js
export { default } from './Burger';
```
3. Create [Burger.styled.js](/app/src/components/Burger/Burger.styled.js).  In this file we put styling components relating to what the little menu itself will look like. It's a defined button with children of defined height and width, essentially.

> side note - The transform-origin property will be needed later to animate the menu it toggles between open and closed states.


4. Create burger.js for the layout in the Burger folder.

Within burger.js we have the following, to import the StyledBurger:

```
// Burger.js
import React from 'react';
import { StyledBurger } from './Burger.styled';

const Burger = () => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;
```

5. Finally, got to Burger.js and add:

```
// Burger.js
import React from 'react';
import { StyledBurger } from './Burger.styled';

const Burger = () => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;
```
After performing the above, we don't see a menu yet, but it appears we have to perform the same for, "Menu" - creating a /Menu/index.js, Menu.js and Menu.styled.js.

After completing this we get the following:

```
./src/components/Menu/index.js
Attempted import error: 'default' is not exported from './Menu'.
```

It appears that the wrong code, the Menu.styled.js code was copied into the Menu.js file, rather than the actual Menu.js application.

After clearing this hurdle we see the following outputs on the terminal/processor:

```
src/App.js
  Line 7:10:  'Burger' is defined but never used  no-unused-vars
  Line 7:18:  'Menu' is defined but never used    no-unused-vars
```

After much debugging, the key missing component was an installable package:

```
$ npm install react-focus-lock
```

[react-focus-lock](https://github.com/theKashey/react-focus-lock)

Which is evidently a package that brings certain items on a page up to Mozilla specification.

Other dependencies based upon what we have built include (from package.json):

```
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^12.8.3",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-focus-lock": "^2.5.2",
"react-scripts": "4.0.3",
"styled-components": "^5.3.0",
"web-vitals": "^1.1.2"
```
When we build from our Docker image, these should all be installed.

After we have built this we see the following two available burger menu pages:

![burgermenumain.png](/img/burgermenumain.png)

![burgermenumenu](/img/burgermenumenu.png)

### Creating Three Different Page Layouts


### Switching Page Layouts Based Upon Button


### Modifying Favicon


### reportWebVitals.js

### setupTests.js


# References

* [Creating Multi Page Website React](https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/) - notes on where routes and sofourth are kept.
* [Creating a Hamburger Menu](https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/)
* [Hamburger Menu Github](https://github.com/maximakymenko/react-burger-menu-article-app/tree/master/src)
