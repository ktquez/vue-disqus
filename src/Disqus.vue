<template>
  <div id="disqus_thread" style="min-height: 200px" />
</template>

<script>
import {
  SSO_KEYS,
  CALLBACKS,
  PAGE_CONFIG_KEYS,
  ERROR_SHORTNAME_REQUIRED
} from './constants'
import { getEmitName } from './utils'

export default {
  name: 'Disqus',

  props: {
    shortname: String,
    pageConfig: {
      type: Object,
      validator: config => Object.keys(config).every(key => PAGE_CONFIG_KEYS.includes(key))
    },
    ssoConfig: {
      type: Object,
      validator: config => Object.keys(config).every(key => SSO_KEYS.includes(key))
    },
    lang: {
      type: String,
      default: 'en'
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

  computed: {
    getShortname () {
      const shortname = this.shortname ? this.shortname : this.$disqus ? this.$disqus.shortname : null
      if (!shortname) throw new Error(ERROR_SHORTNAME_REQUIRED)
      return shortname
    }
  },

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
      if (this.$disqus) {
        this.$disqus.reset = this.reset
      }
      if (window.DISQUS) {
        return this.reset()
      }
      const setBaseConfig = this.setBaseConfig
      window.disqus_config = function () {
        setBaseConfig(this)
      }
      this.loadEmbedScript()
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

    loadEmbedScript () {
      const d = document
      const s = d.createElement('script')
      s.setAttribute('id', 'embed-disqus')
      s.setAttribute('data-timestamp', +new Date())
      s.type = 'text/javascript'
      s.async = true
      s.src = `//${this.getShortname}.disqus.com/embed.js`
      ;(d.head || d.body).appendChild(s)
    },

    setBaseConfig (disqusConfig) {
      this.setPageConfig(disqusConfig)
      this.cbDisqus(disqusConfig)

      if (this.ssoConfig && Object.keys(this.ssoConfig).length) {
        Object.assign(disqusConfig.sso, this.ssoConfig)
      }

      disqusConfig.language = this.lang
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
      CALLBACKS.forEach(cb => {
        disqusConfig.callbacks[cb] = [e => {
          this.$emit(getEmitName(cb), e)
        }]
      })
    }
  }
}
</script>
