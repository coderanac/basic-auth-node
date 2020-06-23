import { terser } from "rollup-plugin-terser";
import spa from 'rollup-plugin-html';
const html = require('@rollup/plugin-html');

export default {
  input: 'src/index.js',
  plugins: [
    terser(),
    html(),
    spa({
      include: '**/*.html',
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
        minifyJS: true
      }
    })
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
  },
};