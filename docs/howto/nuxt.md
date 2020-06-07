# Nuxt.js

Create plugin file `plugins/disqus.js`

```js
import Vue from 'vue'
import { VueDisqusPlugin } from 'vue-disqus'

Vue.use(VueDisqusPlugin)
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
    <Disqus shortname="your_shortname_disqus" />
  </div>
</template>
```