<template>
  <div id="app">
    <div id="nav">
      <router-link to="/blog/1">Post 1</router-link> |
      <router-link to="/blog/2">Post 2</router-link> |
      <router-link to="/blog/2?fbclid=khbkhbkh">Post 2 with query</router-link> |
      <a href="/blog/4">Post (testing the lazy load disqus)</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NProgressMixin from './mixins/nprogress'

export default {
  name: 'App',
  mixins: [NProgressMixin]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
}

#nav {
  padding: 30px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nprogress {
  pointer-events: none;
}
@media (max-width: 600px) {
  #nprogress {
    display: none;
  }
}
#nprogress .bar {
  background: #41b482;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}
.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}
</style>
