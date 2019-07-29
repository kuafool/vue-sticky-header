//
//
//
//
//
//
//
//
//

var script = {
  data: function data() {
    return {
      isFixed: false,
      height: 0
    };
  },
  computed: {
    bottomStyle: function bottomStyle() {
      return {
        paddingTop: this.isFixed ? this.height + "px" : 0
      };
    }
  },
  mounted: function mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function handleScroll() {
      this.height = this.$refs.header.offsetHeight;
      if (window.pageYOffset > this.$$refs.header.offsetTop) {
        if (this.isFixed === false) {
          this.isFixed === true;
          this.$emit("change", this.isFixed);
        }
      } else {
        if (this.isFixed === true) {
          this.isFixed === false;
          this.$emit("change", this.isFixed);
        }
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
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
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "header",
    { class: ["component-sticky-header", { "is-fixed": _vm.isFixed }] },
    [
      _c(
        "div",
        { ref: "header", staticClass: "sticky-header-wrapper" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "sticky-header-bottom", style: _vm.bottomStyle })
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-6b1fdd6c_0", { source: ".component-sticky-header.is-fixed .sticky-header-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=vue-sticky-header.vue.map */", map: {"version":3,"sources":["D:\\repositories\\vue-sticky-header\\src\\vue-sticky-header.vue","vue-sticky-header.vue"],"names":[],"mappings":"AAqDA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;ACpDA;;AAEA,gDAAgD","file":"vue-sticky-header.vue","sourcesContent":["<template>\r\n  <header :class=\"['component-sticky-header', {'is-fixed': isFixed}]\">\r\n    <div ref=\"header\" class=\"sticky-header-wrapper\">\r\n      <slot />\r\n    </div>\r\n    <div class=\"sticky-header-bottom\" :style=\"bottomStyle\"></div>\r\n  </header>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      isFixed: false,\r\n      height: 0\r\n    };\r\n  },\r\n  computed: {\r\n    bottomStyle() {\r\n      return {\r\n        paddingTop: this.isFixed ? this.height + \"px\" : 0\r\n      };\r\n    }\r\n  },\r\n  mounted() {\r\n    window.addEventListener(\"scroll\", this.handleScroll);\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"scroll\", this.handleScroll);\r\n  },\r\n  methods: {\r\n    handleScroll() {\r\n      const self = this;\r\n      this.height = this.$refs.header.offsetHeight;\r\n      if (window.pageYOffset > this.$$refs.header.offsetTop) {\r\n        if (this.isFixed === false) {\r\n          this.isFixed === true;\r\n          this.$emit(\"change\", this.isFixed);\r\n        }\r\n      } else {\r\n        if (this.isFixed === true) {\r\n          this.isFixed === false;\r\n          this.$emit(\"change\", this.isFixed);\r\n        }\r\n      }\r\n    }\r\n  }\r\n};\r\n</script>\r\n\r\n<style lang=\"scss\">\r\n.component-sticky-header {\r\n  &.is-fixed {\r\n    .sticky-header-wrapper {\r\n      position: fixed;\r\n      top: 0;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n  }\r\n}\r\n</style>\r\n",".component-sticky-header.is-fixed .sticky-header-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=vue-sticky-header.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var StickyHeader = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

// Import Component

// Declare install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('sticky-header', StickyHeader);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default StickyHeader;
export { install };
