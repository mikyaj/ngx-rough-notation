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

Following configurations can be passed to compeo

| name                | type                                                             | default                                                                                                                                                                               | description                                                                                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animate             | `boolean`                                                        | `true`                                                                                                                                                                                | Turn on/off animation when annotating                                                                                                                                                                                                                                                        |
| animationDelay      | `number`                                                         | `0`                                                                                                                                                                                   | Delay in animation in milliseconds                                                                                                                                                                                                                                                           |
| animationDuration   | `number`                                                         | `800`                                                                                                                                                                                 | Duration of the animation in milliseconds                                                                                                                                                                                                                                                    |
| color               | `string`                                                         |                                                                                                                                                                                       | String value representing the color of the annotation sketch                                                                                              
| iterations          | `number`                                                         | `2`                                                                                                                                                                                   | By default annotations are drawn in two iterations, e.g. when underlining, drawing from left to right and then back from right to left. Setting this property can let you configure the number of iterations.                                                                                |
| padding             | `number`, `[top, right, bottom, left]`, `[vertical, horizontal]` | `5`                                                                                                                                                                                   | Padding in pixels between the element and roughly where the annotation is drawn. If you wish to specify different `top`, `left`, `right`, `bottom` paddings, you can set the value to an array akin to CSS style padding `[top, right, bottom, left]` or just `[top & bottom, left & right]` |
| show                | `boolean`                                                        | `false`                                                                                                                                                                               | Show/hide the annotation                                                                                                                                                                                                                                                                     |
| strokeWidth         | `number`                                                         | `1 | Width of the annotation strokes | | type |`enum`|`underline`,`box`,`circle`,`highlight`,`strike-through`,`crossed-off` | This is a mandatory field. It sets the annotation style |

### Type values

| value          | description                                             |
| -------------- | ------------------------------------------------------- |
| underline      | Create a sketchy underline below an element             |
| box            | This style draws a box around the element               |
| circle         | Draw a circle around the element                        |
| highlight      | Creates a highlight effect as if maked by a highlighter |
| strike-through | This style draws a box around the element               |
| crossed-off    | This style draws a box around the element               |

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

| name | type    | default | description                |
| ---- | ------- | ------- | -------------------------- |
| show | boolean |  false  | show/hides the annotations |


## TODO
- Custom ordering of annotations triggering in group component
- Testing
