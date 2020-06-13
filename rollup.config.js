import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';

// https://github.com/rollup/rollup/issues/719
// It is not working?
// import replace from 'rollup-plugin-replace';

import pkg from './package.json';

export default { 
  input: './src/index.js',
  output: {
      file: pkg.embed,
      format: 'umd',
      name: 'myapp'
  },
  plugins: [
    external(),
    postcss(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    image(),
    visualizer(),
    // replace({
    //  PRODUCTION: process.env.NODE_ENV === 'production'
    // })
  ]
};
