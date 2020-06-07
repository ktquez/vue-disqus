# Getting Started

## Installation

```bash
$ npm install -s vue-disqus
# or
$ yarn add vue-disqus
```

## Setup
You can use it globally in your `main.js`

```js
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus)
```

or you can import into your component:

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

## Usage 

Using the component in the template

```vue
<template>
  <div class='comments'>
    <Disqus shortname='your_shortname_disqus' />
  </div>
</template>
```
