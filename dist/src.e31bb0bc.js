// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"core/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom = /*#__PURE__*/function () {
  function Dom(selector) {
    _classCallCheck(this, Dom);

    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  _createClass(Dom, [{
    key: "html",
    value: function html(_html) {
      if (typeof _html === 'string') {
        this.$el.innerHTML = _html;
        return this;
      }

      return this.$el.outerHTML.trim();
    }
  }, {
    key: "text",
    value: function text(_text) {
      this.$el.textContent = _text;
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.html('');
      return this;
    }
  }, {
    key: "on",
    value: function on(eventType, callback) {
      this.$el.addEventListener(eventType, callback);
    }
  }, {
    key: "off",
    value: function off(eventType, callback) {
      this.$el.removeEventListener(eventType, callback);
    }
  }, {
    key: "append",
    value: function append(node) {
      if (node instanceof Dom) {
        node = node.$el;
      }

      if (Element.prototype.append) {
        this.$el.append(node);
      } else {
        this.$el.appendChild(node);
      }

      return this;
    }
  }, {
    key: "closest",
    value: function closest(selector) {
      return $(this.$el.closest(selector));
    }
  }, {
    key: "getCoords",
    value: function getCoords() {
      return this.$el.getBoundingClientRect();
    }
  }, {
    key: "find",
    value: function find(selector) {
      return $(this.$el.querySelector(selector));
    }
  }, {
    key: "findAll",
    value: function findAll(selector) {
      return this.$el.querySelectorAll(selector);
    }
  }]);

  return Dom;
}();

function $(selector) {
  return new Dom(selector);
}

$.create = function (tagName) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var el = document.createElement(tagName);

  if (classes.length) {
    classes.forEach(function (cl) {
      el.classList.add(cl);
    });
  }

  return $(el);
};
},{}],"core/Emitter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this.listeners = {};
  } // dispatch, fire, trigger
  // Уведомляем слушателей, если они есть
  // formula.emit('table:select', {a: value})


  _createClass(Emitter, [{
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!Array.isArray(this.listeners[eventName])) {
        return false; // если не массив, то ничего не делаем
      } else {
        this.listeners[eventName].forEach(function (listener) {
          listener.apply(void 0, args);
        });
      }
    } // on, listen
    // Подписываемся на уведомления
    // Добавляем нового слушателя
    // formula.subscribe('table:select', () => {})

  }, {
    key: "subscribe",
    value: function subscribe(eventName, fn) {
      var _this = this;

      this.listeners[eventName] = this.listeners[eventName] || []; // если в него ещё ничего не добавлено, то пустой массив

      this.listeners[eventName].push(fn);
      return function () {
        _this.listeners[eventName] = _this.listeners[eventName].filter(function (listener) {
          return listener !== fn;
        });
      };
    }
  }]);

  return Emitter;
}(); // Example
// const emitter = new Emitter()
// emitter.subscribe('vladilen', data => console.log('Sub: ', data))
// emitter.emit('vladilen', 42)


exports.Emitter = Emitter;
},{}],"components/app/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _dom = require("~core/dom.js");

var _Emitter = require("~core/Emitter.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(selector, options) {
    _classCallCheck(this, App);

    this.$el = (0, _dom.$)(selector);
    this.components = options.components || [];
    this.emitter = new _Emitter.Emitter();
  }

  _createClass(App, [{
    key: "getRoot",
    value: function getRoot() {
      var componentOptions = {
        emitter: this.emitter
      };

      var $root = _dom.$.create('div');

      this.components = this.components.map(function (Component) {
        var $el = _dom.$.create('div', Component.className);

        var component = new Component($el, componentOptions);
        $el.html(component.toHTML());
        $root.append($el);
        return component;
      });
      return $root;
    }
  }, {
    key: "render",
    value: function render() {
      this.$el.append(this.getRoot());
      this.components.forEach(function (component) {
        return component.init();
      });
    }
  }]);

  return App;
}();

exports.App = App;
},{"~core/dom.js":"core/dom.js","~core/Emitter.js":"core/Emitter.js"}],"core/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;

