module.exports = {
  presets: [
      '@babel/preset-env',
      "@babel/preset-typescript" // 解析ts语法，在采用preset-env
  ],
  overrides: [{
      test: /\.vue$/,   //如果是vue 用下面这个插件
      plugins: [ // ?
          '@babel/transform-typescript',
      ],
  }],
  env: {
      utils: {
          plugins: [ // ?
              [
                  'babel-plugin-module-resolver', // 为了能正确找到-ui模块
                  { root: 'vue3-ui' }
              ]
          ]
      }
  }
}