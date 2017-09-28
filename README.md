# Ubergang.js

Minimal Javascript/CSS library for simple site transitions
on static HTML web pages.

See `example/` dir for example usage, or browse to [guidoschmidt.github.io/ubergang.js](https://guidoschmidt.github.io/ubergang.js)
for a (as yet) minimal example.

### Usage
1. Mark your *outgoing* links with the `ubergang` class:
   ```html
   <a class="ubergang" href="www.awesome.link.target">Awesome Site</>
   ```
2. Mark all your DOM elements, that should animate on a transition with `transition` class.
   (**really fast nobrainer:** Just tag your `<body>...</body>` element)
   ```html
   <body class="transition">
     <h1>Awesome Site Title</h1>
     <nav>
       ...
     </nav>
     ...
   </body>
   ```
3. Adjust your Stylesheets with propper animations (More on that coming soon)