// pure functions
function capitalize(string) {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}
},{}],"core/DomListener.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DomListener = void 0;

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomListener = /*#__PURE__*/function () {
  function DomListener($root) {
    var listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, DomListener);

    if (!$root) throw new Error('no root provided for addListener');
    this.$root = $root;
    this.listeners = listeners;
  }

  _createClass(DomListener, [{
    key: "initDOMListeners",
    value: function initDOMListeners() {
      var _this = this;

      this.listeners.forEach(function (listener) {
        var method = getMethodName(listener);

        if (!_this[method]) {
          var name = _this.name || '';
          throw new Error("Method ".concat(method, " is not implemented ").concat(name, " component"));
        }

        _this[method] = _this[method].bind(_this);

        _this.$root.on(listener, _this[method]);
      });
    }
  }, {
    key: "removeDOMListeners",
    value: function removeDOMListeners() {
      var _this2 = this;

      this.listeners.forEach(function (listener) {
        var method = getMethodName(listener);

        _this2.$root.off(listener, _this2[method]);
      });
    }
  }]);

  return DomListener;
}();

exports.DomListener = DomListener;

function getMethodName(eventName) {
  return 'on' + (0, _utils.capitalize)(eventName);
}
},{"./utils":"core/utils.js"}],"core/AppComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = void 0;

var _DomListener2 = require("./DomListener");

var _dom = require("./dom.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AppComponent = /*#__PURE__*/function (_DomListener) {
  _inherits(AppComponent, _DomListener);

  var _super = _createSuper(AppComponent);

  function AppComponent($root) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, AppComponent);

    _this = _super.call(this, $root, options.listeners);
    _this.name = options.name;
    _this.emitter = options.emitter;
    return _this;
  } // возвращает шаблон компонента


  _createClass(AppComponent, [{
    key: "toHTML",
    value: function toHTML() {
      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      (0, _dom.$)(this.$root.$el).html(html);
    }
  }, {
    key: "init",
    value: function init() {
      this.initDOMListeners();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeDOMListeners();
    }
  }]);

  return AppComponent;
}(_DomListener2.DomListener);

exports.AppComponent = AppComponent;
},{"./DomListener":"core/DomListener.js","./dom.js":"core/dom.js"}],"components/header/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _AppComponent2 = require("~core/AppComponent.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header = /*#__PURE__*/function (_AppComponent) {
  _inherits(Header, _AppComponent);

  var _super = _createSuper(Header);

  function Header($root, options) {
    _classCallCheck(this, Header);

    return _super.call(this, $root, _objectSpread({
      name: 'Header'
    }, options));
  }

  _createClass(Header, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n    <header>\n      <h1 class=\"header orange-text\"> Tooltip js </h1>\n    </header>\n    ";
    }
  }]);

  return Header;
}(_AppComponent2.AppComponent);

exports.Header = Header;

_defineProperty(Header, "className", ['app__header']);
},{"~core/AppComponent.js":"core/AppComponent.js"}],"components/form/form.templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCheckboxs = createCheckboxs;
exports.createInputs = createInputs;
exports.createSelects = createSelects;

function createCheckboxs() {
  var checkboxs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  checkboxs = checkboxs.map(function (checkbox) {
    return "\n  <div class=\"form-checkbox\">\n    <label>\n      <input\n        name=\"".concat(checkbox, "\"\n        type=\"checkbox\"\n        class=\"filled-in\"\n        checked=\"checked\"\n      />\n      <span>").concat(checkbox, "</span>\n    </label>\n  </div>\n    ");
  }).join("");
  return '<div class="form-group">' + checkboxs + '</div>';
}

function createInputs(imputs) {
  imputs = imputs.map(function (imput) {
    return "\n  <div class=\"form-imput\">\n   <label for=\"".concat(imput.name, "\">").concat(imput.name, "</label>\n    <div>\n    <input\n    name=\"").concat(imput.name || '', "\"\n    type=\"").concat(imput.type || 'number', "\"\n    value=\"").concat(imput.value || '', "\"\n    class=\"").concat(imput.class || '', "\" /> : ").concat(imput.type, "\n    </div>\n    </div>\n    ");
  }).join("");
  return '<div class="inputs form-group">' + imputs + '</div>';
}

