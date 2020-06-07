<template>
  <div id="disqus_thread" style="min-height: 200px" />
</template>

<script>
import {
  callbacks,
  getEmitName,
  allowedSSOKeys,
  allowedPageConfigKeys
} from './utils'

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
    },
    lazy: {
      type: Boolean,
      default: true
    },
    lazyConfig: {
      type: Object,
      default: () => ({
        root: null,
        rootMargin: '300px',
        threshold: 0.5
      })
    }
  },

  data: () => ({
    observer: null
  }),

  watch: {
    lang () {
      this.reset()
    }
  },

  mounted () {
    if (this.lazy) return this.observerDisqus()
    this.init()
  },

  methods: {
    init () {
      if (window.DISQUS) return this.reset()
      const setBaseConfig = this.setBaseConfig
      window.disqus_config = function () {
        setBaseConfig(this)
      }
      this.makeEmbedScript()
      if (this.$route) this.$watch('$route.path', () => this.reset())
    },

    reset (dsq = window.DISQUS) {
      const setBaseConfig = this.setBaseConfig
      dsq.reset({
        reload: true,
        config: function () {
          setBaseConfig(this)
        }
      })
    },

    observerDisqus () {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(this.handleObserver, this.lazyConfig)
        return this.observer.observe(this.$el)
      }
      this.init()
    },

    handleObserver (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.observer.disconnect()
          this.init()
        }
      })
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
      this.setPageConfig(disqusConfig)
      this.cbDisqus(disqusConfig)

      if (this.ssoConfig && Object.keys(this.ssoConfig).length) {
        Object.assign(disqusConfig.sso, this.ssoConfig)
      }

      if (this.lang) {
        disqusConfig.language = this.lang
      }
    },

    setPageConfig (disqusConfig) {
      const defaultConfig = {
        url: document.baseURI,
        identifier: (this.$route.path || window.location.pathname)
      }

      Object.assign(disqusConfig.page, defaultConfig)

      if (this.pageConfig && Object.keys(this.pageConfig).length) {
        Object.assign(disqusConfig.page, this.pageConfig)
      }
    },

    cbDisqus (disqusConfig) {
      callbacks.forEach(cb => {
        disqusConfig.callbacks[cb] = [e => {
          this.$emit(getEmitName(cb), e)
        }]
      })
    }
  }
}
</script>
