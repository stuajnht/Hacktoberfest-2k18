# Horizontal loader

Displays a horizontal line loading animation along the topmost edge of the web page, similar to sites like Medium, YouTube and Flickr.


## Setup

Include the JavaScript and CSS files, along with the following HTML on your page:
``` html
<div id="loader" class="horizontal-loader__container">
  <div class="horizontal-loader__container-intermediate">
    <div class="horizontal-loaded__intermediate-block horizontal-loaded__intermediate-block-1"></div>
    <div class="horizontal-loaded__intermediate-block horizontal-loaded__intermediate-block-2"></div>
    <div class="horizontal-loaded__intermediate-block horizontal-loaded__intermediate-block-3"></div>
    <div class="horizontal-loaded__intermediate-block horizontal-loaded__intermediate-block-4"></div>
  </div>
  <div class="horizontal-loader__container-loaded"></div>
</div>
```


## Quick Example

You probably don't want to read lots of instructions just to get this working (although you'll be missing out on some pretty awesome features), so here's a quick and simple example of how to use *Horizontal Loader*:

``` javascript
// Displaying the horizontal loader at 60% complete
HorizontalLoader.init( 'loader' ).show().set( 60 );
```

Did you see how easy that was?

## Usage

For those of you who want to get the most out of *Horizontal Loader*, read on...

### Init

```javascript
HorizontalLoader.init( element, options );
```

Associates an element on the page so that it can be used as a *Horizontal Loader*.

|Parameter|Type|Description|Example|Optional|
|---------|----|-----------|-------|--------|
|`element`|string|The ID of the loading bar element|`loader`|No|
|`options`|object|Any additional options to customize the *Horizontal Loader*|{}|Yes|


### Show

```javascript
HorizontalLoader.show();
```

Makes the *Horizontal Loader* visible on the page.


### Hide

```javascript
HorizontalLoader.hide();
```

Makes the *Horizontal Loader* hidden on the page.


### Set

```javascript
HorizontalLoader.set( value, duration );
```

Sets the *Horizontal Loader* to be `value` percent completed, over `duration` time period.

|Parameter|Type|Description|Example|Optional|
|---------|----|-----------|-------|--------|
|`value`|integer|The percent completed amount the *Horizontal Loader* should show. Valid values are between `0` and `100` inclusive|60|No|
|`duration`|integer|How long the animation should take for the *Horizontal Loader* to show the value it has been set to. Any value less that 100 is assumed to be in seconds, otherwise it will use milliseconds. If nothing is passed, a default of 2 seconds is used|10|Yes|


### Reset
```javascript
HorizontalLoader.reset();
```

Resets the *Horizontal Loader* to 0% complete. Shorthand for `HoriztonalLoader.set( 0, 0 )`
