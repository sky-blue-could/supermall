//配置项目相关目录的别名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
				//会直接从src目录下面找这些东东
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

