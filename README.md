# BestyFLow(give.css)
###### Multiple classes = Shape your styles + Make/edit your web pages faster

# How to use give.css?
##### First the workflow has a general rules with default values (Customizable of course!) for best implementation also inclueds <a href="#sliders">sliders</a>, <a href="#dropdowns">dropdowns</a> and <a href="#burger">burger links</a>.<br>
### Let's gettin' started
Ok, now we have this element `h1` and i want to shape its style quickly.<br> 
`<h1 class="main-title gv-padding gv-margin-lg gv-color-main gv-bg-black gv-shadow-text">Big title</h1>`<br>
`<button class="primary-btn gv-padding-rl gv-radius gv-shadow-box">click</button>`

#### This will result
####`h1`
- <b>gv-padding</b>: padding all sides.
- <b>gv-margin-lg</b>: margin large all sides.
- <b>gv-color-main</b>: color property will take the value of `$main-color` or whatever value.
- <b>gv-color-black</b>: background-color property will take the value of `$black-color` or `black` keyword.

####`button`
- <b>gv-padding-rl</b>: padding right and left.
- <b>gv-radius</b>: border-radius.
- <b>gv-shadow-box</b>: box shadow.

# Used kits
I used gulp and bower for my dependencies and devDependencies :

### Dependencies //Bower
- Normalize.css
- Font awesome
- jQuery

### DevDependencies //gulp
- gulp-ruby-sass
- gulp-connect 
- gulp-jshint
- Browserify

### Follow these steps below to get started :
- `git clone github@github.com:mahmoudzakaria90/besty-flow.git`
- `npm install`
- `bower update`

#### For quick use
`<link href="css/style-en.css" rel="stylesheet">`

<h1 id="sliders">Slider structure</h1>
```
<div class="slider" slider-auto //optional>

   <div class="slider-control-wrap">
    <button type="button" class="slider-control slider-prev gv-no-btn"><span class="fa fa-chevron-left"></span></button>
    <button type="button" class="slider-control slider-next gv-no-btn"><span class="fa fa-chevron-right"></span></button>
   </div>

   <div class="slider-inner">
    <div class="slider-slide"></div>
    <div class="slider-slide"></div>
    <div class="slider-slide"></div>
    <div class="slider-slide"></div>
   </div>

</div>

```
#### Note: this version is under maintenance but work properly.

<h1 id="dropdowns">Dropdown</h1>
```
 <li class="header-dropdown">
  <a href="" class="header-dropdown-btn gv-color-third gv-no-underline">Home <span class="fa fa-caret-down"></span></a>
  <ul class="header-dropdown-menu">
    <li><a href="">drop1</a></li>
    <li><a href="">drop2</a></li>
    <li><a href="">drop3</a></li>
  </ul>
</li>

</div>

```
<h1 id="burger">Burger example</h1>
```
// logo

<div class="header-head">
   <button class="header-burger gv-float-right gv-transition">
     <span></span>
     <span></span>
     <span></span>
   </button>
 </div>

 <div class="header-collapse">
   <ul class="header-nav-wrap  gv-no-bullet ">
    <li class="header-dropdown">
      <a href="" class="header-dropdown-btn gv-color-third gv-no-underline">Home <span class="fa fa-caret-down"></span></a>
      <ul class="header-dropdown-menu">
        <li><a href="http://google.com">drop1</a></li>
        <li><a href="">drop2</a></li>
        <li><a href="">drop3</a></li>
      </ul>
    </li>

    <li class="header-dropdown">
      <a href="" class="header-dropdown-btn gv-color-third gv-no-underline">Home <span class="fa fa-caret-down"></span></a>
      <ul class="header-dropdown-menu">
        <li><a href="">drop1</a></li>
        <li><a href="">drop2</a></li>
        <li><a href="">drop3</a></li>
      </ul>
    </li>

    <li><a href="" class="gv-color-third">Home</a></li>
    <li><a href="" class="gv-color-third">Home</a></li>
    <li><a href="" class="gv-color-third">Home</a></li>
    <li><a href="" class="gv-color-third">Home</a></li>
   </ul>
  </div>         

```
#### Note: this version is under maintenance but work properly.