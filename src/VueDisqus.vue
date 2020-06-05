<template>
  <div id="disqus_thread" />
</template>

<script>
export default {
  name: 'VueDisqus',

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
    },
    language: {
      type: String,
      required: false
    }
  },

  mounted () {
    if (window.DISQUS) return this.reset()
    this.init()
  },

  methods: {
    reset (dsq = window.DISQUS) {
      const setBaseConfig = this.setBaseConfig
      dsq.reset({
        reload: true,
        config: function () {
          setBaseConfig(this)
        }
      })
    },

    init () {
      const setBaseConfig = this.setBaseConfig
      window.disqus_config = function () {
        setBaseConfig(this)
      }
      this.makeEmbedScript()
      if (this.$route) this.watchUrl()
    },

    watchUrl () {
      this.$watch('$route.path', () => this.reset())
    },

    makeEmbedScript () {
      setTimeout(() => {
        const d = document
        const s = d.createElement('script')
        s.setAttribute('id', 'embed-disqus')
        s.setAttribute('data-timestamp', +new Date())
        s.type = 'text/javascript'
        s.async = true
        s.src = `//${this.shortname}.disqus.com/embed.js`
        ;(d.head || d.body).appendChild(s)
      }, 0)
    },

    setBaseConfig (disqusConfig) {
      disqusConfig.page.identifier = (this.identifier || this.$route.path || window.location.pathname)
      disqusConfig.page.url = (this.url || this.$el.baseURI)
      if (this.title) {
        disqusConfig.page.title = this.title
      }
      if (this.remote_auth_s3) {
        disqusConfig.page.remote_auth_s3 = this.remote_auth_s3
      }
      if (this.api_key) {
        disqusConfig.page.api_key = this.api_key
      }
      if (this.sso_config) {
        disqusConfig.sso = this.sso_config
      }
      if (this.language) {
        disqusConfig.language = this.language
      }

      disqusConfig.callbacks.onReady = [() => {
        this.$emit('ready')
      }]

      disqusConfig.callbacks.onNewComment = [(comment) => {
        this.$emit('new-comment', comment)
      }]
    }
  }
}
</script>
