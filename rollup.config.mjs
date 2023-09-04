import terser from '@rollup/plugin-terser';

export default {
  input: 'bin.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [terser()],
};
