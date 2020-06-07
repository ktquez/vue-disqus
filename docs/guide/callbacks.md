# Callbacks

`VueDisqus` registers events ($emit) for each callback available in the disqus API.

## Events

| Event name     | Description                                                                              | 
| -------------- | ---------------------------------------------------------------------------------------- |
| ready          | When Disqus is ready. <br> (*This can be used to show a placeholder or loading indicator*).      |
| new-comment    | When a new comment is posted. <br> (*This can be used to track new comments and replies, for example via Google Analytics*).  |
| before-comment | 
| init           | 
| identify       | 
| paginate       | 
| pre-init       | 
| pre-data       | 
| pre-reset      | 
| after-render   | 

```vue
<template>
  <div class='comments'>
    <Disqus
      shortname='your_shortname_disqus'
      @new-comment="newComment"
    />
  </div>
</template>

<script>
export default {
  // ...
  methods: {
    newComment ({ id, text }) {
      // your code
    }
  }
}
</script>
```