// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const common = require("./webpack.common.js");
const {merge} = require("webpack-merge");

module.exports = merge(common,{
  mode: "production",
  output: {
  filename : "main.[contenthash].js",
  path: path.resolve(__dirname, "dist"),
},
  
});

/*module.exports = () => {
    
};*/