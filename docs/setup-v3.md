# Setup Vue 3

## Installation

```bash
npm install -s vue-disqus@next
# or
yarn add vue-disqus@next
```

## Using

### Globally
You can use it globally in your `main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueDisqus from 'vue-disqus'

createApp(App)
  .use(VueDisqus, { shortname: 'your_shortname_disqus' })
  .mount('#app')
```

Using the component in the template

```html
<template>
  <section class='comments' aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus />
  </section>
</template>
```

### Locally

You can import into your component:

```vue
<script>
import { Disqus } from 'vue-disqus'

export default {
  name: 'PostPage',
  components: {
    Disqus
  }
  // ...
}
</script>
```

Using the component in the template

```vue
<template>
  <section class='comments' aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus shortname='your_shortname_disqus' />
  </section>
</template>
```

::: warning
**Shortname** is required when using locally component
:::
