# redux-chrome-extension
Redux Chrome Extension


A starter boilerplate for a Chrome Extension using Redux and React.js.



## Example app
- There is an example application

- After saving any changes in the /scripts this example app, there will 

- The application's code is located only in /dist folder, so after saving any change in the /src folder, the application will be rewritten with yourcode




## Grunt tasks

### Debug

Debug task helps reduce your effors during development extensions. 
If the task detects your changes of source files, Livereload([chromereload.js](https://github.com/yeoman/generator-chrome-extension/blob/master/app/templates/scripts/chromereload.js)) reloads your extension. 


```bash
grunt debug
```

### Build

By default, generators compress the file that was created by building a js/css/html/resource file. 

You can distribute the compressed file using the Chrome Developer Dashboard to publish to the Chrome Web Store.

```bash
grunt build
```

