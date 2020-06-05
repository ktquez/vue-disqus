(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VueDisqus = {}));
}(this, (function (exports) { 'use strict';

  //
  //
  //
  //

  var script = {
    name: 'VueDisqus',

    props: {
      shortname: {
        type: String,
        required: true
      },
      identifier: {
        type: String,
        required: false
      },
      url: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      remote_auth_s3: {
        type: String,
        required: false
      },
      api_key: {
        type: String,
        required: false
      },
      sso_config: {
        type: Object,
        required: false
      },
      language: {
        type: String,
        required: false
      }
    },

    mounted: function mounted () {
      if (window.DISQUS) { return this.reset() }
      this.init();
    },

    methods: {
      reset: function reset (dsq) {
        if ( dsq === void 0 ) dsq = window.DISQUS;

        var setBaseConfig = this.setBaseConfig;
        dsq.reset({
          reload: true,
          config: function () {
            setBaseConfig(this);
          }
        });
      },

      init: function init () {
        var setBaseConfig = this.setBaseConfig;
        window.disqus_config = function () {
          setBaseConfig(this);
        };
        this.makeEmbedScript();
        if (this.$route) { this.watchUrl(); }
      },

      watchUrl: function watchUrl () {
        var this$1 = this;

        this.$watch('$route.path', function () { return this$1.reset(); });
      },

      makeEmbedScript: function makeEmbedScript () {
        var this$1 = this;

        setTimeout(function () {
          var d = document;
          var s = d.createElement('script');
          s.setAttribute('id', 'embed-disqus');
          s.setAttribute('data-timestamp', +new Date());
          s.type = 'text/javascript';
          s.async = true;
          s.src = "//" + (this$1.shortname) + ".disqus.com/embed.js"
          ;(d.head || d.body).appendChild(s);
        }, 0);
      },

      setBaseConfig: function setBaseConfig (disqusConfig) {
        var this$1 = this;

        disqusConfig.page.identifier = (this.identifier || this.$route.path || window.location.pathname);
        disqusConfig.page.url = (this.url || this.$el.baseURI);
        if (this.title) {
          disqusConfig.page.title = this.title;
        }
        if (this.remote_auth_s3) {
          disqusConfig.page.remote_auth_s3 = this.remote_auth_s3;
        }
        if (this.api_key) {
          disqusConfig.page.api_key = this.api_key;
        }
        if (this.sso_config) {
          disqusConfig.sso = this.sso_config;
        }
        if (this.language) {
          disqusConfig.language = this.language;
        }

        disqusConfig.callbacks.onReady = [function () {
          this$1.$emit('ready');
        }];

        disqusConfig.callbacks.onNewComment = [function (comment) {
          this$1.$emit('new-comment', comment);
        }];
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { attrs: { id: "disqus_thread" } })
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  function install (Vue) {
    Vue.component('VueDisqus', __vue_component__);
  }

  // auto install
  if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
    window.Vue.use(install);
  }

  exports.VueDisqusPlugin = install;
  exports.default = __vue_component__;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
