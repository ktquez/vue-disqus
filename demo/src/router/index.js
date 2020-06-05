import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'post',
    path: '/post/:id',
    component: () => import('@/views/Post'),
    props: to => ({ post: to.meta.data }),
    meta: {
      fetch (id) {
        return new Promise((resolve, reject) => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
              if (res.ok) return res.json()
              throw new Error('Post not exists')
            })
            .then(resolve)
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
