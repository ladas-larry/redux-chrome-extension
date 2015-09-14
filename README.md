#Redux Chrome Extension


A starter boilerplate for a Chrome Extension using Redux and React.js.
It handles store syncing throughout the whole Extension.
Uses React for Popup window UI. Console.log in every part of extensions for better debugging.


##Schema

Uses https://developer.chrome.com/extensions/messaging

**Background Page**
- sets initial state for the whole app
- passes initial state to Popup Window and Content Scripts and Options
- receives state updates from Popup Window, Content Scripts and Options


**Popup Window**
- gets initial state from Background Page
- dispatches state updates to Background Page (and Content Scripts)


**Content Script**
- gets initial state from Background Page
- receives state updates from Popup window 
- dispatches state updates to Background Page (and the rest of Content Scripts)


**Options Page**
- gets initial state from Background Page
- dispatches state updates to Background Page

*** code for functionality that is in parenthesis was commented out ***

## Installation

`npm i`

## Development


`gulp`

Browserify and Watchify are used for building scripts. For more details see: (https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)



1. In Chrome open chrome://extensions/
2. Select Developer mode
3. Click on Load unpacked extension
4. Add /dist folder

## Example App
- There is an example counter application 
- Extension's code is located in /app folder
- **Do not edit files in app/scripts/* directly, it will be overwritten**

## Releasing

```bash
gulp release
```

You can find .zip packages in the /dist folder.



##TODO

- Hot loading

- For global state use just 1 reducer

- Handle local storage for store initialization




