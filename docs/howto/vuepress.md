# Vuepress

::: tip
VueDisqus is part of [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/) and just define `disqus` in the plugin [configuration options](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#comment).
:::

---

If you are not using the `@vuepress/plugin-blog`, you can use VueDisqus normally by importing the component locally.

```vue
<template>
  <div>
    <!-- omitted -->
    <div class='comments'>
      <Disqus shortname='your_shortname_disqus' />
    </div>
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'

export default {
  name: 'PostPage',
  components: {
    Disqus
  }
}
</script>
```

Or importing globally into your `enhanceApp.js`

```js
import VueDisqus from 'vue-disqus'

export default ({ Vue }) => {
  Vue.use(VueDisqus, {
    shortname: 'your_shortname_disqus'
  })
}
```

```vue
<template>
  <div>
    <!-- omitted -->
    <div class='comments'>
      <Disqus />
    </div>
  </div>
</template>
```
