<template>
  <component
    class="disqus-comment-count"
    :is="tag"
    :href="getHref"
    :data-disqus-url="getUrl"
    :data-disqus-identifier="identifier"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ERROR_SHORTNAME_REQUIRED } from './constants'
import { draf } from './utils'

export default defineComponent({
  name: 'DisqusCount',

  inheritAttrs: false,

  props: {
    url: String,
    shortname: String,
    identifier: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'span'
    }
  },

  mounted () {
    this.init()
  },

  computed: {
    getHref () {
      return this.tag === 'a' ? `${this.url}#disqus_thread` : null
    },
    getUrl () {
      return this.tag === 'span' ? this.url : null
    },
    getShortname () {
      const shortname = this.shortname ? this.shortname : this.$disqus ? this.$disqus.shortname : null
      if (!shortname) throw new Error(ERROR_SHORTNAME_REQUIRED)
      return shortname
    }
  },

  methods: {
    init () {
      if ('DISQUSWIDGETS' in window) return draf(() => this.reset())
      this.loadCountScript()
      if (this.$route) this.$watch('$route.path', () => draf(() => this.reset()))
    },

    reset (dsqwg = window.DISQUSWIDGETS) {
      dsqwg.getCount({ reset: true })
    },

    loadCountScript () {
      if (document.getElementById('dsq-count-scr')) return
      const d = document
      const s = d.createElement('script')
      s.async = true
      s.id = 'dsq-count-scr'
      s.src = `//${this.getShortname}.disqus.com/count.js`
      ;(d.head || d.body).appendChild(s)
    }
  }
})
</script>
