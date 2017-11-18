(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // amd
    define('VueDisqus', ['vue'], factory);
  } else if (typeof exports === 'object' && typeof module === 'object') {
    // commonjs2
    module.exports = factory(require('vue'));
  } else if (typeof exports === 'object') {
    // commonjs
    exports.VueDisqus = factory(require('vue'));
  } else {
    // global variable
    root.VueDisqus = factory(root.Vue);
  }
})(this, function (Vue) {
  return Vue.component('vue-disqus', {
    template: '<div id="disqus_thread"></div>',
    props: {
      shortname: {
        type: String,
        required: true
      },
      identifier: {
        type: String,
        required: false
      },
      url: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      remote_auth_s3: {
        type: String,
        required: false
      },
      api_key: {
        type: String,
        required: false
      },
      sso_config: {
        type: Object,
        required: false
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
        const self = this
        dsq.reset({
          reload: true,
          config: function () {
            self.setBaseConfig(this)
          }
        })
      },
      init: function () {
        const self = this
        window.disqus_config = function() {
          self.setBaseConfig(this)
        }
        setTimeout(() => {
          let d = document
            , s = d.createElement('script')
          s.setAttribute('id', 'embed-disqus')
          s.setAttribute('data-timestamp', +new Date())
          s.type = 'text/javascript'
          s.async = true
          s.src = `//${this.shortname}.disqus.com/embed.js`
          ;(d.head || d.body).appendChild(s)
        }, 0)
      },
      setBaseConfig (disqusConfig){
        disqusConfig.page.identifier = (this.identifier || this.$route.path || window.location.pathname)
        disqusConfig.page.url = (this.url || this.$el.baseURI)
        if (this.title){
          disqusConfig.page.title = this.title;
        }
        if (this.remote_auth_s3){
          disqusConfig.page.remote_auth_s3 = this.remote_auth_s3;
        }
        if (this.key){
          disqusConfig.page.api_key = this.key;
        }
        if (this.sso_config){
          disqusConfig.sso = this.sso_config;
        }

        disqusConfig.callbacks.onReady = [() => {
          this.$emit('ready')
        }]
      }
    }
  });
});
