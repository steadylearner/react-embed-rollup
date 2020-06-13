# Build React umd file with Rollup

Project with CRA to dev and Rollup to build umd lib file to embed.

## How to use it.

- Use your libary component or app in src/ folder.
- Specify entry file in rollup's config input property (`rollup.config.js`). src/index.js is the entry point currrently.
- Test run your bundle by running `yarn start`.
- Run `yarn build` to bundle the production project to embed.
- $node cdn-server/index.js and $node cdn-server/index.js in differnet console.
- Visit localhost:3001/page and edit myapp.init() inside cdn-client/index.html

## Development and Production difference

Inside src/index.js, you will see the code snippet below with comments.

Comment init() part before you make production files to embed with $yarn build

Uncomment init() part when you want to back to develop React project again.

I have attempted to make it work without manual control. But, it wasn't easy to find how in short period of time.

I think that you can easily find the better way.

```js
export const init = (config = "Window") => {
    alert(config);
    ReactDOM.render(<App config={config} />, document.getElementById('root'));
}

init() 
```

## Read More

* [How to bundle React app with Rollup](https://medium.com/better-programming/lets-build-react-components-library-part-3-b2e7aec478a2)
* [How to Build React components library](https://medium.com/better-programming/lets-build-react-components-library-part-3-b2e7aec478a2)
* [Base Rollup repository for React](https://github.com/codenaz/create-react-package-tutorial)
* [Resolving modules from browser globals](https://engineering.mixmax.com/blog/rollup-externals/)
* [Import undefined rollup](https://www.google.com/search?client=firefox-b-d&q=import-undefined-when-bundling-ui-library-with-rollup)

