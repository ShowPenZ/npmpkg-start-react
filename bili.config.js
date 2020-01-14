module.exports = {
  babel: {
    // asyncToPromises: true,
    // babelrc: false,
    // configFile: false,
    jsx: 'react',
    // minimal: false,
    // objectAssign: 'myAssign',
  },
  banner: false,
  bundleNodeModules: true,
  // env: { NODE_ENV: 'develope' },
  // extendConfig: () => {},
  // extendRollupConfig: () => {},
  // externals: [],
  globals: {
    react: 'React',
  },
  input: 'src/xxxx.jsx',
  output: {
    dir: 'dist',
    extractCSS: true, //打包出来的js文件是否包含css
    // fileName: '[name][suffix].js',
    format: ['cjs-min', 'es-min', 'umd-min'],
    minify: true,
    moduleName: 'xxxx',
    sourceMap: true,
    sourceMapExcludeSources: true,
    target: 'browser',
  },
  // plugins: {},
  // resolvePlugins: {},
};
