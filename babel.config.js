module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        'preset-react': {},
      },
    ],
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
};
