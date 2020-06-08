module.exports = {
  theme: 'default-vue-a11y',
  title: 'Vue Disqus',
  description: 'Vue component to integrate Disqus comments in your application, with support for SPA',
  themeConfig: {
    home: false,
    base: '/vue-disqus/',
    repo: 'vue-a11y/eslint-plugin-vuejs-accessibility',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        sidebar: [
          {
            title: 'Getting Started',
            collapsable: false,
            children: [
              '/',
              '/setup.md',
              '/reset.md'
            ]
          },
          {
            title: 'Components',
            collapsable: false,
            children: [
              '/components/disqus.md',
              '/components/disqus-count.md'
            ]
          },
          {
            title: 'How to',
            collapsable: false,
            children: [
              '/howto/cdn.md',
              '/howto/nuxt.md',
              '/howto/vuepress.md'
            ]
          }
        ]
      }
    }
  }
};
