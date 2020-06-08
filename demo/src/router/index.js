import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    name: 'blog',
    path: '/blog/:id',
    component: () => import('@/views/Post'),
    props: to => ({ post: to.meta.data }),
    meta: {
      fetch (id) {
        return new Promise((resolve, reject) => {
          fetch('/posts.json')
            .then(res => {
              if (res.ok) return res.json()
              throw new Error('Post not exists')
            })
            .then(res => resolve(res[(id - 1)]))
            .catch(reject)
        })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve(async (to, from, next) => {
  if (to.meta.fetch) to.meta.data = await to.meta.fetch(to.params.id)
  next()
})

export default router
