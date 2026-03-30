Notes:


*Static(Default)* 
 - just sits as per the html template 
 - does not respect top,bottom, left,right

*Relative(Relative to original Position and respects top,bottom,left,right)*
 - respects top , bottom, left, right but to its orginal position

*Absolute*
 - removes itself from the original position in the DOM 
 - any top,bottom,left,right starts applying wrt to the window vh if the parent doesnt have a position relative or anything else apart from sticky

*Fixed(Absolute but ignores relative)*
 - fixed even when scrolled
 - top,bottom,left,right always respected from the height of the window unlike absolute

*Sticky(static + Fixed)*
 -  sticks when scrolled after the given condition but respects top,bottom,left,right


*Playground code for understanding postions*

<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}
 
#parent{
border:2px solid blue;
height:120vh;
 
}
 
#child1{
border:2px solid green;
 
}
 
#child2{
border:2px solid yellow;
 
 
}
 
#child3{
border:2px solid orange;
position:sticky;
right:0px;
}
 
</style>
</head>
<body>
 
<div id="parent">
Parent Div
<div id="child1">Child 1</div>
<div id="child2">Child 2</div>
<div id="child3">I am sticky</div>
</div>
 
</body>
</html>



## What is implemented??

Badge on a Card
Fixed Nav Bar
Fixed Bottom Right Button

