# Angular wrapper for Rough Notation library


This is an Angular wrapper for [rough-notation](https://roughnotation.com/), a small JavaScript library to create and animate annotations on a web page.

- [Visit website to see it in action](https://roughnotation.com/)
- [Library docs](https://github.com/pshihn/rough-notation)

## Demo
You can play around with the demo [here](https://stackblitz.com/edit/angular-n9jsex).

## Installation

Install rough-notation, which is peer dependency to this wrapper.
```
npm install --save rough-notation
```
Install wrapper.
```
npm install --save ngx-rough-notation
```

Import wrapper module into your app mobule

```js
import { RoughNotationModule } from 'ngx-rough-notation';
```

## RoughNotation Component


### Usage

```html
<rough-notation type="underline" [show]="true">
  Hello I am a notation
</rough-notation>
```

### Properties

#### type
This is a mandatory field. It sets the annotation style. Following are the list of supported annotation types:

* __underline__: This style creates a sketchy underline below an element.
* __box__: This style draws a box around the element.
* __circle__: This style draws a circle around the element.
* __highlight__: This style creates a highlight effect as if marked by a highlighter.
* __strike-through__: This style draws horizontal lines through the element.
* __crossed-off__: This style draws an 'X' across the element.

#### animate
Boolean property to turn on/off animation when annotating. Default value is `true`.

#### animationDuration
Duration of the animation in milliseconds. Default is `800ms`.

#### color
String value representing the color of the annotation sketch. Default value is `currentColor`.

#### strokeWidth
Width of the annotation strokes. Default value is `1`. 

#### padding
Padding between the element and roughly where the annotation is drawn. Default value is `5` (in pixels).
If you wish to specify different `top`, `left`, `right`, `bottom` paddings, you can set the value to an array akin to CSS style padidng `[top, right, bottom, left]` or just `[top & bottom, left & right]`.

#### multiline
This property only applies to inline text. To annotate multiline text (each line separately), set this property to `true`. 

#### iterations
By default annotations are drawn in two iterations, e.g. when underlining, drawing from left to right and then back from right to left. Setting this property can let you configure the number of iterations. 

#### brackets
Value could be a string or an array of strings, each string being one of these values: **left, right, top, bottom**. When drawing a bracket, this configures which side(s) of the element to bracket. Default value is `right`.

#### show
This boolean value hide/show the annotation. By default set to `false`.  

## RoughNotation Group Component

This is a wrapper for multiple annotations, it will trigger the `show()` method on every child annotation.

### Usage

```html
<rough-notation-group [show]="true">
  <rough-notation type="circle" color="#f57f17">
    Circle
  </rough-notation>
  <rough-notation type="highlight" color="#fff176">
    Highlight
  </rough-notation>
</rough-notation-group>
```

### Properties

#### show
This boolean value hide/show the annotations. By default set to `false`.


## TODO
- Testing
