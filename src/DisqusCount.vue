<template>
  <component
    class="disqus-comment-count"
    :is="tag"
    :href="getHref"
    :data-disqus-url="getUrl"
    :data-disqus-identifier="identifier"
  />
</template>

<script>
export default {
  name: 'DisqusCount',

  inheritAttrs: false,

  props: {
    shortname: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    url: String
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
    }
  },

  methods: {
    init () {
      if ('DISQUSWIDGETS' in window) return this.reset()
      this.loadCountScript()
      if (this.$route) this.$watch('$route.path', () => this.reset())
    },

    reset (dsqwg = window.DISQUSWIDGETS) {
      dsqwg.getCount({ reset: true })
    },

    loadCountScript () {
      const d = document
      const s = d.createElement('script')
      s.async = true
      s.id = 'dsq-count-scr'
      s.src = `//${this.shortname}.disqus.com/count.js`
      ;(d.head || d.body).appendChild(s)
    }
  }
}
</script>
