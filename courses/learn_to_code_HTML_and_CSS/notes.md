# How To Code HTML And CSS

This md contains my notes from the course [Learn TO Code HTML and CSS](https://learn.shayhowe.com/html-css/building-your-first-web-page/)

## Lesson 1

The title of the lesson is "Building your first web page". Here are a few bullets I found interesting:

* As a general rule in webpages, HTML represents the actual content of the webpage, while CSS reps appearance

* Common HTML terms which would be encountered: _Elements_, _tags_, and _attributes_.

* Common CSS terms to be familiarized: _selectors, properties,_ and _values_

* Use css resets to ensure cross-browser compatibility.

## Lesson 2

_Getting to Know HTML_

Interesting bullets:

* `div` and `span` donot hold any semantic value. They exist for styling purposes only.

* `div`s are `block`-level elements, while `span`s are `inline`-level elements.

* Text-based elements include: strong, p, H1 through H6, em, e.t.c.

* Structural elements include: header, nav, article, aside, section, footer, e.t.c.

## Lesson 3

_Getting to Know CSS_

Interesting bullets:

* **The Cascade**: CSS rules are interpretted from top to bottom. Styles literally cascade from the top of the stylesheet to the bottom.

* **CSS Specificity**: Different CSS selectors (class, id, type) have different specificity weights as follows:
	- type = 0-0-1
	- class = 0-1-0 
	- id = 1-0-0 

* Generally, in terms of specificity weight, type < class < id.

* **Colors**: Color representation in CSS can be either through any of the following methods: 
	- Keywords (e.g. red, blue) 
	- Hexadecimal notation (e.g. #ff000, #0f0) 
	- RGB/RGBa (e.g. rgba(0,255,0,.5))
	- HSL/HSLa(e.g. hsla(300, 50%, 25%, .3))

* **Lengths**: Length mesurements in CSS can be either `absolute` (e.g. pixels -- px) or `relative` (e.g. percentages -- %, em).

## Lesson 4

_Opening The Box Model_

Interesting bullets:

* The CSS `display` property values include: `block`, `inline-block`, `inline`, `none`.

* **The Box Model**: Every element on a pages is a rectangular box.

* The `box-sizing` property, introduced in CSS3, allows one to change exactly how the box model works.

* The `box-sizing` property accepts the following values:
	- `content-box`: The default value (additive).
	- `padding-box`: (deprecated)
	- `border-box`: Incorporates both the size of the padding and borders around the element (best to use).

## Lesson 5

_Positioning Content_

Interesting bullets:

* One way to position elements on a page is to use the `float` property which accepts common values such as `left` and `right`.

* To prevent unwanted layouts when positioning using `float`s, the `clear` property as well as _containing_ can be used.

* The `clear` property accepts different values; commonly `left`, `right` or `both`
	
	+ `left` clears left floats, `right`, right floats and `both`, left and right floats.

* The `clear` property should be applied to the element after the floated elements to return the HTML document to its 'normal' flow.

* _Containing_ floats is not an explicit CSS property. It involves literally containing the floats with, say, a class and _self clearing_ the group (the class, that is) using the `:before` and `:after` pseudo elements. -- This explanation maybe be a bit vague, but this process, according to the course, is also commonly known as a **_clearfix_**

* Positioning can also be done using the `display` property with the `inline-block` value.

* Elements can also be uniquely positioned using the `position` property.

* Every HTML element, by default, has a `position` value of `static`, which can be overwritten with the `relative` or `absolute` values.

* Using `relative` or `absolute` in conjuction with the _box offset_ properties -- `bottom`, `left`, `right`, `top` -- gives one the 'power' to uniquely position a portion of the HTML document anywhere on the page.

## Lesson 6

_Working with Typography_

Prior to reading this section of the course, I was already pretty well-versed most of the concepts presented in this lesson. Properties like `font-weight`, `text-transform`, `letter-spacing`, `line-height`, and most css properties that have to do with manipulating the look of text on a html page are not foreign to me.

A few properties/elements/concepts that were strange to me are bulleted below:

* To include citations/quotes within a webpage, the following HTML elements are used:
	- `<cite>`: to reference a creative work, author or resource.
	- `<q>`: for short inline quotes.
	- `<blockquote>`: for longer quotes.

## Lesson 7

_Setting Backgrounds and Gradients_

Interesting bullets:

* Adding a background color to a HTML page can be done fairly easily by using the `background-color` or `background` CSS properties.

* Adding a background image is also easy using either the `background` or `background-image` CSS properties. However to modify and/or properly define a setting for the background image, the following properties can be used:
 - `background-repeat`
 - `background-position`

* Gradient backgrounds can either be `linear` or `radial`. They are added to a HTML document using the `background` or `background-image` CSS properties.

* Linear gradients can be added using the `linear-gradient()` within the `background` or `background-image` CSS property. The function accepts two color values (Hex, rgba, hsla values). The first color value passed is the begining color value of the gradient and the second color value, the end color of the gradient. transition between the two color values within the gradient is handled by the browser.

* Generally the color transition in a gradient occurs from top to bottom, but that can be changed using keywords within the gradient function value. Keywords such as `to right`, `to left top`, `to right bottom`, and degree values such as `300deg`, `270` can be used.

* Like the `linear-gradient()` function, there's also the `radial-gradient()` function for Radial background gradients accepts values similar to the `linear-gradient()` function.

* Radial gradients work from the inside to the out of the element.

## Lesson 8

_Creating Lists_

Interesting bullets:

* Lists on HTML pages can be one of the the following three types:
  - unordered lists `<ul>`
  - ordered lists `<ol>`
  - description lists `<dl>`

* A `start` attribute used in an ordered list can be used to define at what point (e.g. number) the list starts from. For example `<ol start="20">` creates a list where the first `<li>` starts with the number 20 and progresses onward (i.e. 20, 21, 22, ...).

* Also an attribute for `<ol>`, the `reversed` attribute, used like so; `<ol reversed>` turns the count into a 'count-down'. (i.e. 5, 4, 3, ...).

* Still on `<ol>`s, there's also the `value` attribute used like so; `<ol> ... <li value="3"></li> ... </ol>`; which specifies the particular value for that `<li>`. `<li>`s following a `<li>` with a defined value would continue chronologically. For ex., say an `<li>` was given a `value` of 69, the next `<li>` would automatically have the `value` of 70 even if the `value` before the defined `value` was, say, 21.

* Lists can be nested within each other.

* The `list-style-type` CSS property can be used to modify the default `<li>` markers for `<ul>`s and `<ol>`s.


## Lesson 9

_Adding Media_

Interesting bullets:

* Images can be added to a HTML page using the `<img>` inline HTML element.

* Images, although appearing as inline elements by default in HTML pages, are usually set to a CSS `display` property value of `block`.

* The `<audio></audio>` HTML element, introduced in HTML 5, can enable one to add audio files to the HTML webpage.

* Attributes accepted by the `<audio>` element include: 

	- `src`: like with the `img` element, the `src` attribute specifies the source URL of the audio file, whether local or otherwise.

	- `autoplay`

	- `controls`

	- `loop`

	- `preload`

* `autoplay`, `controls`, and `loop` above are known as "Boolean attributes". They, according to the textbook, "don't require a stated value".

* `<audio>`, by default, would not be visible on the webpage even when present. When the `autoplay` attribute value is present, the `src`ed audio file starts playing in the background on page-load albeit an "audio player" not visible on the webpage.

  If, however, the `controls` attr. is added to `<audio>`, the player would become visible on the webpage having the default browser audio control properties: pause/play, seek, vol. up/vol. down.

* The `loop` attr., while present, causes the audio file to play continuously from begining to end while the webpage is open.

* The `preload` attr. accepts the values: `none` (preloads no information), `auto` (preloads all information), and `metadata` (preloads metadata information).

* Another format used to embed audio to HTML pages involves including more than one source URL. This is mostly done to provide an array of file formats so at least one of the formats would be recognized by the browser. To use this format, a few things change in the syntax. 
  	Instead of:
		`<audio src="file.mp3" autoplay controls></audio>`
	We now have:
		`<audio autoplay controls>
		  <source src="file.ogg" type="audio/ogg">
		  <source src="file.mp3" type="audio/mpeg">
		  <source src="file.wav" type="audio/wav">
		</audio>`

* Similar to the `<audio>` element introduced in HTML 5, there's also the `<video>` element which works similar to the audio element, but this time adds video to the HTML page. For example:
	`<video src="earth.ogv" controls></video>`

* Apart from the similar attributes such as `controls`, `autoplay`, `preload`, `src`, and `loop` which the `<audio>` and `<video>` attributes both use, there's also the __`poster`__ attribute, which is specific to `<video>`

* The `poster` attr. allows one to specify an image to be used as something like a "placeholder" before the video starts playing. Think of it like a "video thumbnail". Usage is as follows:
	`<video src="some-video.ogv" controls poster="some-thumb.jpg"></video>`

* Just like with `<audio>`, `<video>` can also be written in the following form/syntax (using multiple `source`s) which allows room for the provision of fallbacks in case a specific browser (_looking at you IE_) doesn't, for some reason, support your 'default' video format:
	`<video controls>
		<source src="some-video.ogv" type="video/ogg">
		<source src="some-video.mp4" type="video/mp4">
		Some text specifying the video's <a href="#">download link</a>
	</video>`

* Another important HTML element to note is the `<iframe>` element.

* `<iframe>`, when used, embeds another HTML page into your HTML page. `<iframe>`s can be used to embed media files such as maps, videos and images from other sites into your webpage.

* A few default styles every `<iframe>` possesses which can be manipulated 'to taste' as HTML attributes includes:
	- `frameborder`
	- `width`
	- `height`
  like so:
  	`<iframe src="some-url" frameborder="some-value" width="some-other-value" height="yep-more-values"></iframe>`

* A few final important things to note about `<iframe>`s (for now):

	- Links within the page href-ed within the `<iframe>` will open inside that frame leaving the page containing the frame unchanged.

	- Styles applied to the page containing the frame would not affect the elements in the `<iframe>`. Those `<iframe>` elements play by their own rules (the rules specified at `src`).

* And two more tags before this lesson ends:

	- `<figure>`
	- `<figcaption>`
  
  These semantically markup self-contained content or media within the HTML Page. They are used like so:
  	`<figure>
  		<img src="some-image.jpg">
  		<figcaption>caption used in place of image alt</figcaption>
  	</figure>`

