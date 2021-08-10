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


### Creating a Custom Surrounding Interface with Prompts

Basically, we need a hamburger menu with the capability to navigate to another page which would include some form of, "selector" which allows us to select the buy, hold or sell signal on the recommendation page.

### Creating Three Different Page Layouts


### Switching Page Layouts Based Upon Button
