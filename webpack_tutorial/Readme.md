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
Create ```index.html``` under ```dist``` directory
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


As now you have added the html file manually, which leads to the issue that if you you change the entry point in config to something else it will lead you change the reference in html as well.

## Solution: html-webpack-plugin

``` npm install html-webpack-plugin -D ```

As the name already specifies that it is a plugin therefore, you need to add a plugin under webpeck.config.js. So far you haven't created this file so now create the file 
```webpack.config.js```



```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output",
    }),
  ],
};
```

following requires babel (TO DO:Excercise)

```
import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      title: 'learn-webpack'
    })
  ],
  resolve: {
    modules: [_resolve(__dirname, './src'), 'node_modules']
  }
};

export default config;
```

In your ```index.html``` change the script source to something like ```abc.js```

do ```npm run build```

it shall change ```abc.js``` in your html to ```main.js```

##Entry Point and Output
Now we will define our own entry point and output file name
 1. Go to webpack.config.js
 2. add following
 
  ```
  entry: './src/myscript.js',
  output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
  },
  ```
  3. ```npm run build```
  4. ERROR???? 
  
  
  ## EXCERCISE 1: FIX IT!!!
  
  
  ## My First Componet
  Create a new under ```src``` directory and call it ```mycomponent.js``` and paste the following code
  
  ```export default (text = "Hello World from WEBPACK") => {
     const elment = document.createElement("p");
     element.inneHTML = text;
     return element;
};
```


As you hopefuly fixed ERROR in the Exercise 1, so go to  your ```app.js``` file and the following
```EXCERCISE 2: use mycomponent here";

   document.body.appendChild(component());
```

Check generated ```bundle.js``` what you understande? recall dependency graph.