function createSelects() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var select = "<div class=\"form-selects form-group\">\n   <label>Position</label>\n    <select name='position' class='browser-default' >" + options.map(function (option) {
    return "<option name=\"position\" value=\"".concat(option, "\" >").concat(option, "</option>");
  }).join("") + "</select> </div>";
  return select;
}
},{}],"components/form/Form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _AppComponent2 = require("~core/AppComponent.js");

var _formTemplates = require("./form.templates.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form = /*#__PURE__*/function (_AppComponent) {
  _inherits(Form, _AppComponent);

  var _super = _createSuper(Form);

  function Form($root, options) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, $root, _objectSpread({
      name: "Form",
      listeners: ["change"]
    }, options));
    _this.setting = {};
    _this.formFildcheck = ["tooltipMove", "cross", "animation"];
    return _this;
  }

  _createClass(Form, [{
    key: "toHTML",
    value: function toHTML() {
      var _this2 = this;

      var checkboxRender = function checkboxRender() {
        return (0, _formTemplates.createCheckboxs)(_this2.formFildcheck);
      };

      var selectRender = function selectRender() {
        return (0, _formTemplates.createSelects)(["left", "right", "top", "bottom"]);
      };

      var inputRender = function inputRender() {
        return (0, _formTemplates.createInputs)([{
          name: "width",
          value: 150,
          type: "number"
        }, {
          name: "padding",
          value: 5,
          type: "number"
        }, {
          name: "margin",
          value: 10,
          type: "number"
        }, {
          name: "color",
          value: "#ccc",
          type: "text"
        }, {
          name: "border",
          value: "1px solid",
          type: "text"
        }]);
      };

      return "<h3>Example</h3>" + selectRender() + inputRender() + checkboxRender();
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var _this3 = this;

      var _event$target = event.target,
          name = _event$target.name,
          checked = _event$target.checked,
          value = _event$target.value;
      var formFildInput = ["position", "color", "border"];

      var emit = function emit(name, value) {
        return _this3.emitter.emit("form:change", _this3.setting, name, value);
      };

      if (this.formFildcheck.includes(name)) {
        this.setting[name] = checked;
        emit(name, checked);
        return;
      }

      if (formFildInput.includes(name)) {
        this.setting[name] = value.trim();
        emit(name, "'" + value + "'");
        return;
      }

      if (name) {
        value = Number.parseInt(value);

        if (value <= 1) {
          event.target.value = 1;
          value = 1;
        }

        this.setting[name] = value;
        emit(name, value);
        return;
      }
    }
  }]);

  return Form;
}(_AppComponent2.AppComponent);

exports.Form = Form;

_defineProperty(Form, "className", ["app__form", "article"]);
},{"~core/AppComponent.js":"core/AppComponent.js","./form.templates.js":"components/form/form.templates.js"}],"components/example/example.templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExampleOptions = createExampleOptions;

