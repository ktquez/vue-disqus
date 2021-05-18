# DisqusCount

## Usage 

You can import the `DisqusCount` component individually.

::: tip
Comment count link text can be customized at your [Disqus Admin](https://ktquez.disqus.com/admin/settings/community/)
:::

```vue
<template>
  <div>
    <!-- ... -->
    <card-post>
      <h2>My awesome post</h2>
      <a href="https://example.com/blog/my-awesome-post" title="See my awesome post">
        See my awesome post
      </a>
      <div>
        <span role="img" aria-label="comment">💬</span>
        <DisqusCount shortname='your_shortname_disqus' identifier="/blog/1" />
      </div>
    </card-post>    
  </div>
</template>

<script>
import { DisqusCount } from 'vue-disqus'

export default {
  name: 'Posts',
  components: {
    DisqusCount
  }
}
</script>
```

## Props

### shortname

| Type     | Required                                                    |
| -------- | ----------------------------------------------------------- |
| String   | `It's required if the component is registered locally`   | 

A shortname is the unique identifier assigned to a Disqus site and tells Disqus to load only your site's comments.

### identifier

| Type     | Required  |
| -------- | --------- |
| String   | `true`    | 

It is used to retrieve the amount of comments from the entered identifier.

### url

| Type     | Required  |
| -------- | --------- |
| String   | `false`   | 

The URL that will be used to retrieve the amount of comments.


### tag

| Type     | Default   |
| -------- | --------- |
| String   | `span`    | 

If you want the element to be a link that takes you directly to the post's comments, just define the `a` tag.

::: warning
If you define an `a` tag, the `url` prop will be required.
:::

```vue
<DisqusCount
  tag="a"
  url="https://example.com/blog/my-awesome-post"
  identifier="/blog/my-awesome-post"
/>
```

**Output**

```html
<a 
  class="disqus-comment-count"
  data-disqus-identifier="/blog/my-awesome-post"
  href="https://example.com/blog/my-awesome-post#disqus_thread">
  4 Comments
</a>
```





