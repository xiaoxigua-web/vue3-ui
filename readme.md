
lerna init 
lerna create button
yarn add typescript -W
npx tsc --init
yarn add vue@next -W 
lerna create vue3-ui
╰ yarn add webpack webpack-cli webpack-dev-server vue-loader@next @vue/compiler-sfc -D -W
yarn add babel-loader @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver url-loader file-loader html-webpack-plugin css-loader sass-loader style-loader sass -D





打包格式
1.整个打包 umd
2.esModule
3.按需打包