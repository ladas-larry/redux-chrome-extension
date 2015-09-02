#Redux Chrome Extension


A starter boilerplate for a Chrome Extension using Redux and React.js.

##Schema


Background Page
- Passing initial state to Popup Window and Content Scripts
- Optionally reads localstorage
- Receiving updates from Popup Window and Content Scripts

Content Script
- Get initial store from Background Page
- Receiving updates from Popup window
- Dispatching updates to Popup Window, Background Page and the rest of Content Scripts


Popup Window
- Get initial store from Background Page
- Dispatching updates to Background Page and Content Scripts
- Receiving updates from Content Scripts, Options


## Development



```bash
gulp
```

https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

## Build


```bash
gulp build
```

## Example app

- There is an example application

- After saving any changes in the /scripts this example app, there will 

- The application's code is located only in /dist folder, so after saving any change in the /src folder, the application will be rewritten with yourcode



TODO
- NPM build
- Hot loading