module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};
