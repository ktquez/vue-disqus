# Nuxt.js

Create plugin file `plugins/disqus.js`

```js
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus, {
  shortname: 'your_shortname_disqus'
})
```

In config file `nuxt.config.js`

```js
// ...
plugins: [
  '~/plugins/disqus'
]
```

Using in Vue file components

```vue
<template>
  <div class="comments">
    <Disqus />
  </div>
</template>
```