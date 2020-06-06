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

    <hr>

    <section>
      <button @click="lang = (lang === 'en') ? 'it' : 'en'">Change disqus to {{ lang === 'en' ? 'ITALIAN' : 'ENGLISH' }} language</button>
    </section>

    <hr>

    <section>
      <VueDisqus shortname="ktquez" :lang="lang" />
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
  },

  data: () => ({
    lang: 'en'
  })
}
</script>

<style lang="scss" scoped>

</style>
