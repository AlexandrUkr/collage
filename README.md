# Automatic photo collage
Automatic generete photo collage

<img src="http://image.prntscr.com/image/065fa950d04d4f12b895338cd8ca583e.jpeg">

Example of use

```css
.collage {
	width: 640px;
}
.collage img {
	display: block;
	float: left;
}
```

```html
<div class="collage">
	<img src="images/1.jpg">
	<img src="images/2.jpg">
	<img src="images/3.jpg">
	<img src="images/4.jpg">
	<img src="images/5.jpg">
	<img src="images/6.jpg">
	<img src="images/7.jpg">
	<img src="images/8.jpg">
	<img src="images/9.jpg">
	<img src="images/10.jpg">
</div>
```

```javascript
$('.collage').collage({
	maxHeight: 200,
	margin: 3
});
```

<a href="https://jsfiddle.net/v7sefrcw/8/" target="_blank">demo page</a>