function createExampleOptions(setting) {
  return "\n    <h5>Example</h5>\n    <ul class=\"example-config\">\n    <li>{</li>\n    <li id=\"position\">position: <span>'".concat(setting.position, "'</span>,</li>\n    <li id=\"tooltipMove\">tooltipMove: <span>").concat(setting.tooltipMove, "</span>,</li>\n    <li id=\"cross\">cross: <span>").concat(setting.cross, "</span>,</li>\n    <li id=\"animation\" >animation: <span>").concat(setting.animation, "</span>,</li>\n    <li id=\"width\">width: <span>").concat(setting.width, "</span>,</li>\n    <li id=\"padding\">padding: <span>").concat(setting.padding, "</span>,</li>\n    <li id=\"margin\">margin: <span>").concat(setting.margin, "</span>,</li>\n    <li id=\"color\">color: <span>'").concat(setting.color, "'</span>,</li>\n    <li id=\"border\">border: <span>'").concat(setting.border, "'</span></li>\n    <li>}</li>\n    </ul>\n  ");
}
},{}],"../node_modules/@kamenskii/tooltip/dist/tooltip.js":[function(require,module,exports) {
var define;
var global = arguments[3];
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"tooltip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip = /*#__PURE__*/function () {
  function Tooltip(node) {
    var _options$color,
        _options$width,
        _options$padding,
        _options$margin,
        _options$background,
        _options$position,
        _options$border,
        _options$cross,
        _options$tooltipMove,
        _options$class,
        _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Tooltip);

    _defineProperty(this, "$element", null);

    _defineProperty(this, "content", "");

    _defineProperty(this, "eventMove", null);

    _defineProperty(this, "options", {});

    _defineProperty(this, "tooltipOpen", false);

    if (typeof node === "string") {
      this.$element = document.querySelector(node);
    } else if (_typeof(node) === "object") {
      this.$element = node;
    } else {
      throw new Error("Tooltip node incorrect typeof ");
    }

    this.options.color = (_options$color = options.color) !== null && _options$color !== void 0 ? _options$color : "#ccc";
    this.options.width = (_options$width = options.width) !== null && _options$width !== void 0 ? _options$width : 200;
    this.options.padding = (_options$padding = options.padding) !== null && _options$padding !== void 0 ? _options$padding : 5;
    this.options.margin = (_options$margin = options.margin) !== null && _options$margin !== void 0 ? _options$margin : 10;
    this.options.background = (_options$background = options.background) !== null && _options$background !== void 0 ? _options$background : '#fff';
    this.options.position = (_options$position = options.position) !== null && _options$position !== void 0 ? _options$position : "left";
    this.options.border = (_options$border = options.border) !== null && _options$border !== void 0 ? _options$border : "1px solid";
    this.options.border += ' ' + options.color;
    this.options.cross = (_options$cross = options.cross) !== null && _options$cross !== void 0 ? _options$cross : false;
    this.options.tooltipMove = (_options$tooltipMove = options.tooltipMove) !== null && _options$tooltipMove !== void 0 ? _options$tooltipMove : false;
    this.options.animation = options.animation ? {
      show: 100
    } : {};
    this.options.class = (_options$class = options.class) !== null && _options$class !== void 0 ? _options$class : "";
    if (!this.$element) return;

    if (this.options.tooltipMove) {
      this.eventMove = function (e) {
        var $tooltip = _this.$element.previousElementSibling;
        if (!$tooltip || !$tooltip.dataset.tooltip) return;

        var boundingElement = _this.$element.getBoundingClientRect();

        var x = e.pageX,
            y = e.pageY;

        if (_this.options.position === "left" || _this.options.position === "right") {
          $tooltip.style.top = boundingElement.top + window.pageYOffset - $tooltip.offsetHeight / 2 + y - _this.$element.offsetTop + "px";
        } else if (_this.options.position === "top" || _this.options.position === "bottom") {
          $tooltip.style.left = boundingElement.left + (boundingElement.left - x) * -1 - $tooltip.offsetWidth / 2 + "px";
        }
      };

      this.$element.addEventListener("mousemove", this.eventMove);
    }

    this.resizeHandler = function () {
      if (_this.tooltipOpen) {
        _this.close();
      }
    };

    window.addEventListener("resize", this.resizeHandler, false);
  }

  _createClass(Tooltip, [{
    key: "open",
    value: function open() {
      var contentHTML = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (document.readyState === "complete") {
        this.tooltipOpen = true;

        _addTooltip(this.$element, this.options, contentHTML);
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (this.tooltipOpen) {
        var tooltip = this.$element.previousElementSibling;
        if (!tooltip || !tooltip.dataset.tooltip) return;
        tooltip.remove();
        this.tooltipOpen = false;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.close();

      if (this.eventMove) {
        this.$element.removeEventListener("mousemove", this.eventMove);
      }

      window.removeEventListener("resize", this.resizeHandler);
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

function _addTooltipPosition($el, $tooltip, options) {
  var boundingElement = $el.getBoundingClientRect();
  var tooltipCenter = boundingElement.left + $el.offsetWidth / 2 - options.width / 2 + "px";

  switch (options.position) {
    case "top":
      $tooltip.style.top = _getCenterTopPosition($el, $tooltip, options);
      $tooltip.style.left = tooltipCenter;
      break;

    case "bottom":
      $tooltip.style.top = _getCenterBottomPosition($el, $tooltip, options);
      $tooltip.style.left = tooltipCenter;
      break;

    case "left":
      $tooltip.style.top = _getCenterLeftPosition($el, $tooltip);
      $tooltip.style.left = boundingElement.left - $tooltip.offsetWidth - options.margin + "px";
      break;

    case "right":
      $tooltip.style.top = _getCenterRightPosition($el, $tooltip);
      $tooltip.style.left = boundingElement.left + $el.offsetWidth + options.margin + "px";
      break;

    default:
      break;
  }
}

function _addTooltip($el, options, html) {
  if ($el.previousElementSibling !== null && $el.previousElementSibling.dataset.tooltip) return;

  var $tooltip = _createTooltip($el, options, html);

  $el.insertAdjacentElement("beforebegin", $tooltip);

  _addTooltipPosition($el, $tooltip, options);

  if (options.animation.show) {
    var opacityAnimate = function opacityAnimate() {
      var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
      var opacity = 0;
      var timerId = setInterval(function () {
        $tooltip.style.opacity = opacity;

        if (opacity >= 1) {
          clearInterval(timerId);
        } else {
          opacity = opacity + 0.1;
        }
      }, 50);
    };

    opacityAnimate(options.animation.show);
  }

  if (options.cross) _addEventCrossClick($el);
  return $tooltip;
}

function _createTooltip($el, options, html) {
  var $tooltip = document.createElement("div");
  var p = options.padding;
  var pt = !options.cross || options.padding > 10 ? options.padding : 10;
  $tooltip.dataset.tooltip = "open";
  $tooltip.style.display = "inline-block";
  $tooltip.style.width = options.width + "px";
  $tooltip.style.padding = "".concat(pt, "px ").concat(p, "px ").concat(p, "px ").concat(p, "px");
  $tooltip.style.position = "absolute";
  $tooltip.style.border = options.border;
  $tooltip.style.background = options.background;

  if (options.animation.show) {
    $tooltip.style.opacity = 0;
  }

  if (options.class) $tooltip.classList.add(options.class);
  var btnClose = options.cross ? "\n              <span style=\"\n              position:absolute;\n              top: 0px;\n              right: 5px;\n              font-weight: bold;\n              line-height: 1;\n              cursor: pointer;\n              \"\n              data-cross=true\n              >&times;</span>\n          " : "";
  $tooltip.innerHTML = btnClose + html;
  $tooltip.insertAdjacentElement("afterbegin", _createArrow(options));
  return $tooltip;
}

function _createArrow(options) {
  var $arrow = document.createElement("div");
  $arrow.style.border = "solid transparent";
  $arrow.style.position = "absolute";
  $arrow.style.borderWidth = "9px";

  switch (options.position) {
    case "top":
      $arrow.style.top = "100%";
      $arrow.style.left = "50%";
      $arrow.style.borderTopColor = options.color;
      $arrow.style.marginLeft = "-9px";
      break;

    case "bottom":
      $arrow.style.bottom = "100%";
      $arrow.style.left = "50%";
      $arrow.style.borderBottomColor = options.color;
      $arrow.style.marginLeft = "-9px";
      break;

    case "left":
      $arrow.style.top = "50%";
      $arrow.style.left = "100%";
      $arrow.style.marginTop = "-9px";
      $arrow.style.borderLeftColor = options.color;
      break;

    case "right":
      $arrow.style.top = "50%";
      $arrow.style.right = "100%";
      $arrow.style.marginTop = "-9px";
      $arrow.style.borderRightColor = options.color;
      break;

    default:
      break;
  }

  return $arrow;
}

function _addEventCrossClick($el) {
  var tooltip = $el.previousElementSibling;
  if (!tooltip || !tooltip.dataset.tooltip) return;
  tooltip.addEventListener("click", function (et) {
    if (et.target.dataset.cross) {
      tooltip.remove();
    }
  });
}

function _getCenterBottomPosition($el, $tooltip, options) {
  return $el.getBoundingClientRect().bottom + window.pageYOffset + options.margin + "px";
}

function _getCenterRightPosition($el, $tooltip) {
  return window.pageYOffset + $el.getBoundingClientRect().top + $el.offsetHeight / 2 - $tooltip.offsetHeight / 2 + "px";
}

function _getCenterLeftPosition($el, $tooltip) {
  return window.pageYOffset + $el.getBoundingClientRect().top + $el.offsetHeight / 2 - $tooltip.offsetHeight / 2 + "px";
}

function _getCenterTopPosition($el, $tooltip, options) {
  return $el.getBoundingClientRect().top + window.pageYOffset - $tooltip.offsetHeight - options.margin + "px";
}
},{}],"C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53661" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","tooltip.js"], null)

},{}],"components/example/Example.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = void 0;

var _AppComponent2 = require("~core/AppComponent.js");

var _exampleTemplates = require("./example.templates.js");

var _tooltip = _interopRequireDefault(require("@kamenskii/tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Example = /*#__PURE__*/function (_AppComponent) {
  _inherits(Example, _AppComponent);

  var _super = _createSuper(Example);

  function Example($root, options) {
    var _this;

    _classCallCheck(this, Example);

    _this = _super.call(this, $root, _objectSpread({
      name: "Example",
      listeners: ["mouseenter"]
    }, options));
    _this.setting = {
      cross: true,
      tooltipMove: true,
      width: 150,
      color: "#ccc",
      padding: 5,
      margin: 10,
      position: "left",
      border: "1px solid",
      animation: true,
      class: "my-class"
    };
    _this.tooltip = new _tooltip.default(_this.$root.$el, _this.setting);

    _this.emitter.subscribe("form:change", function (settings, name, value) {
      _this.setting = _objectSpread(_objectSpread({}, _this.setting), settings);

      var changeVal = _this.$root.find("[id=".concat(name, "]")).html("".concat(name, ": <span>").concat(value, "</span>"));

      _animationText(changeVal.$el);

      _this.tooltip.destroy();

      _this.tooltip = new _tooltip.default(_this.$root.$el, _this.setting);
    });

    return _this;
  }

  _createClass(Example, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _exampleTemplates.createExampleOptions)(this.setting);
    }
  }, {
    key: "onMouseenter",
    value: function onMouseenter() {
      this.tooltip.open("tooltip html");
    }
  }]);

  return Example;
}(_AppComponent2.AppComponent);

