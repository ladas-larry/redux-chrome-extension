#Redux Chrome Extension

**work in progress**


A starter boilerplate for a Chrome Extension using Redux and React.js.
It handles store syncing throughout the whole Extension.
Uses React for Popup window UI. Console.log in every part of extensions for better debugging.
Implemets Redux Counter example (https://github.com/rackt/redux/tree/master/examples/counter).


https://developer.chrome.com/extensions/getstarted#unpacked

## Installation

`npm i`

## Development


`npm start`


Browserify and Watchify are used for building scripts and it's blazing fast. For more details see: (https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)
- after running, please Reload just once manually to establish the connection for livereload


1. In Chrome open chrome://extensions/
2. Select Developer mode
3. Click on Load unpacked extension
4. Add /dist folder


- You can gen more info by reading comments /src/files
- There is also distinction between which code belong to example a which code is React/Redux itself

##Schema

Uses (https://developer.chrome.com/extensions/messaging)

**Background Page**
- gets persistent data for initial state from localStorage (options, user)
- passes state to Popup Window and Content Scripts and Options
- receives state updates from Popup Window, Content Scripts and Options
- saves changes in persistent property to localStorage

**Popup Window**
- gets initial state from Background Page
- dispatches state updates to Background Page (and optionally to Content Scripts)

**Content Script**
- gets initial state from Background Page
- receives state updates from Popup window 
- dispatches state updates to Background Page (and optionally to the rest of Content Scripts)


**Options Page**
- gets initial state from Background Page
- dispatches state updates to Background Page

*** code for functionality that is in parenthesis was commented out, see src/content.index.js and src/popup/index.js ***


## Example App
- There is an example counter application 
- Extension's code is located in /app folder
- **Do not edit files in app/scripts/* directly, it will be overwritten**

## Releasing

```bash
gulp release
```

You can find .zip packages in the /dist folder.

##Data passing
If you understand the Schema above, you see that not every part of extension talk to each other. 
That's because of in certain cases it doesn't make sense to notify the part, that would otherwise load the whole state from Background Page again.


It's not possible to have Content Script and Popup Window active both in the same time, since Popup Window is autoclosing when it loses focus, and after each invoking it's fetching the state from Background Page. 
So it doesn't make sense to send any changes from Content Script to Popup Window. Same with Popup Window and Options.


On the other hand Content Script is living behind every tab all the time, so we need to propagate store changes in Popop Window to Content Scripts immediately.


##Storage
All the data we need to keep stored in extension after closing Chrome or disabling Extension are being saved to localStorage.


You can modify localStorage indirectly by changing `state.persistent` property, like Options page in example.



##TODO

- Hot loading of Reducers

- Testing 

- Issues and pull requests are always welcome!!


Thanks to 

https://github.com/schovi/webpack-chrome-extension
