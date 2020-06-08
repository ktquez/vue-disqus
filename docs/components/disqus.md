# Disqus

## Usage 

You can import the `Disqus` component individually.

```vue
<template>
  <div>
    <!-- omitted -->
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

## Props

### shortname

| Type     | Required                                                    |
| -------- | ----------------------------------------------------------- |
| String   | `It's required if the component is registered locally`   | 

A shortname is the unique identifier assigned to a Disqus site and tells Disqus to load only your site's comments.

```vue
<Disqus shortname='your_shortname_disqus' />
```

::: tip
Learn more about [shortname](https://help.disqus.com/en/articles/1717111-what-s-a-shortname)
::: 

### pageConfig

| Type     | Required  |
| -------- | --------- |
| Object   | `false`   | 

Page configuration properties are used as parameters for Disqus' behaviors and settings. 

| Key              | Default                              | Description (Tells the Disqus service)                                     
| ---------------- | ------------------------------------ | --------------------------------------------------------- 
| url              | `document.baseURI`                   | The URL of the current page. [See more](https://help.disqus.com/en/articles/1717084-javascript-configuration-variables#thispageurl)
| identifier       | `$route.path` or `location.pathname` | How to identify the current page. <br> The identifier is used to look up the correct thread. [See more](https://help.disqus.com/en/articles/1717084-javascript-configuration-variables#thispageidentifier)
| title            | `document.title`                     | The title of the current page. [See more](https://help.disqus.com/en/articles/1717084-javascript-configuration-variables#thispagetitle)
| category_id      |                                      | The category to be used for the current page. [See more](https://help.disqus.com/en/articles/1717084-javascript-configuration-variables#thispagecategoryid)
| slug             |
| api_key          |
| author_s3        |
| remote_auth_s3   |
| language         |
| integration      |

```vue
<template>
  <div class='comments'>
    <Disqus :pageConfig="pageConfig" />
  </div>
</template>

<script>
export default {
  // ...
  data: () => ({
    pageConfig: {
      title: 'My custom title',
      category_id: 'sports'
    }
  })
}
</script>
```

::: warning 
If you are using the vue-router always opt for HTML5 `history: mode`.
:::

### ssoConfig

| Type     | Required  |
| -------- | --------- |
| Object   | `false`   | 

Single sign-on (SSO) is a protocol for authenticating an existing user to comment without registering for a global Disqus account. [See more](https://help.disqus.com/en/articles/1717064-single-sign-on)

| Key    | Description
| ------ | -----------------------------------
| name   | Your site's name. We will display it in the Post As window.
| button | Address of the image that acts as a button. Disqus 2012 users, see style guide below.
| icon   | Address of the image that appears on the login modal's SSO tab. Favicons work well here
| url    | Address of your login page.
| logout | Address of your logout page.
| width  | Width of the login popup window. *Default is 800*.
| height | Height of the login popup window. *Default is 400*.

```vue
<template>
  <div class='comments'>
    <Disqus :ssoConfig="ssoConfig" />
  </div>
</template>

<script>
export default {
  // ...
  data: () => ({
    ssoConfig: {
      name: 'SampleNews',
      button: 'http://example.com/images/samplenews.gif',
      icon: 'http://example.com/favicon.png',
      url: 'http://example.com/login/',
      logout: 'http://example.com/logout/',
      width: '800',
      height: '400'
    }
  })
}
</script>
```

::: tip
Learn more about [Integrating Single Sign-On](https://help.disqus.com/en/articles/1717160-integrating-single-sign-on)
:::

### lang

| Type     | Required  |
| -------- | --------- |
| String   | `false`   | 

Disqus currently supports dozens of languages, ranging from Arabic to Ukrainian. For a full list of supported languages, see the Disqus [project on Transifex](https://www.transifex.com/disqus/disqus/).

```vue
<Disqus lang="fr_CA" />
```

::: tip
e.g. French (Canada) => `fr_CA`, see more about [language codes](https://www.transifex.com/explore/languages/)
:::

### lazy

| Type     | Default | 
| -------- | ------- |
| String   | `true`  |

Apply lazy load in disqus script and embed.

### lazyConfig

| Type     | Default                                               | 
| -------- | ----------------------------------------------------- |
| Object   | `{ root: null, rootMargin: '300px', threshold: 0.5 }` |

Customize the options of the IntersectionObserver.


## Events

`VueDisqus` registers events ($emit) for each callback available in the disqus API.

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
    <Disqus @new-comment="newComment" />
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