exports.Example = Example;

_defineProperty(Example, "className", ["app__example", "article"]);

function _animationText($el) {
  $el = $el.lastChild;

  var opacityAnimate = function opacityAnimate() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
    var animationStart = false;
    if (animationStart) return;
    animationStart = true;
    var opacity = 0.1;
    var timerId = setInterval(function () {
      $el.style.background = "rgba(249, 191, 59, ".concat(opacity, ")");

      if (opacity >= 0.7) {
        clearInterval(timerId);
        var timerId2 = setInterval(function () {
          $el.style.background = "rgba(249, 191, 59, ".concat(opacity, ")");

          if (opacity === 0) {
            clearInterval(timerId2);
          } else {
            opacity = opacity - 0.1;
          }
        }, ms);
      } else {
        opacity = opacity + 0.1;
      }
    }, ms);
  };

  opacityAnimate();
}
},{"~core/AppComponent.js":"core/AppComponent.js","./example.templates.js":"components/example/example.templates.js","@kamenskii/tooltip":"../node_modules/@kamenskii/tooltip/dist/tooltip.js"}],"components/instruction/Instruction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Instruction = void 0;

var _AppComponent2 = require("~core/AppComponent.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Instruction = /*#__PURE__*/function (_AppComponent) {
  _inherits(Instruction, _AppComponent);

  var _super = _createSuper(Instruction);

  function Instruction($root, options) {
    _classCallCheck(this, Instruction);

    return _super.call(this, $root, _objectSpread({
      name: "Instruction"
    }, options));
  }

  _createClass(Instruction, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n    <h5>Install</h5>\n    Create tooltip experiance in pure javascript.\n    <pre><code class=\"language-npm\">\n    npm install @kamenskii/tooltip --save\n  </code></pre>\n\n    <h5>Import/ES6</h5>\n    <pre class=\"language-javascript\"><code class=\"language-javascript\">\n    import Tooltip from 'Tooltip.js';\n  </code></pre>\n\n\n<h5>Classic</h5>\n<pre class=\" language-markup\"><code class=\" language-markup\">\n    <span class=\"token comment\" spellcheck=\"true\">\n    &lt;!-- Compiled and minified JavaScript --&gt;</span>\n    <span class=\"token script language-javascript\">\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>your/path/tooltip.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span></span>\n  </code></pre>\n\n  <h5>Initialization</h5>\n  <pre class=\"language-javascript\"><code class=\"language-javascript\">\n   var instance = new Tooltip('.element', options)\n</code></pre>\n\n<h3>Methods</h3>\n\n<h5>.open</h5>\nShow tooltip.<br>\n<code class=\"language-javascript\">\ninstance.open('html');\n</code>\n\n<h5>.close</h5>\nHide tooltip.<br>\n<code class=\"language-javascript\">\ninstance.close();\n</code>\n\n<h5>.destroy</h5>\nDestroy plugin instance and teardown.<br>\n<code class=\"language-javascript\">\ninstance.destroy();\n</code>\n\n\n<table class=\"striped\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Default</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n\n<h3>Options</h3>\n          <tbody>\n            <tr>\n              <td>margin</td>\n              <td>Number</td>\n              <td>10</td>\n              <td>Set distance tooltip appears away from its activator.</td>\n            </tr>\n            <tr>\n              <td>padding</td>\n              <td>Number</td>\n              <td>5</td>\n              <td>Set tooltip padding.</td>\n            </tr>\n            <tr>\n              <td>position</td>\n              <td>String</td>\n              <td>'left'</td>\n              <td>Set the direction of the tooltip. 'top', 'right', 'bottom', 'left'.</td>\n            </tr>\n            <tr>\n              <td>tooltipMove</td>\n              <td>Boolian</td>\n              <td>false</td>\n              <td>tooltip move.</td>\n            </tr>\n            <tr>\n              <td>cross</td>\n              <td>Boolian</td>\n              <td>false</td>\n              <td>cross for close tooltip</td>\n            </tr>\n            <tr>\n              <td>Animation</td>\n              <td>Object</td>\n              <td>{show, 100}</td>\n              <td>show animation </td>\n            </tr>\n            <tr>\n              <td>color</td>\n              <td>String</td>\n              <td>'#ccc'</td>\n              <td>border color</td>\n            </tr>\n            <tr>\n              <td>border</td>\n              <td>String</td>\n              <td>'1px solid'</td>\n              <td>border style</td>\n            </tr>\n            <tr>\n              <td>class</td>\n              <td>String</td>\n              <td>''</td>\n              <td>add tooltip class</td>\n            </tr>\n          </tbody>\n        </table>\n\n\n    ";
    }
  }]);

  return Instruction;
}(_AppComponent2.AppComponent);

