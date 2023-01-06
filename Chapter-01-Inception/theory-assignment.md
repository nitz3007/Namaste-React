## Day 1 Assignments:

# [Q]: What is Emmmet?
**A**:  Emmet is a plugin which provides shortcut abbreviations for writing HTML, CSS, XML, etc boilerplate code. It comes as a built-in support in VS code. General way to write emmet abbriviation: tagName[series of expression].
     • Generating HTML boilerplate code: Simply type '!' and you'll find a popup for emmet. Click on the 'Emmet Abbriviation' option and the html skeleton code will appear on the text editor.
     • Elements with text content inside them: To write a div with some text inside it- div{This is a div} - will give <div>This is a div</div>
     • Nested Elements: To generate nested elements, use '>' operator. Eg, div>div>h1 produces: <div><div><h1></h1></div></div>
     • Classes and Id: we can specify Id by using ‘#’ and classes by using ‘.’. Eg, 'div#main.container.responsive' gives: <div id='main' class='container responsive'></div>
     • Custom attributes: If you want a div with custom data property, try 'div[data-name=logo]' will give: <div data-name="logo"></div>
     • Generating Siblings: To generate siblings ie, elements at the same level use '+' operator. Eg, 'header+div+footer' gives: <header></header><div></div><footer></footer>
     
     Refer [Emmet Article] (https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c) for more info on Emmet abbriviations.
     
CDN:

Crossorigin:

Difference between async & defer?
