// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,

    /*-----------------------------------------------
       Provide the custom asset root folder
       For production this URL needs to be changed to the production URL
     -----------------------------------------------*/
    //assetRoot: 'http://localhost:8081/assets/',
    ...options,
  });

   /*-----------------------------------------------
        Get URL link after # symbol
     -----------------------------------------------*/
       
  r360.renderToLocation(
    r360.createRoot('nscc360',{}),
    r360.getDefaultLocation(),
  );

  r360.compositor.setCursorVisibility('visible');
}

window.React360 = {init};
