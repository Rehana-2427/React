
const path = require("path");

module.exports ={
   entry:"./src/index.js",
   output:{
       filename : "bundle.js",
       path:path.resolve(__dirname,"public"),
   },
   mode : "development",
   devServer : {
       static : {
           directory : path.resolve(__dirname,"public")
       },
       port:3500,
   },
   module:{
    rules:[
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
        test:/\.js$/,
        exclude: /node_modules/,
        use:{
            loader:'babel-loader',
            options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
              
        }
        }
    ]
   }
};