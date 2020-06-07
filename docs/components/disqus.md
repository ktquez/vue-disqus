# Disqus

You can import the `Disqus` component individually.

```vue
<template>
  <div>
    <!-- ommited -->
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