import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';

export default {
  entry: 'index.js',
  plugins: [babel(), npm()]
};
