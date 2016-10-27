Vue.component('disqus', {
  template: '<div id="disqus_thread"></div>',
  props: {
    shortname: {
      type: String,
      required: true
    }
  },
  mounted: function () {
    if (window.DISQUS) {
      this.reset(window.DISQUS)
      return
    }
    this.init()
  },
  methods: {
    reset: function (dsq) {
      var self = this
      dsq.reset({
        reload: true,
        config: function () {
          this.page.identifier = (self.$route.path || window.location.pathname)
          this.page.url = self.$el.baseURI
        }
      })
    },
    init: function () {
      var self = this
      setTimeout(function () {
        (function () {
          var dsq = document.createElement('script')
          dsq.type = 'text/javascript'
          dsq.async = true
          dsq.setAttribute('id', 'embed-disqus')
          dsq.src = 'http://' + self.shortname + '.disqus.com/embed.js'
          document.getElementsByTagName('body')[0].appendChild(dsq)
        })()
      }, 100)
    }
  }
});