# Getting Started

Make Directory and call it webpack-tutorial and initialize the new project

```
mkdir learn-webpack
cd learn-webpack
npm init -y
```
## Install webpack CLI

```npm install webpack webpack-cli --save-dev```

package.json shall be generated which shall look like as follows

```json 
{
  "name": "webpack_tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.0"
  }
}
```



# Modify package.json

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

Create index.js under src  directory and add following to the js

```
console.log("Hello World");
```

## Kick it off!
```
npm run dev
```

## Display the output on the html!
```
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```
open the file in the browser, observe Hello World message in the console.
## rename the index.html to something else! 

It should fail, why?

hint: Entry Point 
TO DO//
