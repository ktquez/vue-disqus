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
      // Update theme here

      this.$disqus.reset() // Use this if VueDisqus was installed with Vue.use
      
      // Note: Use "this.$refs.disqus.reset()" if Disqus component was registered locally
    },
    newComment (e) {
      console.log(e)
    }
  }
}
</script>
```
