<template>
  <article>
    <h1>
      {{ post.title }}
    </h1>

    <section>
      <p>
      {{ post.body }}
    </p>
    </section>

    <section>
      <VueDisqus shortname="ktquez" />
    </section>
  </article>
</template>

<script>
import VueDisqus from '../../vue-disqus'

export default {
  name: 'Post',
  props: ['post'],
  components: {
    VueDisqus
  }
}
</script>

<style lang="scss" scoped>

</style>
