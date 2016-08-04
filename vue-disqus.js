Vue.component('disqus', {
  template: '<div id="disqus_thread"></div>',
  props: {
    shortname: {
      type: String,
      required: true
    }
  },
  ready: function () {
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
      window.disqus_config = function() {
        this.page.url = (self.$route.path || window.location.pathname)
        this.page.url = self.$el.baseURI
      }
      setTimeout(function () {
        var d = document
          , s = d.createElement('script')
        s.setAttribute('id', 'embed-disqus')
        s.setAttribute('data-timestamp', +new Date())
        s.type = 'text/javascript'
        s.async = true
        s.src = '//' + self.shortname + '.disqus.com/embed.js'
        ;(d.head || d.body).appendChild(s)
      }, 0)
    }
  }
});
