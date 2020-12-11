module.exports = {
  css: {
    sourceMap: true
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'PokeGames Search!'
        return args
      })
  }
}
