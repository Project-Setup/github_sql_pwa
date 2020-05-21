# Github Page PWA boilerplate with NextJs, code splitting Redux-Toolkit, Sql.js, Typeorm, Typescript, Eslint, Jest and Emotion.

## Highlight
* **Multi-page** **React** **Progressive Web App**
* Installable for **offline** use through Chrome on desktop or **mobile**
* Can be statically hosted on **Github Page** for free (or as a regular web app hosted on a custom server)
* Dynamically loaded **Redux** reducers for **code splitting**
* On browser **SQL** database
* Prefetch security sensitive content at build time
* All in **Typescript**/Javascript with **CSS-in-JS**
* Easy testing with **Jest** and **Enzyme**
* **Eslint** helps practice standard coding styles


## Versions
* NextJs v9.4.1
* Redux-Toolkit v1.3.6
* Emotion v10
* Sql.js v1.2.2
* Typeorm v0.2.25
* Typescript v3.9.3

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
2. add `.env` and other .env files
3. preview dev progress on `http://localhost:3000/`
    ```sh
    npm run dev
    ```
4. export to `docs/` for Github Page deploy
    ```sh
    npm run export
    ```
5. read [Setup](#Setup) for notes

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
        "forceConsistentCasingInFileNames": true,
        "baseUrl": "./src"
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
    npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-import-resolver-typescript
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
          typescript: {},
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
      moduleDirectories: ['node_modules', 'src'],
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
    import { join } from 'path';
    import { loadEnvConfig } from 'next/dist/lib/load-env-config';

    // to load '.env' files in test
    loadEnvConfig(join(__dirname, '.../'));

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

1. add `.env.production`
  ```sh
  NEXT_PUBLIC_LINK_PREFIX=/{folder}
  ```
2. create `LINK_PREFIX` in `next.config.js`
    ```js
    const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';
    module.exports = () => ({
      assetPrefix: LINK_PREFIX,
    });
    ```
3. change `as` prop in `next/Link` to add `linkPrefix`, similar to `src/features/link/Link.tsx` in the example setup
4. change `scripts` in `package.json`
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
      const FOLDER = LINK_PREFIX && LINK_PREFIX.substring(1);

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
      withManifest(
        withPWA({
          // ...

          // service worker
          pwa: {
            disable: !isProd,
            subdomainPrefix: LINK_PREFIX,
            dest: 'public',
            navigationPreload: true,
          },
        

        // manifest
          manifest: {
            /* eslint-disable @typescript-eslint/camelcase */
            output: 'public',
            short_name: FOLDER,
            name: FOLDER,
            start_url: `${LINK_PREFIX}/`,
            background_color: THEME_COLOR,
            display: 'standalone',
            scope: `${LINK_PREFIX}/`,
            dir: 'ltr', // text direction: left to right
            theme_color: THEME_COLOR,
            icons: [
              {
                src: `${LINK_PREFIX}${ICON_192_PATH}`,
                sizes: '192x192',
                type: 'image/png',
              },
              {
                src: `${LINK_PREFIX}${ICON_512_PATH}`,
                sizes: '512x512',
                type: 'image/png',
              },
            ],
          },
        })
      );
    ```
3. add `public/icons` folder and include corresponding icon files in the folder
4. copy `ManifestHead.tsx` from the example setup `src/features/head`
5. import `ManifestHead` in pages

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
    const { dependencies } = require('./package-lock.json');
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
          NEXT_PUBLIC_SQL_JS_VERSION: dependencies['sql.js'].version || '',
        }
      })
    // ...
    ```
6. copy `connection.ts` from `src/sql/connection` in the example setup and modify the `defaultEntities`


### Notes:
1. NextJs, next-pwa, workbox are still growing their api, so this project setup will be modified in the future for easier setup.
2. There is a known error on the workbox: https://github.com/GoogleChrome/workbox/issues/2178.
3. Only direct children in `next/head` will be picked up at build time, so all `next/link` wrapped elements must be inserted (useEffect) after the `next/head` is loaded.
