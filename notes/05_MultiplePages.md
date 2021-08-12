## Creating Multiple Version of Same Page as Output

### Different Strategy Ideas

#### Using RandomCat API

Rather than starting out with our own image, we can start off by showing a random cat from an existing codebase, and adapt the code.

* [RandomCat](https://medium.com/@shridharkamat10/how-to-make-a-random-cat-image-generator-with-react-and-cat-api-c52a093d8b42)

#### Pick from an Array of Images Using Random Number

* [Random Array of Images](https://stackoverflow.com/questions/61531025/how-do-i-display-a-random-image-retrieved-from-an-array-in-react-native)

### Creating Three Different Page Layouts

We use the, "different array of images" strategy, creating a, "indicatorimages.js" file.

```
const indicatorImages = [
  require('img/bluecircle.svg'),
  require('img/reddownarrow.svg'),
  require('img/greenuparrow.svg'),
];

export default indicatorImages;
```
Looking for a quick way to run Javascript functions in a python-notebook type environment - found [this notebook](https://colab.research.google.com/gist/korakot/22abd6eccac229e9cb9a027b088b50d6/notebook.ipynb#scrollTo=mz_hl90xmPFW)

We tested out our random number generator function and it seems to work with the following:

```
var indicatorImages = [
  ('bluecircle'),
  ('reddownarrow'),
  ('greenuparrow'),
];

random = Math.floor(Math.random() * indicatorImages1.length)
console.log(random)
console.log(indicatorImages1[random])

```
The shapes/images could be imported accordingly.

```
import bluecircle from '../img/bluecircle.svg';
import ...~

var indicatorImages ...

export indicatorImages

```
Then we can create a function which imports the indicatorImages and spits out a random one within rating.js.

```
import indicatorImages from '../img/indicatorimages.js';

function Indicate() {
  var randomImage =
    indicatorImages[Math.floor(Math.random() * indicatorImages.length)];
  console.log(randomImage);

  return (
    <View>
      <Image source={randomImage} />
    </View>
  );

```
This can then be couched within the Style we created in the rating.js default function.


### Switching Page Layouts Based Upon Button


### Modifying Favicon


### reportWebVitals.js

### setupTests.js

## References

[Codepen Example](https://codepen.io/Ruegen/pen/oYpEbm)
[Randomly Select Images from Array](https://stackoverflow.com/questions/59805808/randomly-select-images-from-a-an-array-in-react-native)
