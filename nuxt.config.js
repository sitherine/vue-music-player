const webpack = require('webpack')
// var argv = require('yargs').argv
var appTarget = '2'
// var appTarget = 'VERSION_A';
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/common.scss',
    '@/assets/css/reset.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      console.log(process.env)
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /pages\/test\.json/,
          './test2.json'
        )
      )
    }
  }
  // build: {
  //   plugins: [
  //     new webpack.NormalModuleReplacementPlugin(
  //       /pages\/test\.json/,
  //       './test2.json'
  //     )
  //     // new webpack.NormalModuleReplacementPlugin(/(.*)-APP_TARGET(\.*)/, function(resource) {
  //     //   resource.request = resource.request.replace(/-APP_TARGET/, `-${appTarget}`);
  //     // })
  //     // new webpack.NormalModuleReplacementPlugin(/(.*)test(\.*)/, function(resource) {
  //     //   resource.request = resource.request.replace(/test/, `test${appTarget}`);
  //     // })
  //   ]
  // }
}
