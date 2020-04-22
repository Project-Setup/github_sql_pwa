# Example Github Page PWA with NextJs, code splitting Redux-Toolkit, Typescript, Eslint, Jest and Emotion.

## Versions
* NextJs v9.3.4
* Redux-Toolkit v1.3.4
* Emotion v10
* Sql.js v1.2.2
* Typeorm v0.2.24
* Typescript v3.8.3

## Other Project Setup
* **[[Nextjs_Ts_Eslint]](https://github.com/Project-Setup/Nextjs_Ts_Eslint)** NextJs, EmotionJs, Typescript
* **[[nextjs_redux_toolkit]](https://github.com/Project-Setup/nextjs_redux_toolkit)** NextJs, Redux-Toolkit
* **[[github_pwa]](https://github.com/Project-Setup/github_pwa)** Github page pwa setup with NextJs, code splitting Redux-Toolkit

## Usage of this example setup

0. setup node env
    ```sh
    nvm use
    npm install
    ```
1. remove unwanted files in `public/`, `src/`
2. modify `configs/` and add `.env/`
3. preview dev progress on `http://localhost:3000/`
    ```sh
    npm run dev
    ```
4. read [Setup](#Setup) for notes

## Setup

0. install nvm in the os
1. 
   ```sh
   nvm install node
   git init
   ```
2. add `.gitignore`
4. 
    ```sh
    node -v > .nvmrc
    ```
4. 
    ```sh
    npm init -y
    ```

### [NextJs](https://github.com/zeit/next.js#how-to-use)
1. 
    ```sh
    npm i -S next react react-dom
    ```
2. add a script to your package.json like this:
    ```json
    {
      "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
      }
    }
    ```

### [Typescript](https://github.com/zeit/next.js#typescript)

1.
    ```sh
    npm i -D typescript @types/react @types/react-dom @types/node
    ```
2. create `tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "alwaysStrict": true,
        "esModuleInterop": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "lib": [
          "dom",
          "es2017"
        ],
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "typeRoots": [
          "./node_modules/@types"
        ],
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "removeComments": false,
        "skipLibCheck": true,
        "strict": true,
        "target": "esnext",
        "forceConsistentCasingInFileNames": true
      },
      "exclude": [
        "node_modules",
        "next.config.js"
      ],
      "include": [
        "**/*.ts",
        "**/*.tsx"
      ]
    }
    ```

### [Create Pages](https://github.com/zeit/next.js#typescript)
1. create `src/pages` folder (or `pages`)
2. create `pages.tsx` under `src/pages/` (i.e. `src/pages/index.tsx` for `/` route)


### [Eslint and Prettier](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
1. 
    ```sh
    npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
    npm i -D eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react-hooks
    npm i -D prettier eslint-config-prettier eslint-plugin-prettier
    ```
2. create `.eslintrc.js`
    ```js
    module.exports =  {
      parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
      extends:  [
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'airbnb',  //Uses airbnb recommended rules
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
          jsx:  true,  // Allows for the parsing of JSX
        },
      },
      env: {
        browser: true,
        node: true
      },
      rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          'vars': 'all',
          'args': 'after-used',
          'ignoreRestSiblings': false
        }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-first-prop-new-line': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-namespace': 'off',
        'jsx-a11y/anchor-is-valid': [ 'error', {
          'components': [ 'Link' ],
          'specialLink': [ 'hrefLeft', 'hrefRight' ],
          'aspects': [ 'invalidHref', 'preferButton' ]
        }],    
        'react/prop-types': 'off',
        'import/extensions': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': [
          'error',
          {
            'devDependencies': true
          }
        ],
        'comma-dangle': [
          'error',
          {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never'
          }
        ],
        "react-hooks/rules-of-hooks": "error",
        'react-hooks/exhaustive-deps': 'off',
        'no-bitwise': 'off'
      },
      plugins: [
        '@typescript-eslint/eslint-plugin',
        'react-hooks',
      ],
      settings:  {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
        react:  {
          version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
    };
    ```
3. create `.prettierrc.js`
    ```js
    module.exports =  {
      semi:  true,
      trailingComma:  'es5',
      singleQuote:  true,
      printWidth:  80,
      tabWidth:  2,
    };
    ```

### [Jest and Enzyme](https://medium.com/@miiny/unit-test-next-js-with-jest-and-enzyme-5b305a8e29fe)
1. 
    ```sh
    npm i -D jest babel-jest
    ```
2. add scripts in `package.json`
    ```json
    "scripts": {
      "test": "jest",
      "test:watch": "jest --watch",
      "test:coverage": "jest --coverage"
    },
    ```
3. 
    ```sh
    npm i -D enzyme enzyme-adapter-react-16 enzyme-to-json
    npm i -D typescript @types/enzyme @types/enzyme-adapter-react-16 @types/jest
    ```
4. create `jest.config.js`
    ```js
    module.exports = {
      moduleFileExtensions: ['ts', 'tsx', 'js'],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
      globals: {
        NODE_ENV: 'test',
      },
      snapshotSerializers: ['enzyme-to-json/serializer'],
      transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
      },
      coveragePathIgnorePatterns: [
        '/node_modules/',
        'jest.setup.js',
        '<rootDir>/configs/',
        'jest.config.js',
        '.json',
        '.snap',
      ],
      setupFiles: ['<rootDir>/jest/jest.setup.js'],
      coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/mocks.js',
        '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
      },
    };
    ```
5. create `babel.config.js`
    ```js
    module.exports = {
      presets: ['next/babel'],
    };
    ```
6. create `jest/jest.setup.js`
    ```js
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    Enzyme.configure({ adapter: new Adapter() });
    ```
7. change `env` in `.eslintrc.js`
    ```js
    env: {
            browser: true,
            node: true,
            jest: true
          },
    ```

### [EmotionJs](https://emotion.sh/docs/install)
1. 
    ```sh
    npm i -S @emotion/core
    npm i -D @emotion/babel-preset-css-prop jest-emotion eslint-plugin-emotion
    ```
2. change `babel.config.js`
    ```js
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
    };
    ```
3. add rules and plugins to `.eslintrc.js`
    ```js
    module.exports = {
      // ...
      rules: {
        // ...
        "emotion/no-vanilla": "error",
        "emotion/import-from-emotion": "error",
        "emotion/styled-import": "error",
      },
      // ...
      plugins: [
        'emotion',
        // ...
      ],
      // ...
    }
    ```
4. add `jest/jest.setupAfterEnv.js`
    ```js
    import { matchers } from 'jest-emotion';

    expect.extend(matchers);
    ```
5. add serializers and setup files to `jest/jest.config.js`
    ```js
    // ...
    snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
    // ...
    setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
    // ...
    ```

### [Deploy to Github Pages](https://github.com/zeit/next.js/issues/3335#issuecomment-489354854)
(deploy to /docs intead of using gh-pages branch; replace `{folder}` with the project name in github repo)

1. create `LINK_PREFIX` in `next.config.js`
    ```js
    const isProd = process.env.NODE_ENV === 'production';
    const prodAssetPrefix = '/{folder}';
    module.exports = () => ({
      env: {
        LINK_PREFIX: isProd ? prodAssetPrefix : '';
      },
      assetPrefix: isProd ? prodAssetPrefix : '';,
    });
    ```
2. change `as` prop in `next/Link` to add `linkPrefix`, similar to `src/features/link/Link.tsx` in the example setup
3. change `scripts` in `package.json`
    ```json
    {
      "scripts": {
        "export": "NODE_ENV=production npm run build && next export -o docs && touch docs/.nojekyll"
      }
    }
    ```

<br/>

### _Optional_:
### Optional chaining
1. 
    ```sh
    npm i -D @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining
    ```
2. add the plugins to `babel.config.js`
    ```js
    module.exports = {
      presets: [
        // ...
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    };
    ```

### Dotenv
1.
    ```sh
    npm i -S dotenv
    ```
2. add `.env/development.env` and `.env/production.env`
3. add `config/env.mapping.js`
    ```js
    /* eslint-disable @typescript-eslint/no-var-requires */
    const path = require('path');
    require('dotenv').config({
      path: path.join(__dirname, `../.env/${process.env.NODE_ENV}.env`),
    });

    // env mapping for exposure to client
    module.exports = {/* EXAMPLE_VAR: process.env.EXAMPLE */};
    ```
4. add to `jest/jest.setup.js`
    ```js
    // ...
    import envMapping from '../configs/env.mapping';
    Object.assign(process.env, envMapping);
    // ...
    ```

<br/>

### [Redux-Toolkit](https://redux-toolkit.js.org/)
1. 
    ```sh
    npm i -S react-redux @reduxjs/toolkit
    npm i -D @types/react-redux
    ```
2. either use `next-redux-wrapper` package (`npm i -P next-redux-wrapper`) or copy the `withRedux.tsx` from the example setup `src/utils/redux`
3. create custom `makeStore` function, `_app.tsx` page and other redux setup as examples in `next-redux-wrapper` repo shows

#### [code splitting](https://manukyan.dev/posts/2019-04-15-code-splitting-for-redux-and-optional-redux-saga/)
1. copy `configureStore.ts`, `DynamicStoreWrap.tsx` from the example setup `src/utils/redux`, and `objectAssign.ts` from `src/utils/common`
2. change `src/_app.tsx` similar to the example setup

### [PWA](https://github.com/shadowwalker/next-pwa#readme)
1.
    ```sh
    npm i -S next-pwa
    ```
2. change `next.config.js`
    ```js
      const isProd = process.env.NODE_ENV === 'production';

      // tranfrom precache url for browsers that encode dynamic routes
      // i.e. "[id].js" => "%5Bid%5D.js"
      const encodeUriTransform = async (manifestEntries) => {
        const manifest = manifestEntries.map((entry) => {
          entry.url = encodeURI(entry.url);
          return entry;
        });
        return { manifest, warnings: [] };
      };

      module.exports = () =>
      withPWA({
        // ...

        pwa: {
          disable: !isProd,
          subdomainPrefix: proces.env.LINK_PREFIX,
          dest: 'public',
          navigationPreload: true,
        },
      });
    ```
3. add `public/manifest.json` similar to the one in the example setup
4. add `public/icons` folder and include corresponding icon files in the folder
5. copy `ManifestHead.tsx` from the example setup `src/features/head`
6. import `ManifestHead` in pages

### [Typeorm and Sql.js](https://typeorm.io/#/)
1.
    ```sh
    npm i -S typeorm reflect-metadata sql.js localforage next-transpile-modules
    npm i -D webpack babel-plugin-transform-typescript-metadata @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
    ```
2. add to `compilerOptions` in `tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
      }
    }
    ```
3. add to the `plugins` in `babel.config.js`
```js
// ...
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    // ...
  ]
// ...
```
4. add to the top of `_app.tsx` or whatever the entry file
    ```tsx
    import 'reflect-metadata';
    import localforage from 'localforage';
    // ...
    declare global {
      interface Window {
        localforage?: LocalForage;
      }
    }

    // ... 
    // ...inside the App
      useEffect(() => {
        window.localforage = localforage;
        return () => {
          window.localforage = undefined;
        };
      }, []);
    // ...
    ```
5. add to `next.config.js`
    ```js
    // ...
    const withTM = require('next-transpile-modules')(['typeorm/browser']);
    const webpack = require('webpack');
    // ...
    module.exports = () => 
      /* ... other wrappers, like withPWA()
      add withTM wrap innermost */
      withTM({
        webpack: (config, { isServer }) => {
          config.plugins.push(
              new webpack.ProvidePlugin({
                'window.SQL': 'sql.js/dist/sql-wasm.js',
              })
            );
            if (!isServer) {
              config.node = {
                fs: 'empty',
                net: 'empty',
                tls: 'empty',
              };
            }
            return config;
        }

        // ...other existing configs
        env: {
          SQL_JS_VERSION: '1.2.2',
          // or the current version of sql.js for sql-wasm.wasm retrieval
        }
      })
    // ...
    ```
6. copy `connection.ts` from `src/sql/connection` in the example setup and modify the `defaultEntities`


### Notes:
1. NextJs, next-pwa, workbox are still growing their api, so this project setup will be modified in the future for easier setup.
2. There is a known error on the workbox: https://github.com/GoogleChrome/workbox/issues/2178.
3. The `subdomainPrefix` config is based on the unapproved pr https://github.com/shadowwalker/next-pwa/pull/33.
4. Only direct children in `next/head` will be picked up at build time, so all `next/link` wrapped elements must be inserted (useEffect) after the `next/head` is loaded.
