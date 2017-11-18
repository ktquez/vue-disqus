# vue-disqus
> Vue component to integrate Disqus comments in your application [Vue.js](http://vuejs.org/), with support for SPA and Vue 2.*


## Installation

##### 1.) Install package via NPM

```shell
$ npm install vue-disqus
```

> For Vue 1.* use [v1.0.2](https://github.com/ktquez/vue-disqus/tree/v1.0.2) - `npm install --save vue-disqus@1.0.2`

## Using in `.vue` files
##### 2.) Add the component `vue-disqus`
```vue
<template>
  // omited (identifier and url are optional)
  <div class="comments">
    <disqus shortname="your_shortname_disqus" :identifier="page_id" url="http://example.com/path"></disqus>
  </div>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  // ...
  components: {
    VueDisqus
  }
}
// ...
```

---

## Using in AMD or CommonJS modules
##### 3.) require the component `vue-disqus`

var VueDisqus = require('vue-disqus')

---

## Using with HTML files
##### 4.) Add the component to the base instance Vue

```html
<!-- Required Javascript -->
<script src="vue.js"></script>
<script src="node_modules/vue-disqus/vue-disqus.js"></script>
```

```html
<!-- Assuming your view app is APP. -->
<body id="app">
  <div class="comments">
    <vue-disqus shortname="your_shortname_disqus"></vue-disqus>
  </div>
</body>
```

## Props

Prop            | Data Type  | required  | Description
--------------- | ---------- | --------- | -----------
`shortname`     | String     | true      | Your shortname disqus.
`title`         | String     | false     | Title to identify current page.
`identifier`    | String     | false     | Your unique identifier
`sso_config`    | Object     | false     | Single sign-on (SSO) 
`api_key`       | String     | false     | Your API key disqus
`remote_auth_s3`| String     | false     | implementation with Laravel/PHP

## Events

Event name | Description 
---------- | ----------- 
`ready`    | When Disqus is ready. This can be used to show a placeholder or loading indicator.


See [Event Handling](https://vuejs.org/v2/guide/events.html).

## License

[MIT](http://opensource.org/licenses/MIT)


