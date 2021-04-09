<template>
  <div id="disqus_thread" style="min-height: 200px" />
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref, watch, getCurrentInstance, Ref } from 'vue'

import * as CONSTANTS from './constants'
import { DisqusConfig, VueDisqusInstance } from './types'

import { getEmitName } from './utils'

export default defineComponent({
  name: 'Disqus',

  props: {
    shortname: String,
    pageConfig: {
      type: Object,
      validator: (config: any) => Object.keys(config).every(key => CONSTANTS.PAGE_CONFIG_KEYS.includes(key))
    },
    ssoConfig: {
      type: Object,
      validator: (config: any) => Object.keys(config).every(key => CONSTANTS.SSO_KEYS.includes(key))
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

  setup (props, { emit }) {
    const $disqus = <VueDisqusInstance>inject(CONSTANTS.DISQUS_CONFIG_KEY)
    const instance = getCurrentInstance()
    const observer = <Ref<IntersectionObserver|null>>ref(null)
    const currentRoute = ref(window.location.pathname)

    const getShortname = computed(() => {
      const shortname = props.shortname || $disqus.shortname
      if (!shortname) throw new Error(CONSTANTS.ERROR_SHORTNAME_REQUIRED)
      return shortname
    })

    watch(() => props.lang, reset)

    onMounted(() => {
      if (props.lazy) return observerDisqus()
      init()
    })

    function init () {
      if ($disqus) {
        $disqus.reset = reset
      }
      if (window.DISQUS) {
        return reset()
      }
      (<any>window).disqus_config = function () {
        setBaseConfig(this)
      }
      loadEmbedScript()
      watch(() => currentRoute.value, reset)
    }
    
    function reset () {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          setBaseConfig(this)
        }
      })
    }

    function observerDisqus () {
      if ('IntersectionObserver' in window) {
        observer.value = new IntersectionObserver(handleObserver, props.lazyConfig)
        return observer.value.observe(instance?.proxy?.$el)
      }
      init()
    }

    function handleObserver (entries: IntersectionObserverEntryInit[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.value?.disconnect()
          init()
        }
      })
    }

    function loadEmbedScript () {
      const date = +new Date()
      const d = document
      const s = d.createElement('script')
      s.setAttribute('id', 'embed-disqus')
      s.setAttribute('data-timestamp', date.toString())
      s.type = 'text/javascript'
      s.async = true
      s.src = `//${getShortname.value}.disqus.com/embed.js`
      ;(d.head || d.body).appendChild(s)
    }

    function setBaseConfig (disqusConfig: DisqusConfig) {
      setPageConfig(disqusConfig)
      cbDisqus(disqusConfig)

      if (props.ssoConfig && Object.keys(props.ssoConfig).length) {
        Object.assign(disqusConfig.sso, props.ssoConfig)
      }

      disqusConfig.language = props.lang
    }

    function setPageConfig (disqusConfig: DisqusConfig) {
      const defaultConfig = {
        url: document.baseURI,
        identifier: window.location.pathname
      }

      Object.assign(disqusConfig.page, defaultConfig)

      if (props.pageConfig && Object.keys(props.pageConfig).length) {
        Object.assign(disqusConfig.page, props.pageConfig)
      }
    }

    function cbDisqus (disqusConfig: DisqusConfig) {
      CONSTANTS.CALLBACKS.forEach(cb => {
        disqusConfig.callbacks[cb] = [(e: any) => {
          emit(getEmitName(cb), e)
        }]
      })
    }

  }
})
</script>
