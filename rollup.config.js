const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const uglify = require("rollup-plugin-uglify");
import { minify } from 'uglify-es';

export default {
  input: 'lib/ubergang.js',
  output: {
    file: 'dist/ubergang.min.js',
    format: 'cjs'
  },
  plugins: [
    uglify({}, minify)
  ]
};
