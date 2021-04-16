module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@services': './src/services',
          '@constants': './src/constants',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@reducers': './src/reducers/modules',
        },
      },
    ],
  ],
};
