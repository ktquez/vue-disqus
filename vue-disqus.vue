<template>
  <div id="disqus_thread"></div> 
</template>

<script>
  export default {
    props: {
      shortname: {
        type: String,
        required: true
      }
    },
    ready () {
      if (window.DISQUS) {
        this.reset(window.DISQUS)
        return
      }
      this.init()
    },
    methods: {
      reset (dsq) {
        const self = this
        dsq.reset({
          reload: true,
          config: function () {
            this.page.identifier = (self.$route.path || window.location.pathname)
            this.page.url = self.$el.baseURI
          }
        })
      },
      init () {
        setTimeout(() => {
          (() => {
            let dsq = document.createElement('script')
            dsq.type = 'text/javascript'
            dsq.async = true
            dsq.setAttribute('id', 'embed-disqus')
            dsq.src = 'http://' + this.shortname + '.disqus.com/embed.js'
            document.getElementsByTagName('body')[0].appendChild(dsq)
          })()
        }, 100)
      }
    }
  }
</script>

<style></style>