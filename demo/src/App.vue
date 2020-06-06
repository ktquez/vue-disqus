<template>
  <div id="app">
    <div id="nav">
      <router-link to="/post/1">Post 1</router-link> |
      <router-link to="/post/2">Post 2</router-link>
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
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
@media (min-width: 600px) {
  #nprogress .bar {
    background: #fff;
  }
}
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #41b482;
  opacity: 1;
  transform: rotate(3deg) translate(0px, -4px);
}
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}
#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: #41b482;
  border-left-color: #41b482;
  border-radius: 50%;
  animation: nprogress-spinner 400ms linear infinite;
}
.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}
.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}
</style>
