//coffeescript complies to javascript, and it requires the least amount to solve a problem. it's readable and understandable. it's also easy to maintain

//CoffeeScript only create function Expressions
  i.e. express = -> 
        confirm "Are you ready?"

//coffee -c test.coffee ===> this creates a file test.js

//coffee -cw test.coffee ===> this recompiles in js anytime the test.coffee file is updated

//cofee -c src -o js ===> compiles all .coffee files in the src dir into a js dir

//coffee -wc src -o js ===> everytime a file is updated, it recompiles in js files.
