import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const init = (config = "Window") => {
    alert(config);
    ReactDOM.render(<App config={config} />, document.getElementById('root'));
}

// Simply comment this before making a umd production file or make a conditional statements etc.
// process.NODE_ENV won't work normally because there is no process in browsers.

// Or find equivalent to e for rollup(https://github.com/rollup/rollup/issues/719)

// (https://webpack.js.org/guides/environment-variables/)
// (https://github.com/steadylearner/Rust-Full-Stack/blob/master/React_Rust/package.json)
// (https://github.com/steadylearner/Rust-Full-Stack/blob/master/React_Rust/webpack.config.js)

// Not working also.
// if (process && process.env.NODE_ENV === 'development') {
//  init()
// }

// Just comment this once before you build umd files to embed.
// { Comment: "production($yarn build)", Uncomment: "development($yarn start)"}
// init()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
