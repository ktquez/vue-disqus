# CDN

You can use `vue-disqus` easily through CDN.

```html
<!-- Add in your head tag -->
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-disqus"></script>
```

```html
<div id="app">
  <!-- code -->
  <div class="comments">
    <vue-disqus shortname="your_shortname_disqus"></vue-disqus>
  </div>
</div>
```

::: tip
You do not need to use `Vue.use` because the component is automatically installed globally.
::: 