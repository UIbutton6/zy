const _ = require("lodash");
const path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

function resolve(dir) {
  return path.join(__dirname, dir)
}

const assetsCDN = {
  externals: {
    '@antv/data-set': 'DataSet',
  },
  js: [
    '//gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.9.6/dist/data-set.min.js'
  ],
}
// vue.config.js
const vueConfig = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463
   */
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  //打包app时放开该配置
  //publicPath:'./',
  configureWebpack: config => {
    // 生产环境取消 console.log 
    if (IS_PROD) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true

      // config.optimization.minimizer = [
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         warnings: false,
      //         drop_console: true, //console
      //         drop_debugger: true,
      //         pure_funcs: ['console.log'] //移除console
      //       }
      //     }
      //   })
      // ]

    }
    // config['externals'] =  assetsCDN.externals;
    // config['js'] = assetsCDN.js;
    config["performance"] = {
      "maxEntrypointSize":10000,
      "maxAssetSize":30000000
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@layout', resolve('src/layout'))
      .set('@static', resolve('src/static'))
      .set('@mobile', resolve('src/modules/mobile'))

    //生产环境，开启js\css压缩
    if (IS_PROD) {
        config.plugin('compressionPlugin').use(new CompressionPlugin({
          test: /\.js$|.\css|.\less/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }))

        config.plugin('html').tap(args => {
          args[0].cdn = assetsCDN
          return args
        })
  
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
    }

    // 配置 webpack 识别 markdown 为普通的文件
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use()
      .loader('file-loader')
      .end()
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          'primary-color': '#1890FF',
          'link-color': '#1890FF',
          'border-radius-base': '4px',
        },
        javascriptEnabled: true,
      }
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    proxy: 'http://192.168.2.77:9999',
    // proxy: 'http://120.27.219.12:9999',
  },

  lintOnSave: undefined
}

module.exports = vueConfig