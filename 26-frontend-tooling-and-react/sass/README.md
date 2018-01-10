**html-webpack-plugin** dynamic link and script tags
**extract-text-webpack-plugin**: puts all CSS in one css file, all JS in one
bundle.js file

npm install webpack webpack-dev-server html-webpack-plugin \
    extract-text-webpack-plugin \
    node-sass sass-loader resolve-url-loader css-loader \
    babel-core babel-loader babel-preset-react \
    babel-preset-es2015 \
    babel-plugin-transform-object-rest-spread \
    react react-dom

  Part 1:
    Welcome back to front end!
    we're going to use React, and SASS
    SASS - Syntactically Awesome Style Sheets (suuugar!)
    demonstrate installing sass manually, running sass --watch input.scss:output.css command

    install webpack

    "scripts": {
      "watch": "webpack-dev-server --inline --hot",
      "build": "webpack",
    }

    require('./css/main.scss')
    console.log('live reload!')

    import React from 'react'
    import ReactDom from 'react-dom'

    class App extends React.Component {
      render() {
        return (
          <h1>cool beans</h1>
        )
      }
    }

    npm install react-dom
    
