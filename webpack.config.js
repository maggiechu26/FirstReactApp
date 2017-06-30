var webpack = require('webpack');
/*
With this configuration, running webpack 
will translate your app.js and put the result in /build/app.bundle.js.
*/
module.exports = {
  entry: './reactApp/app.js', //specifies the string path to the file contating our app
  output: {
    path: __dirname + '/build', //path is the absolute path to where the file should go
    filename: 'app.bundle.js' //filename is the name of the file output by the build
  },
  module: {
    rules: [ //subkey named rules --> an array of objects representing rules to follow at build time
      {
        test: /\.js$/, //to run Babel on all files ending in .js  to translate ES6 and JSX
        exclude: /node_modules/, //(except node_modules)
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  stats: {// nice to have key --> make webpack output color
    colors: true
  },
  devtool: 'source-map' // nice to have key --> turning on the sourcemapping so the line numbers of the input and output files match exactly
};
