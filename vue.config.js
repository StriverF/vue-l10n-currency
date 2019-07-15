
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  // 输出文件目录
  outputDir: 'docs',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'text-loader'
        }
      ]
    }
  }

    // chainWebpack: config => {
    //   config.module
    //     .rule('js')
    //     .include.add('/packages')
    //     .end()
    //     .use('babel')
    //     .loader('babel-loader')
    //     .tap(options => {
    //       // 修改它的选项...
    //       return options
    //     })
    // }
  }
  