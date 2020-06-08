export default {
  mounted () {
    let nprogress = null

    import('nprogress').then(module => {
      nprogress = module.default
      nprogress.configure({ showSpinner: false })
    })

    this.$router.beforeEach((to, from, next) => {
      if (nprogress) nprogress.start()
      next()
    })

    this.$router.afterEach(() => {
      if (nprogress) nprogress.done()
    })
  }
}
