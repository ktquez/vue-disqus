# Setup

## Installation

```bash
$ npm install -s vue-disqus
# or
$ yarn add vue-disqus
```

## Using

### Globally
You can use it globally in your `main.js`

```js
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus, {
  shortname: 'your-shortname-disqus'
})
```

Using the component in the template

```vue
<template>
  <div class='comments'>
    <Disqus />
  </div>
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
  <div class='comments'>
    <Disqus shortname='your_shortname_disqus' />
  </div>
</template>
```

::: warning
Shortname is required when using locally component
:::