exports.Instruction = Instruction;

_defineProperty(Instruction, "className", ["app__Instruction", "article"]);
},{"~core/AppComponent.js":"core/AppComponent.js"}],"components/footer/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _AppComponent2 = require("~core/AppComponent.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Footer = /*#__PURE__*/function (_AppComponent) {
  _inherits(Footer, _AppComponent);

  var _super = _createSuper(Footer);

  function Footer($root, options) {
    _classCallCheck(this, Footer);

    return _super.call(this, $root, _objectSpread({
      name: 'Footer'
    }, options));
  }

  _createClass(Footer, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n        <footer class=\"page-footer\">\n          <div class=\"footer-copyright\">\n            <div class=\"container\">\n            \xA9 2021 Tooltip js\n            <a class=\"grey-text text-lighten-4 right\" href=\"https://www.npmjs.com/package/@kamenskii/tooltip\">npmjs</a>\n            </div>\n          </div>\n        </footer>\n    ";
    }
  }]);

  return Footer;
}(_AppComponent2.AppComponent);

exports.Footer = Footer;

_defineProperty(Footer, "className", ['app__footer']);
},{"~core/AppComponent.js":"core/AppComponent.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./css/main.css");

var _App = require("./components/app/App.js");

var _Header = require("./components/header/Header");

var _Form = require("./components/form/Form");

var _Example = require("./components/example/Example");

var _Instruction = require("./components/instruction/Instruction");

var _Footer = require("./components/footer/Footer");

var app = new _App.App('#example-tooltip', {
  components: [_Header.Header, _Instruction.Instruction, _Form.Form, _Example.Example, _Footer.Footer]
});
app.render();
},{"./css/main.css":"css/main.css","./components/app/App.js":"components/app/App.js","./components/header/Header":"components/header/Header.js","./components/form/Form":"components/form/Form.js","./components/example/Example":"components/example/Example.js","./components/instruction/Instruction":"components/instruction/Instruction.js","./components/footer/Footer":"components/footer/Footer.js"}],"C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50817" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Дмитрий/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map