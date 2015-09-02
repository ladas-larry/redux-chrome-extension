#Redux Chrome Extension


A starter boilerplate for a Chrome Extension using Redux and React.js.
It handles store syncing throughout the whole Extension.



##Schema


###Background Page
- Sets initial state for the whole app
- Passes initial state to Popup Window and Content Scripts
- Receives state updates from Popup Window and Content Scripts


###Popup Window
- Gets initial state from Background Page
- Dispatches state updates to Background Page and Content Scripts
- Receives state updates from Content Scripts, Options


###Content Script
- Gets initial state from Background Page
- Receives state updates from Popup window
- Dispatches  stateupdates to Popup Window, Background Page and the rest of Content Scripts


## Installation

`npm install`

## Development



```bash
gulp
```

Browserify and Watchify are used for building scripts. (https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)



1. In Chrome open chrome://extensions/
2. Select Developer mode
3. Click on Load unpacked extension
4. Add /dist folder

## Releasing

```bash
gulp release
```

You can find .zip packages in the /dist folder.

## Example App
- There is an example counter application 
- Extension's code is located in /app folder
- Do not edit files in app/scripts/* directly, it will be overwritten

##TODO

- Hot loading
