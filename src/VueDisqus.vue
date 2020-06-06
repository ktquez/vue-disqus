<template>
  <div id="disqus_thread" />
</template>

<script>
import { allowedPageConfigKeys, allowedSSOKeys } from './utils'

export default {
  name: 'VueDisqus',

  props: {
    shortname: {
      type: String,
      required: true
    },
    pageConfig: {
      type: Object,
      required: false,
      validator: config => Object.keys(config).every(key => allowedPageConfigKeys.includes(key))
    },
    ssoConfig: {
      type: Object,
      required: false,
      validator: config => Object.keys(config).every(key => allowedSSOKeys.includes(key))
    },
    lang: {
      type: String
    }
  },

  watch: {
    lang () {
      this.reset()
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

    setPageConfig (disqusConfig) {
      const defaultConfig = {
        url: this.$el.baseURI,
        identifier: (this.$route.path || window.location.pathname)
      }

      Object.assign(disqusConfig.page, defaultConfig)

      if (this.pageConfig && Object.keys(this.pageConfig).length) {
        Object.assign(disqusConfig.page, this.pageConfig)
      }
    },

    cbDisqus (disqusConfig) {
      disqusConfig.callbacks.onReady = [() => {
        this.$emit('ready')
      }]

      disqusConfig.callbacks.onNewComment = [(comment) => {
        this.$emit('new-comment', comment)
      }]
    },

    setBaseConfig (disqusConfig) {
      this.setPageConfig(disqusConfig)
      this.cbDisqus(disqusConfig)

      if (this.ssoConfig && Object.keys(this.ssoConfig).length) {
        Object.assign(disqusConfig.sso, this.ssoConfig)
      }

      if (this.lang) {
        disqusConfig.language = this.lang
      }
    }
  }
}
</script>
