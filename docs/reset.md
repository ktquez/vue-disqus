# Reset

You can use the reset method when you need Disqus to react to any changes that occur in the application, for example, a change in theme or color mode.

::: tip
Learn more about [Disqus apparence](https://help.disqus.com/en/articles/1717201-disqus-appearance-tweaks)
:::

```vue
<template>
  <div>
    <!-- omited -->
    <button @click="toggleTheme">Change to dark mode</button>
    <!-- omited -->
    <div class="comments">
      <Disqus
        ref="disqus"
        @new-comment="newComment"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPage',

  methods: {
    toggleTheme () {
      this.theme = 'dark'
      this.$disqus.reset() // If VueDisqus installed using Vue.use
      // OR
      this.$refs.disqus.reset() // If Disqus component registered locally
    },
    newComment (e) {
      console.log(e)
    }
  }
}
</script>
```
