<template>
  <div>
    <ul>
      <li v-show="loading">
        <h2>Loading</h2>
      </li>
      <li v-for="post in posts" :key="`post-${post.id}`">
        <h2 v-text="post.title" :id="`title-post-${post.id}`" />

        <router-link :to="{ name: 'blog', params: { id: post.id } }" :id="`link-post-${post.id}`" :aria-describedby="`link-post-${post.id} title-post-${post.id}`">
          See post
        </router-link>

        -

        <DisqusCount
          tag="a"
          style="font-size: 16px;"
          :url="`${baseURL}/blog/${post.id}`"
          :identifier="`/blog/${post.id}`"
        />

        <hr>
      </li>
    </ul>
    <div v-show="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    posts: [],
    error: null,
    baseURL: 'http://localhost:8080'
  }),

  created () {
    this.loadPosts()
  },

  methods: {
    async loadPosts () {
      this.loading = true
      try {
        const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
        if (!res.ok) throw new Error('Error load post')
        this.posts = await res.json()
        this.loading = false
      } catch (e) {
        this.loading = false
        this.error = e
      }
    }
  }
}
</script>

<style></style>
