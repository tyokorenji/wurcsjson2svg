/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SVG_converter.js":
/*!**************************!*\
  !*** ./SVG_converter.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVG_convert = undefined;

var _JSONParser = __webpack_require__(/*! ./js/class/ParserClass/JSONParser */ "./js/class/ParserClass/JSONParser.js");

var _Glycan = __webpack_require__(/*! ./js/class/Glycan */ "./js/class/Glycan.js");

var _createSVGMain = __webpack_require__(/*! ./js/createSVG/createSVGMain */ "./js/createSVG/createSVGMain.js");

var SVG_convert = exports.SVG_convert = function SVG_convert(json) {
  var jsonObejct = JSON.parse(json);
  var parser = new _JSONParser.JSONParser(jsonObejct);
  var glycoJSON = parser.checkJson();
  if (!glycoJSON) return false;
  var glycans = parser.assignData();
  return (0, _createSVGMain.createSVGMain)(glycans);
};

/***/ }),

/***/ "./js/class/Bracket.js":
/*!*****************************!*\
  !*** ./js/class/Bracket.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bracket = undefined;

var _VisibleElement2 = __webpack_require__(/*! ./VisibleElement */ "./js/class/VisibleElement.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Bracket =
/*#__PURE__*/
function (_VisibleElement) {
  _inherits(Bracket, _VisibleElement);

  function Bracket() {
    var _this;

    _classCallCheck(this, Bracket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bracket).call(this));
    _this.SVGShape = "";
    return _this;
  }

  _createClass(Bracket, [{
    key: "setSVGShape",
    value: function setSVGShape(svg) {
      this.SVGShape = svg;
    }
  }, {
    key: "getSVGShape",
    value: function getSVGShape() {
      return this.SVGShape;
    }
  }]);

  return Bracket;
}(_VisibleElement2.VisibleElement);

exports.Bracket = Bracket;

/***/ }),

/***/ "./js/class/Bridge.js":
/*!****************************!*\
  !*** ./js/class/Bridge.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bridge = undefined;

var _Node2 = __webpack_require__(/*! ./Node */ "./js/class/Node.js");

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

var _BridgeEdge = __webpack_require__(/*! ./BridgeEdge */ "./js/class/BridgeEdge.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Bridge =
/*#__PURE__*/
exports.Bridge = function (_Node) {
  _inherits(Bridge, _Node);

  function Bridge() {
    var _this;

    _classCallCheck(this, Bridge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bridge).call(this));
    _this.name = "";
    _this.parentSugar = {};
    _this.childSugar = {};
    _this.edge = {};
    return _this;
  }

  _createClass(Bridge, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "setParentSugar",
    value: function setParentSugar(parentSugar) {
      this.parentSugar = parentSugar;
    }
  }, {
    key: "getParentSugar",
    value: function getParentSugar() {
      return this.parentSugar;
    }
  }, {
    key: "setEdge",
    value: function setEdge(edge) {
      this.edge = edge;
    }
  }, {
    key: "getEdge",
    value: function getEdge() {
      return this.edge;
    }
  }]);

  return Bridge;
}(_Node2.Node);

/***/ }),

/***/ "./js/class/BridgeEdge.js":
/*!********************************!*\
  !*** ./js/class/BridgeEdge.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BridgeEdge = undefined;

var _Glycobond2 = __webpack_require__(/*! ./Glycobond */ "./js/class/Glycobond.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BridgeEdge =
/*#__PURE__*/
exports.BridgeEdge = function (_Glycobond) {
  _inherits(BridgeEdge, _Glycobond);

  function BridgeEdge() {
    _classCallCheck(this, BridgeEdge);

    return _possibleConstructorReturn(this, _getPrototypeOf(BridgeEdge).call(this));
  }

  return BridgeEdge;
}(_Glycobond2.Glycobond);

/***/ }),

/***/ "./js/class/Cyclic.js":
/*!****************************!*\
  !*** ./js/class/Cyclic.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cyclic = undefined;

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cyclic =
/*#__PURE__*/
function () {
  function Cyclic() {
    _classCallCheck(this, Cyclic);
  }

  _createClass(Cyclic, [{
    key: "setReductionSugar",
    value: function setReductionSugar(sugar) {
      this.reductionSugar = sugar;
      return;
    }
  }, {
    key: "getReductionSugar",
    value: function getReductionSugar() {
      return this.reductionSugar;
    }
  }, {
    key: "setNonReductionSugar",
    value: function setNonReductionSugar(sugar) {
      this.nonReductionSugar = sugar;
      return;
    }
  }, {
    key: "getNonReductionSugar",
    value: function getNonReductionSugar() {
      return this.nonReductionSugar;
    }
  }]);

  return Cyclic;
}();

exports.Cyclic = Cyclic;

/***/ }),

/***/ "./js/class/Edge.js":
/*!**************************!*\
  !*** ./js/class/Edge.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Edge = undefined;

var _VisibleElement2 = __webpack_require__(/*! ./VisibleElement */ "./js/class/VisibleElement.js");

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Edge =
/*#__PURE__*/
function (_VisibleElement) {
  _inherits(Edge, _VisibleElement);

  //親Nodeの結合位置(未定義の場合"undefined")
  function Edge() {
    var _this;

    _classCallCheck(this, Edge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edge).call(this));
    _this.linkageType = "undefined";
    _this.parentSugar = {};
    _this.parentPosition = "undefined";
    return _this;
  }

  _createClass(Edge, [{
    key: "setLinkageType",
    value: function setLinkageType(linkage) {
      this.linkageType = linkage;
      return;
    }
  }, {
    key: "getLinkageType",
    value: function getLinkageType() {
      return this.linkageType;
    }
  }, {
    key: "setParentSugar",
    value: function setParentSugar(sugar) {
      this.parentSugar = sugar;
      return;
    }
  }, {
    key: "getParentSugar",
    value: function getParentSugar() {
      return this.parentSugar;
    }
  }, {
    key: "isEmptyParentSugar",
    value: function isEmptyParentSugar() {
      return !Object.keys(this.parentSugar).length;
    }
  }, {
    key: "hasParentPosition",
    value: function hasParentPosition() {
      if (this.parentPosition === "undefined") return false;else return true;
    }
  }, {
    key: "getParentPosition",
    value: function getParentPosition() {
      return this.parentPosition;
    }
  }, {
    key: "setParentPositon",
    value: function setParentPositon(parentPosition) {
      this.parentPosition = parentPosition;
      return;
    }
  }, {
    key: "calcMiddleCoordinate",
    value: function calcMiddleCoordinate() {
      var lineTo = [this.children[0].graphics._activeInstructions[0].x, this.children[0].graphics._activeInstructions[0].y];
      var moveTo = [this.children[0].graphics._activeInstructions[1].x, this.children[0].graphics._activeInstructions[1].y];
      return [(lineTo[0] + moveTo[0]) / 2, (lineTo[1] + moveTo[1]) / 2];
    }
  }, {
    key: "calcQuaterCoordinate",
    value: function calcQuaterCoordinate(middleCoordinate) {
      var quarterCoordinate1 = [];
      var quarterCoordinate2 = [];
      quarterCoordinate1.push((middleCoordinate[0] + this.children[0].graphics._activeInstructions[0].x) / 2);
      quarterCoordinate1.push((middleCoordinate[1] + this.children[0].graphics._activeInstructions[0].y) / 2);
      quarterCoordinate2.push((middleCoordinate[0] + this.children[0].graphics._activeInstructions[1].x) / 2);
      quarterCoordinate2.push((middleCoordinate[1] + this.children[0].graphics._activeInstructions[1].y) / 2);

      if (quarterCoordinate1[0] > quarterCoordinate2[0]) {
        return [quarterCoordinate1, quarterCoordinate2];
      } else {
        return [quarterCoordinate2, quarterCoordinate1];
      }
    }
  }, {
    key: "whitchParentHighChildLow",
    value: function whitchParentHighChildLow(parent, child) {
      if (parent[1] < child[1]) return true;else {
        return false;
      }
    }
  }]);

  return Edge;
}(_VisibleElement2.VisibleElement);

exports.Edge = Edge;

/***/ }),

/***/ "./js/class/Fragment.js":
/*!******************************!*\
  !*** ./js/class/Fragment.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fragment = undefined;

var _Glycan2 = __webpack_require__(/*! ./Glycan */ "./js/class/Glycan.js");

var _FragmentBracket = __webpack_require__(/*! ./FragmentBracket */ "./js/class/FragmentBracket.js");

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

var _Glycobond = __webpack_require__(/*! ./Glycobond */ "./js/class/Glycobond.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Fragment =
/*#__PURE__*/
exports.Fragment = function (_Glycan) {
  _inherits(Fragment, _Glycan);

  function Fragment() {
    var _this;

    _classCallCheck(this, Fragment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fragment).call(this));
    _this.parentFragmentBracket;
    return _this;
  }

  _createClass(Fragment, [{
    key: "setParentFragmentBracket",
    value: function setParentFragmentBracket(fragmentBracket) {
      this.parentFragmentBracket = fragmentBracket;
      return;
    }
  }, {
    key: "getParentFragmentBracket",
    value: function getParentFragmentBracket() {
      return this.parentFragmentBracket;
    }
  }, {
    key: "highLight",
    value: function highLight(sugar) {
      sugar.highLight();
      var parentBonds = sugar.getParentBond();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parentBonds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var parentBond = _step.value;
          parentBond.highLight();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (!sugar.hasChildSugars()) {
        liaise.stageUpdate();
        return;
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = sugar.childSugars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            if (!sugar.isChildCyclicEmpty()) {
              if (sugar.getChildCyclic().getReductionSugar() === child) {
                continue;
              }
            }

            this.highLight(child);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      liaise.stageUpdate();
      return;
    }
  }, {
    key: "offLight",
    value: function offLight(sugar) {
      sugar.offLight();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = sugar.getParentBond()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var parentBond = _step3.value;
          parentBond.offLight();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (!sugar.hasChildSugars()) {
        liaise.stageUpdate();
        return;
      } else {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = sugar.childSugars[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var child = _step4.value;

            if (!sugar.isChildCyclicEmpty()) {
              if (sugar.getChildCyclic().getReductionSugar() === child) {
                continue;
              }
            }

            this.offLight(child);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }

      liaise.stageUpdate();
      return;
    }
  }, {
    key: "culcPlucXLayer",
    value: function culcPlucXLayer(plus) {
      recuversiveSetXLayer(this.getRootNode(), plus + 1);
    }
  }, {
    key: "culcPlucYLayer",
    value: function culcPlucYLayer(plus) {
      recuversiveSetYLayer(this.getRootNode(), plus);
    }
  }]);

  return Fragment;
}(_Glycan2.Glycan);

var recuversiveSetXLayer = function recuversiveSetXLayer(sugar, plusX) {
  sugar.setXLayer(sugar.getXLayer() + plusX);

  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = sugar.getChildSugars()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var child = _step5.value;
          recuversiveSetXLayer(child, plusX);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = sugar.getChildSugars()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _child = _step6.value;
          if (sugar.getChildCyclic().getReductionSugar() === _child) continue;else recuversiveSetXLayer(_child, plusX);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  } else {
    return;
  }
};

var recuversiveSetYLayer = function recuversiveSetYLayer(sugar, plusY) {
  sugar.setYLayer(sugar.getYLayer() + plusY);

  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = sugar.getChildSugars()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var child = _step7.value;
          recuversiveSetYLayer(child, plusY);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = sugar.getChildSugars()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _child2 = _step8.value;
          if (sugar.getChildCyclic().getReductionSugar() === _child2) continue;else recuversiveSetYLayer(_child2, plusY);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  } else {
    return;
  }
};

/***/ }),

/***/ "./js/class/FragmentBracket.js":
/*!*************************************!*\
  !*** ./js/class/FragmentBracket.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FragmentBracket = undefined;

var _Bracket2 = __webpack_require__(/*! ./Bracket */ "./js/class/Bracket.js");

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FragmentBracket =
/*#__PURE__*/
function (_Bracket) {
  _inherits(FragmentBracket, _Bracket);

  //フラグメントがつく親単糖
  //親となる糖鎖構造
  //フラグメントの糖鎖構造
  function FragmentBracket() {
    var _this;

    _classCallCheck(this, FragmentBracket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FragmentBracket).call(this));
    _this.parentSugars = [];
    _this.parentGlycan = {};
    _this.childGlycans = [];
    _this.isResuctionSugar = false;
    return _this;
  }

  _createClass(FragmentBracket, [{
    key: "getParentSugars",
    value: function getParentSugars() {
      return this.parentSugars;
    }
  }, {
    key: "setParentSugars",
    value: function setParentSugars(sugar) {
      this.parentSugars.push(sugar);
      return;
    }
  }, {
    key: "hasParentSugars",
    value: function hasParentSugars() {
      if (this.getParentSugars().length === 0) return false;else return true;
    }
  }, {
    key: "getParentGlycan",
    value: function getParentGlycan() {
      return this.parentGlycan;
    }
  }, {
    key: "setParentGlycan",
    value: function setParentGlycan(glycan) {
      this.parentGlycan = glycan;
      return;
    }
  }, {
    key: "isEmptyParentGlycan",
    value: function isEmptyParentGlycan() {
      return !Object.keys(this.parentGlycan).length;
    }
  }, {
    key: "getChildGlycans",
    value: function getChildGlycans() {
      return this.childGlycans;
    }
  }, {
    key: "setChildGlycans",
    value: function setChildGlycans(glycan) {
      this.childGlycans.push(glycan);
      return;
    }
  }, {
    key: "hasChildGlycans",
    value: function hasChildGlycans() {
      if (this.childGlycans.length === 0) return false;else return true;
    }
  }, {
    key: "spliceChildGlycans",
    value: function spliceChildGlycans(glycan) {
      for (var i = 0; i < this.childGlycans.length; i++) {
        if (glycan === this.childGlycans[i]) {
          this.childGlycans.splice(i, 1);
        }
      }

      return;
    }
  }, {
    key: "getParentGlycanNonReductionSguars",
    value: function getParentGlycanNonReductionSguars() {
      var nonReductionSugars = [];
      return recuversiveNonReductionSugar(this.getParentGlycan().getRootNode(), nonReductionSugars);
    }
  }, {
    key: "changeIsReductionSugar",
    value: function changeIsReductionSugar() {
      if (this.isResuctionSugar) {
        this.isResuctionSugar = false;
      } else {
        this.isResuctionSugar = true;
      }
    }
  }]);

  return FragmentBracket;
}(_Bracket2.Bracket);

var recuversiveNonReductionSugar = function recuversiveNonReductionSugar(sugar, nonReductionSugars) {
  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sugar.getChildSugars()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;
          nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      if (sugar.getChildSugars().length === 1) {
        nonReductionSugars.push(sugar);
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = sugar.getChildSugars()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _child = _step2.value;
            if (_child === sugar.getChildCyclic().getReductionSugar()) continue;else {
              nonReductionSugars = recuversiveNonReductionSugar(_child, nonReductionSugars);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  } else {
    nonReductionSugars.push(sugar);
    return nonReductionSugars;
  }

  return nonReductionSugars;
};

exports.FragmentBracket = FragmentBracket;

/***/ }),

/***/ "./js/class/Glycan.js":
/*!****************************!*\
  !*** ./js/class/Glycan.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Glycan = undefined;

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

var _FragmentBracket = __webpack_require__(/*! ./FragmentBracket */ "./js/class/FragmentBracket.js");

var _Glycobond = __webpack_require__(/*! ./Glycobond */ "./js/class/Glycobond.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { Fragment } from "./Fragment";
var Glycan =
/*#__PURE__*/
function () {
  //その糖鎖構造のルート単糖
  //糖鎖が就職するタンパク質の結合アミノ酸部位
  // parentGlycan: Glycan;
  // parentSugars: Array<Sugar>;
  // childGlycans: Array<Glycan>;
  function Glycan() {
    _classCallCheck(this, Glycan);

    this.rootNode = new _Sugar.Sugar("undefined");
    this.amino = "";
    this.fragmentBracket = {};
    this.maxXLayer = 0;
    this.maxYLayer = 0;
    this.minYLayer = 1000; // this.parentGlycan = new Glycan();
    // this.parentSugars = [];
    // this.childGlycans = [];
  }

  _createClass(Glycan, [{
    key: "getRootNode",
    value: function getRootNode() {
      return this.rootNode;
    }
  }, {
    key: "setRootNode",
    value: function setRootNode(sugar) {
      this.rootNode = sugar;
      return;
    }
  }, {
    key: "getAmino",
    value: function getAmino() {
      return this.amino;
    }
  }, {
    key: "setAmino",
    value: function setAmino(amino) {
      this.amino = amino;
      return;
    }
  }, {
    key: "setFragmentBracket",
    value: function setFragmentBracket(bracket) {
      this.fragmentBracket = bracket;
      return;
    }
  }, {
    key: "getFragmentBracket",
    value: function getFragmentBracket() {
      return this.fragmentBracket;
    }
  }, {
    key: "isFragmentBracketEmpty",
    value: function isFragmentBracketEmpty() {
      return !Object.keys(this.fragmentBracket).length;
    }
  }, {
    key: "setMaxXLayer",
    value: function setMaxXLayer(layer) {
      if (this.maxXLayer < layer) {
        this.maxXLayer = layer;
      }
    }
  }, {
    key: "getMaxXLayer",
    value: function getMaxXLayer() {
      return this.maxXLayer;
    }
  }, {
    key: "setMaxYLayer",
    value: function setMaxYLayer(layer) {
      if (this.maxYLayer < layer) {
        this.maxYLayer = layer;
      }
    }
  }, {
    key: "getMaxYLayer",
    value: function getMaxYLayer() {
      return this.maxXYayer;
    }
  }, {
    key: "highLight",
    value: function highLight(sugar) {
      sugar.highLight();

      switch (sugar) {
        case this.rootNode:
          {
            // if(this.rootNode instanceof Fragment) {
            //     this.rootNode.getParentBond().highLight();
            // }
            if (sugar.hasParentSugars()) {
              console.log(sugar.hasParentSugars());
              var parentBonds = sugar.getParentBond();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = parentBonds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var parentBond = _step.value;
                  parentBond.highLight();
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }

            break;
          }

        default:
          {
            var _parentBonds = sugar.getParentBond();

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _parentBonds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _parentBond = _step2.value;

                _parentBond.highLight();
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            break;
          }
      }

      if (!sugar.hasChildSugars()) {
        liaise.stageUpdate();
        return;
      } else {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = sugar.childSugars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var child = _step3.value;

            if (!sugar.isChildCyclicEmpty()) {
              if (sugar.getChildCyclic().getReductionSugar() === child) {
                continue;
              }
            }

            this.highLight(child);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      liaise.stageUpdate();
      return;
    }
  }, {
    key: "offLight",
    value: function offLight(sugar) {
      sugar.offLight();

      switch (sugar) {
        case this.rootNode:
          {
            if (sugar.hasParentSugars()) {
              var parentBonds = sugar.getParentBond();
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = parentBonds[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var parentBond = _step4.value;
                  parentBond.offLight();
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }

            break;
          }

        default:
          {
            var _parentBonds2 = sugar.getParentBond();

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = _parentBonds2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _parentBond2 = _step5.value;

                _parentBond2.offLight();
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            break;
          }
      }

      if (!sugar.hasChildSugars()) {
        liaise.stageUpdate();
        return;
      } else {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = sugar.childSugars[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var child = _step6.value;

            if (!sugar.isChildCyclicEmpty()) {
              if (sugar.getChildCyclic().getReductionSugar() === child) {
                continue;
              }
            }

            this.offLight(child);
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }

      liaise.stageUpdate();
      return;
    }
  }, {
    key: "checkSugarInGlycan",
    value: function checkSugarInGlycan(sugar) {
      var result = false;
      result = this.recuversiveCheckSugarInGlycan(sugar, this.getRootNode());
      return result;
    }
  }, {
    key: "recuversiveCheckSugarInGlycan",
    value: function recuversiveCheckSugarInGlycan(sugar, child) {
      if (sugar === child) {
        return true;
      } else if (!child.isChildCyclicEmpty()) {
        return false;
      } else {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = child.getChildSugars()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var child_child = _step7.value;
            var result = this.recuversiveCheckSugarInGlycan(sugar, child_child);

            if (result) {
              return result;
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }

      return false;
    }
  }, {
    key: "recversiveCulcMaxMinYLayer",
    value: function recversiveCulcMaxMinYLayer(sugar) {
      if (sugar.hasChildSugars()) {
        if (sugar.isChildCyclicEmpty()) {
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = sugar.getChildSugars()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var child = _step8.value;
              this.recversiveCulcMaxMinYLayer(child);
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        } else {
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = sugar.getChildSugars()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var _child = _step9.value;

              if (_child === sugar.getChildCyclic().getReductionSugar()) {
                continue;
              } else {
                this.recversiveCulcMaxMinYLayer(_child);
              }
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }
        }
      } else {
        if (this.maxYLayer < sugar.getYLayer()) this.maxYLayer = sugar.getYLayer();
        if (this.minYLayer > sugar.getYLayer()) this.minYLayer = sugar.getYLayer();
      }

      if (this.maxYLayer < sugar.getYLayer()) this.maxYLayer = sugar.getYLayer();
      if (this.minYLayer > sugar.getYLayer()) this.minYLayer = sugar.getYLayer();
    }
  }]);

  return Glycan;
}();

exports.Glycan = Glycan;

/***/ }),

/***/ "./js/class/Glycobond.js":
/*!*******************************!*\
  !*** ./js/class/Glycobond.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Glycobond = undefined;

var _Edge2 = __webpack_require__(/*! ./Edge */ "./js/class/Edge.js");

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

var _getColor = __webpack_require__(/*! ../data/getColor */ "./js/data/getColor.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Glycobond =
/*#__PURE__*/
function (_Edge) {
  _inherits(Glycobond, _Edge);

  //子Nodeの結合位置(未定義の場合"undefined")
  function Glycobond() {
    var _this;

    _classCallCheck(this, Glycobond);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Glycobond).call(this));
    _this.childAnomeric = "undefined";
    _this.childPosition = "undefined";
    _this.parentId = -1;
    _this.svgLineShape = "";
    _this.svgTextShape = "";
    _this.svgChildPosition = [];
    _this.svgParentPosition = [];
    _this.jsonParentId = "";
    _this.jsonChildId = "";
    return _this;
  }

  _createClass(Glycobond, [{
    key: "hasChildPosition",
    value: function hasChildPosition() {
      if (this.childPosition === "undefined") return false;else return true;
    }
  }, {
    key: "getChildPosition",
    value: function getChildPosition() {
      return this.childPosition;
    }
  }, {
    key: "setChildPosition",
    value: function setChildPosition(childPosition) {
      this.childPosition = childPosition;
      return;
    }
  }, {
    key: "hasChildAnomeric",
    value: function hasChildAnomeric() {
      if (this.childAnomeric === "undefined") return false;else return true;
    }
  }, {
    key: "setChildAnomeric",
    value: function setChildAnomeric(anomeric) {
      this.childAnomeric = anomeric;
      return;
    }
  }, {
    key: "getChildAnomeric",
    value: function getChildAnomeric() {
      return this.childAnomeric;
    }
  }, {
    key: "hasChildSugar",
    value: function hasChildSugar() {
      if (this.childSugar === {}) return false;else return true;
    }
  }, {
    key: "setChildSugar",
    value: function setChildSugar(sugar) {
      this.childSugar = sugar;
      return;
    }
  }, {
    key: "getChildSugar",
    value: function getChildSugar() {
      return this.childSugar;
    }
  }, {
    key: "highLight",
    value: function highLight() {
      this.children[0].graphics._stroke.style = (0, _getColor.getColor)("red");
      this.children[0].alpha = 0.5;
    }
  }, {
    key: "offLight",
    value: function offLight() {
      this.children[0].graphics._stroke.style = (0, _getColor.getColor)("black");
      this.children[0].alpha = 1.0;
    }
  }, {
    key: "checkYCoordinate",
    value: function checkYCoordinate() {
      if (this.children[0].graphics._activeInstructions[0].y === this.children[0].graphics._activeInstructions[1].y) return true;else return false;
    }
  }, {
    key: "setParentId",
    value: function setParentId(id) {
      this.parentId = id;
    }
  }, {
    key: "getParentId",
    value: function getParentId() {
      return this.parentId;
    }
  }, {
    key: "hasParentid",
    value: function hasParentid() {
      if (this.parentId === -1) return false;else return true;
    }
  }, {
    key: "setSvgLineShape",
    value: function setSvgLineShape(svg) {
      this.svgLineShape = svg;
    }
  }, {
    key: "getSvgLineShape",
    value: function getSvgLineShape() {
      return this.svgLineShape;
    }
  }, {
    key: "setSvgTextShape",
    value: function setSvgTextShape(svg) {
      this.svgTextShape = svg;
    }
  }, {
    key: "getSvgTextShape",
    value: function getSvgTextShape() {
      return this.svgTextShape;
    }
  }, {
    key: "getSvgParentPosition",
    value: function getSvgParentPosition() {
      return this.svgParentPosition;
    }
  }, {
    key: "hasSvgParentPosition",
    value: function hasSvgParentPosition() {
      if (this.getSvgParentPosition().length === 0) return false;
      return true;
    }
  }, {
    key: "hasSvgChildPosition",
    value: function hasSvgChildPosition() {
      if (this.getSvgChildPosition().length === 0) return false;
      return true;
    }
  }, {
    key: "getSvgChildPosition",
    value: function getSvgChildPosition() {
      return this.svgChildPosition;
    }
  }, {
    key: "culcMinParentPosition",
    value: function culcMinParentPosition() {
      var num = 200;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.svgParentPosition[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var posi = _step.value;

          if (num > posi) {
            num = posi;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.minParentPosition = num;
    }
  }]);

  return Glycobond;
}(_Edge2.Edge);

exports.Glycobond = Glycobond;

/***/ }),

/***/ "./js/class/Modification.js":
/*!**********************************!*\
  !*** ./js/class/Modification.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modification = undefined;

var _Node2 = __webpack_require__(/*! ./Node */ "./js/class/Node.js");

var _Modificationbond = __webpack_require__(/*! ./Modificationbond */ "./js/class/Modificationbond.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Modification =
/*#__PURE__*/
function (_Node) {
  _inherits(Modification, _Node);

  //名前
  function Modification() {
    var _this;

    _classCallCheck(this, Modification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modification).call(this));
    _this.name = "";
    _this.modificationBond;
    _this.childCommaShape = {};
    return _this;
  }

  _createClass(Modification, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "setModificationBond",
    value: function setModificationBond(position) {
      this.modificationBond = position;
    }
  }, {
    key: "getModificationBond",
    value: function getModificationBond() {
      return this.modificationBond;
    }
  }, {
    key: "isChildCommaShapeEmpty",
    value: function isChildCommaShapeEmpty() {
      return !Object.keys(this.childCommaShape).length;
    }
  }]);

  return Modification;
}(_Node2.Node);

exports.Modification = Modification;

/***/ }),

/***/ "./js/class/Modificationbond.js":
/*!**************************************!*\
  !*** ./js/class/Modificationbond.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modificationbond = undefined;

var _Edge2 = __webpack_require__(/*! ./Edge */ "./js/class/Edge.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Modificationbond =
/*#__PURE__*/
function (_Edge) {
  _inherits(Modificationbond, _Edge);

  //修飾の結合の名前
  //親単糖の結合場所
  function Modificationbond() {
    var _this;

    _classCallCheck(this, Modificationbond);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modificationbond).call(this));
    _this.parentSugarPosition = NaN;
    return _this;
  }

  _createClass(Modificationbond, [{
    key: "hasParentPosition",
    value: function hasParentPosition() {
      if (isNaN(this.parentSugarPosition)) return false;else return true;
    }
  }, {
    key: "getParentSugarPosition",
    value: function getParentSugarPosition() {
      return this.parentSugarPosition;
    }
  }, {
    key: "setParentSugarPosition",
    value: function setParentSugarPosition(parentPosition) {
      this.parentSugarPosition = parentPosition;
      return;
    }
  }]);

  return Modificationbond;
}(_Edge2.Edge);

exports.Modificationbond = Modificationbond;

/***/ }),

/***/ "./js/class/MultipleModification.js":
/*!******************************************!*\
  !*** ./js/class/MultipleModification.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleModification = undefined;

var _Node2 = __webpack_require__(/*! ./Node */ "./js/class/Node.js");

var _MultipleModificationBind = __webpack_require__(/*! ./MultipleModificationBind */ "./js/class/MultipleModificationBind.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MultipleModification =
/*#__PURE__*/
exports.MultipleModification = function (_Node) {
  _inherits(MultipleModification, _Node);

  function MultipleModification() {
    var _this;

    _classCallCheck(this, MultipleModification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultipleModification).call(this));
    _this.name = "";
    _this.MultipleBind = {};
    _this.childCommaShape = {};
    _this.fuzzy = false;
    return _this;
  }

  _createClass(MultipleModification, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "setMultipleBind",
    value: function setMultipleBind(position) {
      this.MultipleBind = position;
    }
  }, {
    key: "getMultipleBind",
    value: function getMultipleBind() {
      return this.MultipleBind;
    }
  }, {
    key: "isChildCommaShapeEmpty",
    value: function isChildCommaShapeEmpty() {
      return !Object.keys(this.childCommaShape).length;
    }
  }]);

  return MultipleModification;
}(_Node2.Node);

/***/ }),

/***/ "./js/class/MultipleModificationBind.js":
/*!**********************************************!*\
  !*** ./js/class/MultipleModificationBind.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleModificationBind = undefined;

var _Edge2 = __webpack_require__(/*! ./Edge */ "./js/class/Edge.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MultipleModificationBind =
/*#__PURE__*/
exports.MultipleModificationBind = function (_Edge) {
  _inherits(MultipleModificationBind, _Edge);

  //修飾の結合の名前
  //親単糖の結合場所
  function MultipleModificationBind() {
    var _this;

    _classCallCheck(this, MultipleModificationBind);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultipleModificationBind).call(this));
    _this.parentSugarPosition = [];
    return _this;
  }

  _createClass(MultipleModificationBind, [{
    key: "hasParentPosition",
    value: function hasParentPosition() {
      if (this.parentSugarPosition.length === 0) return false;else return true;
    }
  }, {
    key: "getParentSugarPosition",
    value: function getParentSugarPosition() {
      return this.parentSugarPosition;
    }
  }, {
    key: "setParentSugarPosition",
    value: function setParentSugarPosition(parentPosition) {
      this.parentSugarPosition.push(parentPosition);
      return;
    }
  }]);

  return MultipleModificationBind;
}(_Edge2.Edge);

/***/ }),

/***/ "./js/class/Node.js":
/*!**************************!*\
  !*** ./js/class/Node.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = undefined;

var _VisibleElement2 = __webpack_require__(/*! ./VisibleElement */ "./js/class/VisibleElement.js");

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

var _Glycobond = __webpack_require__(/*! ./Glycobond */ "./js/class/Glycobond.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Node =
/*#__PURE__*/
function (_VisibleElement) {
  _inherits(Node, _VisibleElement);

  // parentSugars: Array<Sugar>;  //親のリスト。単糖
  //子供のリスト。単糖と修飾
  // childSugars: Array<Sugar>;  //子供のリスト。単糖
  // childModifications: Array<Modification>;  //子供のリスト。修飾
  //親の単糖との結合
  function Node() {
    var _this;

    _classCallCheck(this, Node);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this));
    _this.parentSugars = [];
    _this.childNodes = [];
    _this.childSugars = [];
    _this.parentBonds = [];
    return _this;
  }

  _createClass(Node, [{
    key: "hasParentSugars",
    value: function hasParentSugars() {
      if (this.parentSugars.length != 0) return true;else return false;
    }
  }, {
    key: "getParentSugars",
    value: function getParentSugars() {
      return this.parentSugars;
    }
  }, {
    key: "setParentSugars",
    value: function setParentSugars(sugar) {
      this.parentSugars.push(sugar);
      return;
    }
  }, {
    key: "hasChildSugars",
    value: function hasChildSugars() {
      if (this.childSugars.length != 0) return true;else return false;
    }
  }, {
    key: "sortChildSugar",
    value: function sortChildSugar() {
      var sortedList = [];

      if (this.getChildSugars().length === 1) {
        return;
      }

      var bindList = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.getChildSugars()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = child.getParentBond()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var bind = _step2.value;

              if (bind.getParentSugar() === this) {
                bindList.push(bind);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var _i = 0; _i < bindList.length; _i++) {
        var _bind = bindList[_i];

        _bind.culcMinParentPosition();
      }

      bindList.sort(function (a, b) {
        if (Number(a.minParentPosition) > Number(b.minParentPosition)) return -1;
        if (Number(a.minParentPosition) < Number(b.minParentPosition)) return 1;
        return 0;
      });

      for (var _i2 = 0; _i2 < bindList.length; _i2++) {
        var _bind2 = bindList[_i2];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.getChildSugars()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _child = _step3.value;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _child.getParentBond()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var cbind = _step4.value;

                if (cbind === _bind2) {
                  sortedList.push(_child);
                }
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      this.childSugars = sortedList;
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: "setChildNodes",
    value: function setChildNodes(node) {
      this.childNodes.push(node);
      return;
    } // hasChildSugars(): boolean{
    //     if (this.childSugars.length != 0) return true;
    //     else return false;
    // }

  }, {
    key: "getChildSugars",
    value: function getChildSugars() {
      return this.childSugars;
    }
  }, {
    key: "setChildSugars",
    value: function setChildSugars(sugar) {
      this.childSugars.push(sugar);
      return;
    }
  }, {
    key: "getParentBond",
    value: function getParentBond() {
      return this.parentBonds;
    }
  }, {
    key: "setParentBond",
    value: function setParentBond(edge) {
      this.parentBonds.push(edge);
      return;
    }
  }, {
    key: "hasParentBond",
    value: function hasParentBond() {
      if (this.parentBonds.length === 0) return false;else return true;
    }
  }, {
    key: "checkDrawingParentBond",
    value: function checkDrawingParentBond(parentSugar) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.parentBonds[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var parentBond = _step5.value;

          if (parentBond.getParentSugar() === parentSugar) {
            return parentBond;
          } else return {};
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return {};
    }
  }]);

  return Node;
}(_VisibleElement2.VisibleElement);

exports.Node = Node;

/***/ }),

/***/ "./js/class/ParserClass/JSONParser.js":
/*!********************************************!*\
  !*** ./js/class/ParserClass/JSONParser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSONParser = undefined;

var _Glycan = __webpack_require__(/*! ../Glycan */ "./js/class/Glycan.js");

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkMonosaccharides = __webpack_require__(/*! ../../jsonParser/check/checkMonosaccharides */ "./js/jsonParser/check/checkMonosaccharides.js");

var _checkFragment = __webpack_require__(/*! ../../jsonParser/check/checkFragment */ "./js/jsonParser/check/checkFragment.js");

var _checkRepeat = __webpack_require__(/*! ../../jsonParser/check/checkRepeat */ "./js/jsonParser/check/checkRepeat.js");

var _checkEdge = __webpack_require__(/*! ../../jsonParser/check/checkEdge */ "./js/jsonParser/check/checkEdge.js");

var _checkBridge = __webpack_require__(/*! ../../jsonParser/check/checkBridge */ "./js/jsonParser/check/checkBridge.js");

var _assignMain = __webpack_require__(/*! ../../jsonParser/assignDataStructure/assignMain */ "./js/jsonParser/assignDataStructure/assignMain.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JSONParser =
/*#__PURE__*/
exports.JSONParser = function () {
  function JSONParser(text) {
    _classCallCheck(this, JSONParser);

    this.json = text;
    this.glycan = new _Glycan.Glycan();
    this.monosaccharides = [];
    this.subfragments = [];
  } //GlyTouCanで定義されたGlycanを表すJSONがチェックする、定義に外れたものであった場合falseを返す


  _createClass(JSONParser, [{
    key: "checkJson",
    value: function checkJson() {
      var MONOSACCHARIDES_FLAG = false;
      var FRAGMENTS_FLAG = false;
      var REPEAT_FLAG = false;
      var EDGES_FLAG = false;
      var BRIDGE_FLAG = false;

      var _arr = Object.keys(this.json);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        switch (key.toLowerCase()) {
          case _JSONKeys.JSONKeys.Monosaccharides.toLowerCase():
            {
              MONOSACCHARIDES_FLAG = (0, _checkMonosaccharides.check_monosaccharides)(this.json[key]);
              break;
            }

          case _JSONKeys.JSONKeys.Fragments.toLowerCase():
            {
              FRAGMENTS_FLAG = (0, _checkFragment.check_fragment)(this.json[key]);
              break;
            }

          case _JSONKeys.JSONKeys.Repeat.toLowerCase():
            {
              REPEAT_FLAG = (0, _checkRepeat.check_repeat)(this.json[key]);
              break;
            }

          case _JSONKeys.JSONKeys.Edges.toLowerCase():
            {
              EDGES_FLAG = (0, _checkEdge.check_edge)(this.json[key]);
              break;
            }

          case _JSONKeys.JSONKeys.Bridge.toLowerCase():
            {
              BRIDGE_FLAG = (0, _checkBridge.check_bridge)(this.json[key]);
              break;
            }

          default:
            // alert("this json is error!");
            // return false;
            continue;
        }
      }

      if (MONOSACCHARIDES_FLAG && FRAGMENTS_FLAG && REPEAT_FLAG && EDGES_FLAG && BRIDGE_FLAG) return true;else {
        alert("this json is error!");
        return false;
      }
    }
  }, {
    key: "assignData",
    value: function assignData() {
      return (0, _assignMain.assignMain)(this.json);
    } // setData(): Glycan{
    //     let keys: Array<string> = Object.keys(this.json);
    //     let glycan: Object = {};
    //     for(let key: string of keys ){
    //         switch(key.toLowerCase()) {
    //             case JSONKeys.Monosaccharides.toLowerCase(): {
    //                 glycan = set_monosaccharides(this.json[key]);
    //                 break;
    //             }
    //             default: break;
    //         }
    //     }
    //     return glycan;
    // }

  }]);

  return JSONParser;
}();

/***/ }),

/***/ "./js/class/ParserClass/PaeserFragments.js":
/*!*************************************************!*\
  !*** ./js/class/ParserClass/PaeserFragments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParserFragments = undefined;

var _ParserFragmentEdge = __webpack_require__(/*! ./ParserFragmentEdge */ "./js/class/ParserClass/ParserFragmentEdge.js");

var _Sugar = __webpack_require__(/*! ../Sugar */ "./js/class/Sugar.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParserFragments =
/*#__PURE__*/
exports.ParserFragments = function () {
  function ParserFragments() {
    _classCallCheck(this, ParserFragments);

    this.Acceptor = [];
    this.Donor = "";
    this.Edge = new _ParserFragmentEdge.ParserFragmentEdge();
    this.ParentIsGlycan = true;
  }

  _createClass(ParserFragments, [{
    key: "setAcceptor",
    value: function setAcceptor(ac) {
      this.Acceptor.push(ac);
    }
  }, {
    key: "getAcceptor",
    value: function getAcceptor() {
      return this.Acceptor;
    }
  }, {
    key: "setDonor",
    value: function setDonor(donor) {
      this.Donor = donor;
    }
  }, {
    key: "getDonor",
    value: function getDonor() {
      return this.Donor;
    }
  }, {
    key: "setEdge",
    value: function setEdge(edge) {
      this.Edge = edge;
    }
  }, {
    key: "getEdge",
    value: function getEdge() {
      return this.Edge;
    }
  }, {
    key: "getParentIsGlycan",
    value: function getParentIsGlycan() {
      return this.ParentIsGlycan;
    }
  }, {
    key: "checkParent",
    value: function checkParent(nonReductionObj, monosaccharideObj) {
      for (var nonReduArray in nonReductionObj) {
        var flag2 = true;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = nonReduArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var sugar = _step.value;
            var flag = false;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.Acceptor[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var sugarId = _step2.value;

                if (sugar === monosaccharideObj[sugarId]) {
                  flag = true;
                  break;
                } else continue;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            if (flag) {
              continue;
            } else {
              flag2 = false;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (flag2) {
          this.ParentIsGlycan = true;
          break;
        } else {
          continue;
        }
      }
    }
  }]);

  return ParserFragments;
}();

var recuversiveCheckGlycan = function recuversiveCheckGlycan(sugar, parentArray) {
  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = sugar.getChildSugars()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var child = _step3.value;
          parentArray = recuversiveCheckGlycan(child, parentArray);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = sugar.getChildSugars()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _child = _step4.value;
          if (sugar.getChildCyclic().getReductionSugar() === _child) continue;else parentArray = recuversiveCheckGlycan(_child, parentArray);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } else {
    parentArray.push(sugar);
    return parentArray;
  }

  return parentArray;
};

/***/ }),

/***/ "./js/class/ParserClass/ParserBinding.js":
/*!***********************************************!*\
  !*** ./js/class/ParserClass/ParserBinding.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParserBinding = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _Glycobond = __webpack_require__(/*! ../Glycobond */ "./js/class/Glycobond.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParserBinding =
/*#__PURE__*/
exports.ParserBinding = function () {
  function ParserBinding() {
    _classCallCheck(this, ParserBinding);

    this.Acceptor = "";
    this.Donor = "";
    this.Position = {};
    this.parentSide = [];
    this.childSide = [];
  }

  _createClass(ParserBinding, [{
    key: "setAcceptor",
    value: function setAcceptor(ac) {
      this.Acceptor = ac;
    }
  }, {
    key: "getAcceptor",
    value: function getAcceptor() {
      return this.Acceptor;
    }
  }, {
    key: "setDonor",
    value: function setDonor(don) {
      this.Donor = don;
    }
  }, {
    key: "getDonor",
    value: function getDonor() {
      return this.Donor;
    }
  }, {
    key: "setPosition",
    value: function setPosition(posi) {
      this.Position = posi;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.Position;
    }
  }, {
    key: "checkWhichSide",
    value: function checkWhichSide() {
      var _arr = Object.keys(this.Position);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        switch (key.toLowerCase()) {
          case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
            {
              this.parentSide = this.Position[key];
              break;
            }

          case _JSONKeys.JSONKeys.Donor.toLowerCase():
            {
              this.childSide = this.Position[key];
              break;
            }
        }
      }
    }
  }, {
    key: "createGlycoBond",
    value: function createGlycoBond() {
      var bind = new _Glycobond.Glycobond();
      bind.svgChildPosition = this.childSide;
      bind.svgParentPosition = this.parentSide;
      bind.jsonParentId = this.Acceptor;
      bind.jsonChildId = this.Donor;
      return bind;
    }
  }]);

  return ParserBinding;
}();

/***/ }),

/***/ "./js/class/ParserClass/ParserBridge.js":
/*!**********************************************!*\
  !*** ./js/class/ParserClass/ParserBridge.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParserBridge = undefined;

var _modificationData = __webpack_require__(/*! ../../data/modificationData */ "./js/data/modificationData.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParserBridge =
/*#__PURE__*/
exports.ParserBridge = function () {
  function ParserBridge() {
    _classCallCheck(this, ParserBridge);

    this.Acceptor = "";
    this.Donor = "";
    this.Notation = "";
    this.dataNoatation = "Undefined";
  }

  _createClass(ParserBridge, [{
    key: "setAcceptor",
    value: function setAcceptor(ac) {
      this.Acceptor = ac;
    }
  }, {
    key: "getAcceptor",
    value: function getAcceptor() {
      return this.Acceptor;
    }
  }, {
    key: "setDonor",
    value: function setDonor(donor) {
      this.Donor = donor;
    }
  }, {
    key: "getDonor",
    value: function getDonor() {
      return this.Donor;
    }
  }, {
    key: "setNotation",
    value: function setNotation(no) {
      this.Notation = no;
    }
  }, {
    key: "getNotation",
    value: function getNotation() {
      return this.Notation;
    }
  }, {
    key: "checkNoatation",
    value: function checkNoatation() {
      var _arr = Object.keys(_modificationData.modifiData);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        if (key.toLowerCase() === this.getNotation().toLowerCase()) {
          this.dataNoatation = key;
        }
      }
    }
  }]);

  return ParserBridge;
}();

/***/ }),

/***/ "./js/class/ParserClass/ParserFragmentEdge.js":
/*!****************************************************!*\
  !*** ./js/class/ParserClass/ParserFragmentEdge.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParserFragmentEdge = undefined;

var _ParserBinding2 = __webpack_require__(/*! ./ParserBinding */ "./js/class/ParserClass/ParserBinding.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ParserFragmentEdge =
/*#__PURE__*/
exports.ParserFragmentEdge = function (_ParserBinding) {
  _inherits(ParserFragmentEdge, _ParserBinding);

  function ParserFragmentEdge() {
    _classCallCheck(this, ParserFragmentEdge);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParserFragmentEdge).call(this));
  }

  return ParserFragmentEdge;
}(_ParserBinding2.ParserBinding);

/***/ }),

/***/ "./js/class/ParserClass/ParserMonosaccharide.js":
/*!******************************************************!*\
  !*** ./js/class/ParserClass/ParserMonosaccharide.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParserMonosaccharide = undefined;

var _SNFGGlycanTable = __webpack_require__(/*! ../../data/SNFGGlycanTable */ "./js/data/SNFGGlycanTable.js");

var _Sugar = __webpack_require__(/*! ../Sugar */ "./js/class/Sugar.js");

var _UndefSugar = __webpack_require__(/*! ../UndefSugar */ "./js/class/UndefSugar.js");

var _greekNumber = __webpack_require__(/*! ../../data/greekNumber */ "./js/data/greekNumber.js");

var _Modification = __webpack_require__(/*! ../Modification */ "./js/class/Modification.js");

var _Modificationbond = __webpack_require__(/*! ../Modificationbond */ "./js/class/Modificationbond.js");

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _MultipleModification = __webpack_require__(/*! ../MultipleModification */ "./js/class/MultipleModification.js");

var _MultipleModificationBind = __webpack_require__(/*! ../MultipleModificationBind */ "./js/class/MultipleModificationBind.js");

var _modificationData = __webpack_require__(/*! ../../data/modificationData */ "./js/data/modificationData.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParserMonosaccharide =
/*#__PURE__*/
exports.ParserMonosaccharide = function () {
  function ParserMonosaccharide() {
    _classCallCheck(this, ParserMonosaccharide);

    this.Modifications = [];
    this.TrivialName = [];
    this.Substituents = [];
    this.Configuration = [];
    this.SuperClass = "";
    this.RingSize = "";
    this.AnomState = "";
    this.AnomPosition = "";
    this.Notation = "";
  }

  _createClass(ParserMonosaccharide, [{
    key: "setModifications",
    value: function setModifications(modification) {
      this.Modifications.push(modification);
    }
  }, {
    key: "getModifications",
    value: function getModifications() {
      return this.Modifications;
    }
  }, {
    key: "setTrivialName",
    value: function setTrivialName(trivialName) {
      this.TrivialName.push(trivialName);
    }
  }, {
    key: "getTrivialName",
    value: function getTrivialName() {
      return this.TrivialName;
    }
  }, {
    key: "setSubstituents",
    value: function setSubstituents(substituents) {
      this.Substituents.push(substituents);
    }
  }, {
    key: "getSubstituents",
    value: function getSubstituents() {
      return this.Substituents;
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(config) {
      this.Configuration.push(config);
    }
  }, {
    key: "getConfigutation",
    value: function getConfigutation() {
      return this.Configuration;
    }
  }, {
    key: "setSuperClass",
    value: function setSuperClass(sClass) {
      this.SuperClass = sClass;
    }
  }, {
    key: "getSuperClass",
    value: function getSuperClass() {
      return this.SuperClass;
    }
  }, {
    key: "setRingSize",
    value: function setRingSize(size) {
      this.RingSize = size;
    }
  }, {
    key: "getRingSize",
    value: function getRingSize() {
      return this.RingSize;
    }
  }, {
    key: "setAnomState",
    value: function setAnomState(anom) {
      this.AnomState = anom;
    }
  }, {
    key: "getAnomState",
    value: function getAnomState() {
      return this.AnomState;
    }
  }, {
    key: "setAnomPosition",
    value: function setAnomPosition(anom) {
      this.AnomPosition = anom;
    }
  }, {
    key: "getAnomPosition",
    value: function getAnomPosition() {
      return this.AnomPosition;
    }
  }, {
    key: "setNotation",
    value: function setNotation(notation) {
      this.Notation = notation;
    }
  }, {
    key: "getNotation",
    value: function getNotation() {
      return this.Notation;
    }
  }, {
    key: "checkSNFGNoatation",
    value: function checkSNFGNoatation() {
      var config = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.Configuration[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var con = _step.value;
          config += con;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var ring = "";

      switch (this.RingSize.toLowerCase()) {
        case "p":
          {
            ring = "pyranose";
            break;
          }

        case "f":
          {
            ring = "furanose";
            break;
          }

        default:
          {
            ring = "undefined";
            break;
          }
      }

      var notation = this.Notation;
      var superClass = this.SuperClass;
      var SNFGKeys = Object.keys(_SNFGGlycanTable.SNFGSymbolGlycan);
      var CONFIG_FLAG = false;
      var RING_FLAG = false;
      var NOTATION_FLAG = false;
      var SNKey = "";
      var SUGAR_FLAG = false;
      var sugar = new _Sugar.Sugar("");

      for (var _i = 0; _i < SNFGKeys.length; _i++) {
        var key = SNFGKeys[_i];

        if (key.toLowerCase() === notation.toLowerCase()) {
          NOTATION_FLAG = true;
          SNKey = key;
          if (_SNFGGlycanTable.SNFGSymbolGlycan[key].isomer.toLowerCase() === config.toLowerCase()) CONFIG_FLAG = true;
          if (_SNFGGlycanTable.SNFGSymbolGlycan[key].ring.toLowerCase() === ring.toLowerCase()) RING_FLAG = true;

          if (NOTATION_FLAG && CONFIG_FLAG && RING_FLAG) {
            sugar.changeName(key);
            sugar.setIsomer(_SNFGGlycanTable.SNFGSymbolGlycan[key].isomer);
            sugar.setRing(_SNFGGlycanTable.SNFGSymbolGlycan[key].ring);
            SUGAR_FLAG = true;
          }
        } else continue;
      }

      if (!SUGAR_FLAG) {
        if (NOTATION_FLAG) sugar = new _UndefSugar.UndefSugar(SNKey);else sugar = new _UndefSugar.UndefSugar(notation);
        if (CONFIG_FLAG) sugar.setIsomer(_SNFGGlycanTable.SNFGSymbolGlycan[SNKey].isomer);else sugar.setIsomer(config);
        if (RING_FLAG) sugar.setRing(_SNFGGlycanTable.SNFGSymbolGlycan[SNKey].ring);else sugar.setRing(ring);
      }

      var _arr = Object.keys(_greekNumber.greekNumber);

      for (var _i2 = 0; _i2 < _arr.length; _i2++) {
        var _key = _arr[_i2];
        if (_key.toLowerCase() === superClass.toLowerCase()) sugar.setCarbBone(_greekNumber.greekNumber[_key]);
      }

      return sugar;
    }
  }, {
    key: "checkModificaiton",
    value: function checkModificaiton(sugar) {
      var modifications = this.Modifications;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = modifications[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var modification = _step2.value;
          var mody = new _Modification.Modification();
          var modyBond = new _Modificationbond.Modificationbond();
          var keys = Object.keys(modification);
          var position_key = "";
          var notation_key = "";

          for (var _i3 = 0; _i3 < keys.length; _i3++) {
            var key = keys[_i3];

            switch (key.toLowerCase()) {
              case _JSONKeys.JSONKeys.Position.toLowerCase():
                {
                  position_key = key;
                  break;
                }

              case _JSONKeys.JSONKeys.Notation.toLowerCase():
                {
                  notation_key = key;
                  break;
                }
            }
          }

          if (modification[position_key].length === 1) {
            var notation = compareModifiData(modification[notation_key]);

            if (notation === "Undefined") {
              mody.setName(modification[notation_key]);
            } else {
              mody.setName(notation);
            }

            modyBond.setParentSugarPosition(modification[position_key][0]);
            mody.setModificationBond(modyBond);
          } else {
            mody = new _MultipleModification.MultipleModification();
            modyBond = new _MultipleModificationBind.MultipleModificationBind();

            var _notation = compareModifiData(modification[notation_key]);

            if (_notation === "Undefined") {
              mody.setName(modification[notation_key]);
            } else {
              mody.setName(_notation);
            }

            modyBond.parentSugarPosition = modification[position_key];
            mody.setMultipleBind(modyBond);
          }

          mody.setParentSugars(sugar);
          sugar.setChildModifications(mody);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "checkSubstituents",
    value: function checkSubstituents(sugar) {
      var substituents = this.Substituents;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = substituents[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var substituent = _step3.value;
          var keys = Object.keys(substituent);
          var position_key = "";
          var status_key = "";
          var notation_key = "";
          var accepter_key = "";
          var mody = new _Modification.Modification();
          var modyBond = new _Modificationbond.Modificationbond();

          for (var _i4 = 0; _i4 < keys.length; _i4++) {
            var key = keys[_i4];

            switch (key.toLowerCase()) {
              case _JSONKeys.JSONKeys.Position.toLowerCase():
                {
                  position_key = key;

                  var _arr2 = Object.keys(substituent[key]);

                  for (var _i5 = 0; _i5 < _arr2.length; _i5++) {
                    var positionKey = _arr2[_i5];
                    if (positionKey.toLowerCase() === _JSONKeys.JSONKeys.Acceptor.toLowerCase()) accepter_key = positionKey;
                  }

                  break;
                }

              case _JSONKeys.JSONKeys.Status.toLowerCase():
                {
                  status_key = key;
                  break;
                }

              case _JSONKeys.JSONKeys.Notation.toLowerCase():
                {
                  notation_key = key;
                  break;
                }

              default:
                continue;
            }
          }

          if (substituent[position_key][accepter_key].length === 1) {
            var notation = compareModifiData(substituent[notation_key]);

            if (notation === "Undefined") {
              mody.setName(substituent[notation_key]);
            } else {
              mody.setName(notation);
            }

            modyBond.setParentSugarPosition(substituent[position_key][accepter_key][0]);
            mody.setModificationBond(modyBond);
          } else {
            mody = new _MultipleModification.MultipleModification();
            modyBond = new _MultipleModificationBind.MultipleModificationBind();
            if (substituent[status_key] === "simple") mody.fuzzy = false;else if (substituent[status_key] === "fuzzy") mody.fuzzy = true;

            var _notation2 = compareModifiData(substituent[notation_key]);

            if (_notation2 === "Undefined") {
              mody.setName(substituent[notation_key]);
            } else {
              mody.setName(_notation2);
            }

            modyBond.parentSugarPosition = substituent[position_key];
            mody.setMultipleBind(modyBond);
          }

          mody.setParentSugars(sugar);
          sugar.setChildModifications(mody);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "checkAnome",
    value: function checkAnome(sugar) {
      switch (this.AnomState.toLowerCase()) {
        case "a":
        case "alpha":
        case "α":
          sugar.setAnomeric("α");
          break;

        case "b":
        case "beta":
        case "β":
          sugar.setAnomeric("β");
          break;

        default:
          sugar.setAnomeric("?");
      }

      sugar.setAnomeric(this.AnomState);
    }
  }]);

  return ParserMonosaccharide;
}();

var compareModifiData = function compareModifiData(notation) {
  var _arr3 = Object.keys(_modificationData.modifiData);

  for (var _i6 = 0; _i6 < _arr3.length; _i6++) {
    var key = _arr3[_i6];

    if (key.toLowerCase() === notation.toLowerCase()) {
      return key;
    }
  }

  return "Undefined";
};

/***/ }),

/***/ "./js/class/ParserClass/ParserRepeat.js":
/*!**********************************************!*\
  !*** ./js/class/ParserClass/ParserRepeat.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParserRepeat =
/*#__PURE__*/
exports.ParserRepeat = function () {
  function ParserRepeat() {
    _classCallCheck(this, ParserRepeat);

    this.Min = NaN;
    this.Max = NaN;
    this.Position = {};
    this.Start = "";
    this.End = "";
    this.numOfRepeat = "";
  }

  _createClass(ParserRepeat, [{
    key: "setMin",
    value: function setMin(min) {
      this.Min = min;
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this.Min;
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      this.Max = max;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.Max;
    }
  }, {
    key: "setPosition",
    value: function setPosition(posi) {
      this.Position = posi;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.Position;
    }
  }, {
    key: "setStart",
    value: function setStart(start) {
      this.Start = start;
    }
  }, {
    key: "getStart",
    value: function getStart() {
      return this.Start;
    }
  }, {
    key: "setEnd",
    value: function setEnd(end) {
      this.End = end;
    }
  }, {
    key: "getEnd",
    value: function getEnd() {
      return this.End;
    }
  }, {
    key: "checkNumOfReapt",
    value: function checkNumOfReapt() {
      if (this.Min === -1 || this.Max === -1) {
        this.numOfRepeat = "n";
      } else if (this.Min === 0 && this.Max === 0) {
        this.numOfRepeat = "childCyclic";
      } else if (this.Min === this.Max) {
        this.numOfRepeat = String(this.Min);
      } else {
        this.numOfRepeat = String(this.Min) + "-" + String(this.Max);
      }
    }
  }]);

  return ParserRepeat;
}();

/***/ }),

/***/ "./js/class/RepeatBracket.js":
/*!***********************************!*\
  !*** ./js/class/RepeatBracket.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepeatBracket = undefined;

var _Bracket2 = __webpack_require__(/*! ./Bracket */ "./js/class/Bracket.js");

var _Sugar = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RepeatBracket =
/*#__PURE__*/
function (_Bracket) {
  _inherits(RepeatBracket, _Bracket);

  //リピートの最終単糖
  //リピートの最初の単糖
  function RepeatBracket() {
    _classCallCheck(this, RepeatBracket);

    return _possibleConstructorReturn(this, _getPrototypeOf(RepeatBracket).call(this));
  }

  _createClass(RepeatBracket, [{
    key: "getEndSugar",
    value: function getEndSugar() {
      return this.endSugar;
    }
  }, {
    key: "setEndSugar",
    value: function setEndSugar(sugar) {
      this.endSugar = sugar;
      return;
    }
  }, {
    key: "getStartSugar",
    value: function getStartSugar() {
      return this.startSugar;
    }
  }, {
    key: "setStartSugar",
    value: function setStartSugar(sugar) {
      this.startSugar = sugar;
      return;
    }
  }, {
    key: "setReepatNumber",
    value: function setReepatNumber(num) {
      this.repeatNumber = num;
    }
  }, {
    key: "getRepeatNumber",
    value: function getRepeatNumber() {
      return this.repeatNumber;
    }
  }]);

  return RepeatBracket;
}(_Bracket2.Bracket);

exports.RepeatBracket = RepeatBracket;

/***/ }),

/***/ "./js/class/Sugar.js":
/*!***************************!*\
  !*** ./js/class/Sugar.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sugar = undefined;

var _Node2 = __webpack_require__(/*! ./Node */ "./js/class/Node.js");

var _getColor = __webpack_require__(/*! ../data/getColor */ "./js/data/getColor.js");

var _Glycan = __webpack_require__(/*! ./Glycan */ "./js/class/Glycan.js");

var _RepeatBracket = __webpack_require__(/*! ./RepeatBracket */ "./js/class/RepeatBracket.js");

var _Cyclic = __webpack_require__(/*! ./Cyclic */ "./js/class/Cyclic.js");

var _Modification = __webpack_require__(/*! ./Modification */ "./js/class/Modification.js");

var _MultipleModification = __webpack_require__(/*! ./MultipleModification */ "./js/class/MultipleModification.js");

var _Bridge = __webpack_require__(/*! ./Bridge */ "./js/class/Bridge.js");

var _FragmentBracket = __webpack_require__(/*! ./FragmentBracket */ "./js/class/FragmentBracket.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Sugar =
/*#__PURE__*/
function (_Node) {
  _inherits(Sugar, _Node);

  //単糖の名前
  //アノマーの位置（"alpha α a" or "beta β b" or "open o" or "undefined"）
  //構造異性体("L" or "D" or "undefined")
  //フラノースかピラノースか("pyranose p" or "furanose f" or "undefined")
  //Sugarが所属するGlycanオブジェクト
  //繰り返しのstartNodeの時、Bracketを持つ
  //その糖鎖がCyclic構造を形成する単糖で、非還元末端側の場合
  //還元末端側が持つサイクリック
  function Sugar(name) {
    var _this;

    _classCallCheck(this, Sugar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sugar).call(this));
    _this.name = name;
    _this.anomeric = "undefined";
    _this.isomer = "undefined";
    _this.ring = "undefined";
    _this.glycan;
    _this.childCyclic = {};
    _this.parentCyclic = {};
    _this.Xlayer = 0;
    _this.Ylayer = 0;
    _this.childModifications = [];
    _this.childMultipleBind = [];
    _this.carbBone = NaN;
    _this.repeatBracket = {};
    _this.childBridge = [];
    _this.fragmentBracket = {};
    _this.svgXCoord = -1;
    _this.svgYCoord = -1;
    _this.svgShape = "";
    return _this;
  }

  _createClass(Sugar, [{
    key: "changeName",
    value: function changeName(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAnomeric",
    value: function getAnomeric() {
      return this.anomeric;
    }
  }, {
    key: "setAnomeric",
    value: function setAnomeric(anomeric) {
      this.anomeric = anomeric;
      return;
    }
  }, {
    key: "getIsomer",
    value: function getIsomer() {
      return this.isomer;
    }
  }, {
    key: "setIsomer",
    value: function setIsomer(isomer) {
      this.isomer = isomer;
      return;
    }
  }, {
    key: "getRing",
    value: function getRing() {
      return this.ring;
    }
  }, {
    key: "setRing",
    value: function setRing(ring) {
      this.ring = ring;
      return;
    }
  }, {
    key: "changeIsomerShape",
    value: function changeIsomerShape(isomer) {
      this.isomerShape.text = isomer;
    } //ringの変更時、ringShapeの内容を変更する

  }, {
    key: "changeRingSape",
    value: function changeRingSape(ring) {
      this.ringShape.text = ring;
    } //nodeShpaのハイライト

  }, {
    key: "highLight",
    value: function highLight() {
      this.children[0].alpha = 0.5;
      this.children[0].graphics._stroke.style = (0, _getColor.getColor)("red");
      liaise.stage.update();
    } //nodeShpaのオフライト

  }, {
    key: "offLight",
    value: function offLight() {
      this.children[0].alpha = 1.0;
      this.children[0].graphics._stroke.style = (0, _getColor.getColor)("black");
      liaise.stage.update();
    } //nodeがハイライトされているかを判別

  }, {
    key: "checkHighLight",
    value: function checkHighLight() {
      switch (this.children[0].alpha) {
        case 0.5:
          return true;

        default:
          return false;
      }
    } //単糖の座標設定

  }, {
    key: "setCoordinate",
    value: function setCoordinate(x, y) {
      this.xCoord = x;
      this.yCoord = y;
      this.x = x;
      this.y = y;
    }
  }, {
    key: "setGlycan",
    value: function setGlycan(glycan) {
      this.glycan = glycan;
      return;
    }
  }, {
    key: "setChildGlycan",
    value: function setChildGlycan(sugar) {
      sugar.setGlycan(this.glycan);

      if (sugar.hasChildSugars()) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = sugar.getChildSugars()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            if (!sugar.isChildCyclicEmpty()) {
              if (child === sugar.getChildCyclic().getReductionSugar()) {
                continue;
              }
            }

            this.setChildGlycan(child);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return;
      } else {
        return;
      }
    }
  }, {
    key: "getGlycan",
    value: function getGlycan() {
      return this.glycan;
    }
  }, {
    key: "initGlycan",
    value: function initGlycan() {
      this.glycan = new _Glycan.Glycan();
    }
  }, {
    key: "setRepeatBracket",
    value: function setRepeatBracket(repeatBracket) {
      this.repeatBracket = repeatBracket;
      return;
    }
  }, {
    key: "getRepeatBracket",
    value: function getRepeatBracket() {
      return this.repeatBracket;
    }
  }, {
    key: "isRepeatBracketEmpty",
    value: function isRepeatBracketEmpty() {
      return !Object.keys(this.repeatBracket).length;
    }
  }, {
    key: "initRepeatBracket",
    value: function initRepeatBracket() {
      this.repeatBracket = {};
    }
  }, {
    key: "setChildCyclic",
    value: function setChildCyclic(cyclic) {
      this.childCyclic = cyclic;
      return;
    }
  }, {
    key: "getChildCyclic",
    value: function getChildCyclic() {
      return this.childCyclic;
    }
  }, {
    key: "isChildCyclicEmpty",
    value: function isChildCyclicEmpty() {
      return !Object.keys(this.childCyclic).length;
    }
  }, {
    key: "initChildCyclic",
    value: function initChildCyclic() {
      this.childCyclic = {};
    }
  }, {
    key: "setParentCyclic",
    value: function setParentCyclic(cyclic) {
      this.parentCyclic = cyclic;
      return;
    }
  }, {
    key: "getParentCyclic",
    value: function getParentCyclic() {
      return this.parentCyclic;
    }
  }, {
    key: "isParentCyclicEmpty",
    value: function isParentCyclicEmpty() {
      return !Object.keys(this.parentCyclic).length;
    }
  }, {
    key: "initParentCyclic",
    value: function initParentCyclic() {
      this.parentCyclic = {};
    }
  }, {
    key: "setXLayer",
    value: function setXLayer(layer) {
      this.Xlayer = layer;
      return;
    }
  }, {
    key: "getXLayer",
    value: function getXLayer() {
      return this.Xlayer;
    }
  }, {
    key: "setYLayer",
    value: function setYLayer(layer) {
      this.YLayer = layer;
    }
  }, {
    key: "getYLayer",
    value: function getYLayer() {
      return this.YLayer;
    }
  }, {
    key: "setChildModifications",
    value: function setChildModifications(modification) {
      this.childModifications.push(modification);
      return;
    }
  }, {
    key: "getChildModifications",
    value: function getChildModifications() {
      return this.childModifications;
    }
  }, {
    key: "hasChildModificaiton",
    value: function hasChildModificaiton() {
      if (this.childModifications.length === 0) return false;else return true;
    }
  }, {
    key: "setChildMultipleBind",
    value: function setChildMultipleBind(bridge) {
      this.childMultipleBind.push(bridge);
      return;
    }
  }, {
    key: "getChildMultipleBind",
    value: function getChildMultipleBind() {
      return this.childMultipleBind;
    }
  }, {
    key: "hasChildMultipleBind",
    value: function hasChildMultipleBind() {
      if (this.childMultipleBind.length === 0) return false;else return true;
    }
  }, {
    key: "setCarbBone",
    value: function setCarbBone(carbBone) {
      this.carbBone = carbBone;
    }
  }, {
    key: "getCarbBode",
    value: function getCarbBode() {
      return this.carbBone;
    }
  }, {
    key: "setChildBridge",
    value: function setChildBridge(bridge) {
      this.childBridge.push(bridge);
    }
  }, {
    key: "getChildBridge",
    value: function getChildBridge() {
      return this.childBridge;
    }
  }, {
    key: "hasChildBridge",
    value: function hasChildBridge() {
      if (this.childBridge.length !== 0) return true;else return false;
    }
  }, {
    key: "setFragmentBracket",
    value: function setFragmentBracket(fragmentBracket) {
      this.fragmentBracket = fragmentBracket;
    }
  }, {
    key: "getFragmentBracket",
    value: function getFragmentBracket() {
      return this.fragmentBracket;
    }
  }, {
    key: "isFragmentBracketEmpty",
    value: function isFragmentBracketEmpty() {
      return !Object.keys(this.fragmentBracket).length;
    }
  }, {
    key: "setSvgXCoord",
    value: function setSvgXCoord(coord) {
      this.svgXCoord = coord;
    }
  }, {
    key: "getSvgXCoord",
    value: function getSvgXCoord() {
      return this.svgXCoord;
    }
  }, {
    key: "setSvgYCoord",
    value: function setSvgYCoord(coord) {
      this.svgYCoord = coord;
    }
  }, {
    key: "getSvgYCoord",
    value: function getSvgYCoord() {
      return this.svgYCoord;
    }
  }, {
    key: "setSvgShape",
    value: function setSvgShape(svg) {
      this.svgShape = svg;
    }
  }, {
    key: "getSvgShape",
    value: function getSvgShape() {
      return this.svgShape;
    }
  }, {
    key: "addSvgShape",
    value: function addSvgShape(addString) {
      this.svgShape += addString;
    }
  }]);

  return Sugar;
}(_Node2.Node);

exports.Sugar = Sugar;

/***/ }),

/***/ "./js/class/UndefSugar.js":
/*!********************************!*\
  !*** ./js/class/UndefSugar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UndefSugar = undefined;

var _Sugar2 = __webpack_require__(/*! ./Sugar */ "./js/class/Sugar.js");

var _getColor = __webpack_require__(/*! ../data/getColor */ "./js/data/getColor.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UndefSugar =
/*#__PURE__*/
function (_Sugar) {
  _inherits(UndefSugar, _Sugar);

  function UndefSugar(name) {
    _classCallCheck(this, UndefSugar);

    return _possibleConstructorReturn(this, _getPrototypeOf(UndefSugar).call(this, name));
  }

  _createClass(UndefSugar, [{
    key: "setCoordinate",
    value: function setCoordinate(x, y) {
      this.x = x - this.children[1].getMeasuredWidth() / 2;
      this.y = y - this.children[1].getMeasuredHeight() / 2;
      this.xCoord = x;
      this.yCoord = y;
    }
  }]);

  return UndefSugar;
}(_Sugar2.Sugar);

exports.UndefSugar = UndefSugar;

/***/ }),

/***/ "./js/class/VisibleElement.js":
/*!************************************!*\
  !*** ./js/class/VisibleElement.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VisibleElement =
/*#__PURE__*/
function () {
  //オブジェクトのx座標
  //オブジェクトのy座標
  function VisibleElement() {
    _classCallCheck(this, VisibleElement);

    this.xCoord = 0;
    this.yCoord = 0;
  }

  _createClass(VisibleElement, [{
    key: "getXCoord",
    value: function getXCoord() {
      return this.xCoord;
    }
  }, {
    key: "setXCoord",
    value: function setXCoord(xCoord) {
      this.x = xCoord;
      this.xCoord = xCoord;
      return;
    }
  }, {
    key: "getYCoord",
    value: function getYCoord() {
      return this.yCoord;
    }
  }, {
    key: "setYCoord",
    value: function setYCoord(yCoord) {
      this.y = yCoord;
      this.yCoord = yCoord;
      return;
    }
  }]);

  return VisibleElement;
}();

exports.VisibleElement = VisibleElement;

/***/ }),

/***/ "./js/createSVG/createSVGFragmetnBracket.js":
/*!**************************************************!*\
  !*** ./js/createSVG/createSVGFragmetnBracket.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSVGFragmentsBracket = undefined;

var _FragmentBracket = __webpack_require__(/*! ../class/FragmentBracket */ "./js/class/FragmentBracket.js");

var _Sugar = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var _graphicsData = __webpack_require__(/*! ../data/graphicsData */ "./js/data/graphicsData.js");

var _Fragment = __webpack_require__(/*! ../class/Fragment */ "./js/class/Fragment.js");

var createSVGFragmentsBracket = exports.createSVGFragmentsBracket = function createSVGFragmentsBracket(bracket) {
  var nonReductionSguars = [];
  var rootNodes = [];
  var bracketCoordObj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bracket.getChildGlycans()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var fragment = _step.value;
      rootNodes.push(fragment.getRootNode());
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (bracket.isEmptyParentGlycan()) {
    nonReductionSguars = bracket.getParentSugars();
    bracketCoordObj = culcMaxMinCoord(nonReductionSguars, rootNodes);
  } else {
    nonReductionSguars = bracket.getParentGlycanNonReductionSguars();
    bracketCoordObj = culcMaxMinCoord(nonReductionSguars, rootNodes);
  }

  bracket.setSVGShape(createSVG(bracketCoordObj));
};

var createSVG = function createSVG(bracketCoordObj) {
  var SVGShape = "<path d = \"M " + String(bracketCoordObj["top"][0] + _graphicsData.basicData.symbolSize * 1.5) + " " + String(bracketCoordObj["top"][1] - _graphicsData.basicData.symbolSize) + " Q " + String(bracketCoordObj["top"][0]) + " " + String(bracketCoordObj["top"][1] - _graphicsData.basicData.symbolSize) + " " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1] - _graphicsData.basicData.symbolSize) + " Q " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1]) + " " + String(bracketCoordObj["center"][0] - _graphicsData.basicData.symbolDistance / 2) + " " + String(bracketCoordObj["center"][1]) + " Q " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1]) + " " + String(bracketCoordObj["center"][0]) + " " + String(bracketCoordObj["center"][1] + _graphicsData.basicData.symbolDistance / 1.5) + " Q " + String(bracketCoordObj["bottom"][0]) + " " + String(bracketCoordObj["bottom"][1] + _graphicsData.basicData.symbolSize) + " " + String(bracketCoordObj["bottom"][0] + _graphicsData.basicData.symbolSize * 1.5) + " " + String(bracketCoordObj["bottom"][1] + _graphicsData.basicData.symbolSize) + "\" stroke=\"black\" fill=\"none\" stroke-width=\"5\"/>";
  return SVGShape;
};

var culcMaxMinCoord = function culcMaxMinCoord(nonReductionSguars, fragmentRootNodes) {
  var reduc_maxY = 0;
  var reduc_minY = 100;
  var root_maxY = 0;
  var root_minY = 100;
  var topY;
  var bottomY;
  var X;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = nonReductionSguars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var reduct = _step2.value;
      if (reduc_maxY < reduct.getSvgYCoord()) reduc_maxY = reduct.getSvgYCoord();
      if (reduc_minY > reduct.getSvgYCoord()) reduc_minY = reduct.getSvgYCoord();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = fragmentRootNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var fraRoot = _step3.value;
      if (root_maxY < fraRoot.getSvgYCoord()) root_maxY = fraRoot.getSvgYCoord();
      if (root_minY > fraRoot.getSvgYCoord()) root_minY = fraRoot.getSvgYCoord();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (reduc_maxY - reduc_minY > root_maxY - root_minY) {
    topY = reduc_maxY;
    bottomY = reduc_minY;
  } else {
    topY = root_maxY;
    bottomY = root_minY;
  }

  X = nonReductionSguars[0].getSvgXCoord() - fragmentRootNodes[0].getSvgXCoord();
  var centerY = (topY + bottomY) / 2;
  return {
    "top": [X, bottomY - _graphicsData.basicData.symbolSize],
    "bottom": [X, topY + _graphicsData.basicData.symbolSize],
    "center": [X, centerY]
  };
};

/***/ }),

/***/ "./js/createSVG/createSVGMain.js":
/*!***************************************!*\
  !*** ./js/createSVG/createSVGMain.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSVGMain = undefined;

var _Sugar = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var _Glycan = __webpack_require__(/*! ../class/Glycan */ "./js/class/Glycan.js");

var _FragmentBracket = __webpack_require__(/*! ../class/FragmentBracket */ "./js/class/FragmentBracket.js");

var _Fragment = __webpack_require__(/*! ../class/Fragment */ "./js/class/Fragment.js");

var _sortChildSugars = __webpack_require__(/*! ./sortChildSugars */ "./js/createSVG/sortChildSugars.js");

var _setXLayer = __webpack_require__(/*! ./setXLayer */ "./js/createSVG/setXLayer.js");

var _setYLayer = __webpack_require__(/*! ./setYLayer */ "./js/createSVG/setYLayer.js");

var _graphicsData = __webpack_require__(/*! ../data/graphicsData */ "./js/data/graphicsData.js");

var _culcMaxMinLayer = __webpack_require__(/*! ../drawGlycan/culcMaxMinLayer */ "./js/drawGlycan/culcMaxMinLayer.js");

var _culcEachSugarCoordinate = __webpack_require__(/*! ./culcEachSugarCoordinate */ "./js/createSVG/culcEachSugarCoordinate.js");

var _createSVGShape = __webpack_require__(/*! ./createSVGShape */ "./js/createSVG/createSVGShape.js");

var _createSVGFragmetnBracket = __webpack_require__(/*! ./createSVGFragmetnBracket */ "./js/createSVG/createSVGFragmetnBracket.js");

var _Glycobond = __webpack_require__(/*! ../class/Glycobond */ "./js/class/Glycobond.js");

// import { createCyclicBind } from "./createCyclicBind";
var createSVGMain = exports.createSVGMain = function createSVGMain(glycanArray) {
  (0, _sortChildSugars.recurversiveSortChildSugars)(glycanArray[0].getRootNode());
  (0, _setXLayer.setXLayer)(glycanArray);
  var fragmentBrackets = (0, _setYLayer.setYLayer)(glycanArray);
  var normalDistace = _graphicsData.basicData.symbolDistance + _graphicsData.basicData.symbolSize * 2;
  var maxMinLayer = (0, _culcMaxMinLayer.culc_max_min_layer)(glycanArray);
  var viewBox = culcViewBox(maxMinLayer, normalDistace);
  var resultSVGShape = "<?xml version = \"1.0\"?><svg viewbox = \"" + String(viewBox[0]) + " " + String(viewBox[1]) + " " + String(viewBox[2]) + " " + String(viewBox[3]) + "\" xmlns=\"http://www.w3.org/2000/svg\">";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = glycanArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var glycan = _step.value;

      if (glycan instanceof _Fragment.Fragment) {
        (0, _culcEachSugarCoordinate.culc_each_sugar_coordinate)(glycan.getRootNode().getParentSugars()[0], maxMinLayer, normalDistace);
      } else {
        (0, _culcEachSugarCoordinate.culc_each_sugar_coordinate)(glycan.getRootNode(), maxMinLayer, normalDistace);
      }

      recuversiveCreateSVgShapeImport(glycan.getRootNode());
      resultSVGShape = bindLineSting(glycan.getRootNode(), resultSVGShape);
      resultSVGShape = bindSvgString(glycan.getRootNode(), resultSVGShape);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = fragmentBrackets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var bracket = _step2.value;
      (0, _createSVGFragmetnBracket.createSVGFragmentsBracket)(bracket);
      resultSVGShape += bracket.getSVGShape();
    } // resultSVGShape += "</svg>";
    // console.log(resultSVGShape);
    // downloadData(resultSVGShape);

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  resultSVGShape += "</svg>";
  return resultSVGShape;
};

var culcViewBox = function culcViewBox(maxMinLayer, normalDistance) {
  var viewBox = [0, 0]; //[x, y, 横の長さ, 縦の長さ]

  viewBox.push((maxMinLayer[0] - maxMinLayer[1] + 1) * normalDistance);
  viewBox.push((maxMinLayer[2] - maxMinLayer[3] + 1) * normalDistance);
  return viewBox;
};

var recuversiveCreateSVgShapeImport = function recuversiveCreateSVgShapeImport(sugar) {
  (0, _createSVGShape.createSVGShape)(sugar);

  if (sugar.isChildCyclicEmpty()) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = sugar.getChildSugars()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var child = _step3.value;
        recuversiveCreateSVgShapeImport(child);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  } else {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = sugar.getChildSugars()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _child = _step4.value;

        if (_child === sugar.getChildCyclic().getReductionSugar()) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _child.getParentBond()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var parentBind = _step5.value;

              if (parentBind.getParentSugar() === sugar) {// createCyclicBind(parentBind, sugar, child);
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          continue;
        }

        recuversiveCreateSVgShapeImport(_child);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }
};

var bindLineSting = function bindLineSting(sugar, resultShape) {
  if (sugar.hasParentBond()) {
    resultShape += sugar.getParentBond()[0].getSvgLineShape() + sugar.getParentBond()[0].getSvgTextShape();
  }

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = sugar.getChildSugars()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var child = _step6.value;
      resultShape = bindLineSting(child, resultShape);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return resultShape;
};

var bindSvgString = function bindSvgString(sugar, resultShape) {
  resultShape += sugar.getSvgShape();
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = sugar.getChildSugars()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var child = _step7.value;
      resultShape = bindSvgString(child, resultShape);
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  return resultShape;
};

/***/ }),

/***/ "./js/createSVG/createSVGShape.js":
/*!****************************************!*\
  !*** ./js/createSVG/createSVGShape.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSVGShape = undefined;

var _Sugar = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var _nodeModeSearch = __webpack_require__(/*! ../nodeModeSearch */ "./js/nodeModeSearch.js");

var _graphicsData = __webpack_require__(/*! ../data/graphicsData */ "./js/data/graphicsData.js");

var _nodeModeType = __webpack_require__(/*! ../nodeModeType */ "./js/nodeModeType.js");

var _getColor = __webpack_require__(/*! ../data/getColor */ "./js/data/getColor.js");

var _Glycobond = __webpack_require__(/*! ../class/Glycobond */ "./js/class/Glycobond.js");

var createSVGShape = exports.createSVGShape = function createSVGShape(sugar) {
  var shapeSymbol = (0, _nodeModeSearch.nodeModeSearch)(sugar.getName());
  var shapeType = (0, _nodeModeSearch.nodeType)(shapeSymbol);
  sugar.setSvgShape(createSVGNodeSymbol(sugar, shapeType, shapeSymbol));

  if (sugar.hasParentBond()) {
    if (!sugar.getParentBond()[0].isEmptyParentSugar()) {
      createParentBonSVGLineText(sugar.getParentBond()[0]);
    }
  }
};

var createParentBonSVGLineText = function createParentBonSVGLineText(bind) {
  var anomeric = "?";
  var parentPosition = "?";
  var parentX = bind.getParentSugar().getSvgXCoord();
  var parentY = bind.getParentSugar().getSvgYCoord();
  var childX = bind.getChildSugar().getSvgXCoord();
  var childY = bind.getChildSugar().getSvgYCoord();
  if (bind.hasChildAnomeric()) anomeric = bind.getChildAnomeric();

  if (bind.hasSvgParentPosition()) {
    parentPosition = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = bind.getSvgParentPosition()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var parentPositionNum = _step.value;
        parentPosition += String(parentPositionNum);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var lineText = "<line stroke =\"black\" x1 = \"" + parentX + "\" y1 = \"" + parentY + "\" x2 = \"" + childX + "\" y2 = \"" + childY + "\" nodeIndex=\"1\"></line>";
  var text = "";

  if (parentY > childY) {
    text = "<text text-anchor = \"middle\" dominant-baseline = \"central\" x = \"" + ((parentX + childX) / 2 + _graphicsData.basicData.svgLinkageUp) + "\" y = \"" + ((parentY + childY) / 2 + _graphicsData.basicData.svgLinkagedown) + "\" >" + anomeric + parentPosition + "</text>";
  } else if (parentY < childY) {
    text = "<text text-anchor = \"middle\" dominant-baseline = \"central\" x = \"" + ((parentX + childX) / 2 + _graphicsData.basicData.svgLinkageUp) + "\" y = \"" + ((parentY + childY) / 2 + _graphicsData.basicData.svgLinkageUp) + "\" >" + anomeric + parentPosition + "</text>";
  } else {
    text = "<text text-anchor = \"middle\" dominant-baseline = \"central\" x = \"" + (parentX + childX) / 2 + "\" y = \"" + ((parentY + childY) / 2 + _graphicsData.basicData.svgLinkagedown) + "\" >" + anomeric + parentPosition + "</text>";
  }

  bind.setSvgLineShape(lineText);
  bind.setSvgTextShape(text);
};

var createSVGNodeSymbol = function createSVGNodeSymbol(sugar, shapeType, shapeSymbol) {
  var color = (0, _nodeModeSearch.getSymbolColor)(shapeSymbol);
  var subColor = (0, _getColor.getColor)("white");
  var exColorShape = exColor(shapeSymbol);

  if (exColorShape) {
    var A = color;
    color = subColor;
    subColor = A;
  }

  var scale = _graphicsData.basicData.symbolSize;
  var width_size = 0.1;
  var x = sugar.getSvgXCoord();
  var y = sugar.getSvgYCoord();

  if (shapeType === _nodeModeType.nodeModeType.HEXOSE) {
    return "<circle cx = \"" + String(x) + " \" cy = \" " + String(y) + "\" r = \" " + String(scale) + " \" stroke-width = \" " + String(0.1 * scale) + " \" stroke = \"black\" fill = \" " + color + " \"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.HEXNAC) {
    return "<rect x = \"" + String(x - scale) + "\" y = \"" + String(y - scale) + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(2 * scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.HEXOSAMINE) {
    return "<rect x = \"" + String(x - scale) + "\" y = \"" + String(y - scale) + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(2 * scale) + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + (0, _getColor.getColor)("white") + "\"/>" + "<polygon points = \"" + String(x - scale) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(width_size * scale) + "\" fill = \"" + color + "\"/>" + "<rect x = \"" + String(x - scale) + "\" y = \"" + String(y - scale) + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(2 * scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.HEXURONATE) {
    return "<polygon points =\"" + String(x) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + subColor + "\"/>" + "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + color + "\"/>" + "<polygon points = \"" + String(x) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y) + "," + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>" + "<polygon points = \"" + String(x - scale) + "," + String(y) + "," + String(x + scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.DEOXYHEXOSE) {
    return "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.DEOXYHEXNAC) {
    return "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"0\" fill = \"" + (0, _getColor.getColor)("white") + "\"/>" + "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x + scale) + "," + String(y + scale) + "," + String(x) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(width_size * scale) + "\" fill = \"" + color + "\"/>" + "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y + scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"none\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.DI_DEOXYHEXOSE) {
    return "<rect x = \"" + String(x - scale) + "\" y = \"" + String(y - scale / 2) + "\" width = \"" + String(2 * scale) + "\" height = \"" + String(scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.PENTOSE) {
    return "<polygon points = \"" + String(x) + "," + String(y - 0.7 * scale * 2) + "," + String(x - 0.205 * scale * 2) + "," + String(y - 0.283 * scale * 2) + "," + String(x - 0.665 * scale * 2) + "," + String(y - 0.216 * scale * 2) + "," + String(x - 0.332 * scale * 2) + "," + String(y + 0.108 * scale * 2) + "," + String(x - 0.411 * scale * 2) + "," + String(y + 0.566 * scale * 2) + "," + String(x) + "," + String(y + 0.35 * scale * 2) + "," + String(x + 0.411 * scale * 2) + "," + String(y + 0.566 * scale * 2) + "," + String(x + 0.332 * scale * 2) + "," + String(y + 0.108 * scale * 2) + "," + String(x + 0.665 * scale * 2) + "," + String(y - 0.216 * scale * 2) + "," + String(x + 0.205 * scale * 2) + "," + String(y - 0.283 * scale * 2) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\" />";
  } else if (shapeType === _nodeModeType.nodeModeType.DEOXYNONULOSONATE) {
    return "<polygon points = \"" + String(x) + "," + String(y + scale) + "," + String(x + scale) + "," + String(y) + "," + String(x) + "," + String(y - scale) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.DI_DEOXYNONULOSONATE) {
    return "<polygon points = \"" + String(x) + "," + String(y + 0.5 * scale) + "," + String(x + scale) + "," + String(y) + "," + String(x) + "," + String(y - 0.5 * scale) + "," + String(x - scale) + "," + String(y) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.UNKNOWN) {
    return "<polygon points = \"" + String(x - 0.8 * scale) + "," + String(y) + "," + String(x - 0.6 * scale) + "," + String(y - 0.5 * scale) + "," + String(x + 0.6 * scale) + "," + String(y - 0.5 * scale) + "," + String(x + 0.8 * scale) + "," + String(y) + "," + String(x + 0.6 * scale) + "," + String(y + 0.5 * scale) + "," + String(x - 0.6 * scale) + "," + String(y + 0.5 * scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
  } else if (shapeType === _nodeModeType.nodeModeType.ASSIGNED) {
    return "<polygon points = \"" + String(x) + "," + String(y - scale) + "," + String(x - 0.75 * scale) + "," + String(y - 0.25 * scale) + "," + String(x - 0.5 * scale) + "," + String(y + 0.75 * scale) + "," + String(x + 0.5 * scale) + "," + String(y + 0.75 * scale) + "," + String(x + 0.75 * scale) + "," + String(y - 0.25 * scale) + "\" stroke = \"black\" stroke-width = \"" + String(0.1 * scale) + "\" fill = \"" + color + "\"/>";
  } else {
    return "<text text-anchor = \"middle\" dominant-baseline = \"central\" x = \"" + String(x / 2) + "\" y = \"" + String(y / 2 + _graphicsData.basicData.svgLinkagedown) + "\" >" + sugar.getName() + "</text>";
  }
};

var exColor = function exColor(shapeSymbol) {
  switch (shapeSymbol) {
    case _nodeModeType.nodeModeType.ALTA:
    case _nodeModeType.nodeModeType.IDOA:
      return true;

    default:
      return false;
  }
};

/***/ }),

/***/ "./js/createSVG/culcEachSugarCoordinate.js":
/*!*************************************************!*\
  !*** ./js/createSVG/culcEachSugarCoordinate.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.culc_each_sugar_coordinate = undefined;

var _Sugar = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var _getRelativeCoordinate = __webpack_require__(/*! ../getRelativeCoordinate */ "./js/getRelativeCoordinate.js");

var _graphicsData = __webpack_require__(/*! ../data/graphicsData */ "./js/data/graphicsData.js");

var culc_each_sugar_coordinate = exports.culc_each_sugar_coordinate = function culc_each_sugar_coordinate(sugar, maxMinLayer, normalDistance) {
  var XLayer = sugar.getXLayer();
  var YLayer = -1 * sugar.getYLayer();
  var svgCoord = (0, _getRelativeCoordinate.getRelativeCoordinate)((maxMinLayer[0] - XLayer) * normalDistance + _graphicsData.basicData.symbolSize, (maxMinLayer[2] - YLayer) * normalDistance + _graphicsData.basicData.symbolSize);
  sugar.setSvgXCoord(svgCoord[0]);
  sugar.setSvgYCoord(svgCoord[1]);

  if (sugar.isChildCyclicEmpty()) {
    if (sugar.hasChildSugars()) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sugar.getChildSugars()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;
          culc_each_sugar_coordinate(child, maxMinLayer, normalDistance);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  } else {
    if (sugar.hasChildSugars()) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = sugar.getChildSugars()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _child = _step2.value;

          if (_child === sugar.getChildCyclic().getReductionSugar()) {
            continue;
          }

          culc_each_sugar_coordinate(_child, maxMinLayer, normalDistance);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }
};

/***/ }),

/***/ "./js/createSVG/setXLayer.js":
/*!***********************************!*\
  !*** ./js/createSVG/setXLayer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setXLayer = undefined;

var _Sugar = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var _FragmentBracket = __webpack_require__(/*! ../class/FragmentBracket */ "./js/class/FragmentBracket.js");

var _Fragment = __webpack_require__(/*! ../class/Fragment */ "./js/class/Fragment.js");

var _Glycan = __webpack_require__(/*! ../class/Glycan */ "./js/class/Glycan.js");

var setXLayer = exports.setXLayer = function setXLayer(glycanArray) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = glycanArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var glycan = _step.value;
      recuversiveSetXLayer(glycan.getRootNode(), 0);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = glycanArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _glycan = _step2.value;

      if (_glycan instanceof _Fragment.Fragment) {
        var fragmentBracket = _glycan.getParentFragmentBracket();

        if (fragmentBracket.isEmptyParentGlycan()) {
          var parentSugars = fragmentBracket.getParentSugars();
          var maxX = parentSugars[0].getXLayer();
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = parentSugars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var sugar = _step3.value;

              if (maxX < sugar.getXLayer()) {
                maxX = sugar.getXLayer();
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          _glycan.culcPlucXLayer(maxX);
        } else {
          _glycan.culcPlucXLayer(fragmentBracket.getParentGlycan().getMaxXLayer());
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

var recuversiveSetXLayer = function recuversiveSetXLayer(sugar, layer) {
  sugar.setXLayer(layer);
  sugar.getGlycan().setMaxXLayer(layer);
  layer += 1;

  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = sugar.getChildSugars()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var child = _step4.value;
          recuversiveSetXLayer(child, layer);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = sugar.getChildSugars()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _child = _step5.value;
          if (sugar.getChildCyclic().getReductionSugar() === _child) continue;else recuversiveSetXLayer(_child, layer);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  } else {
    return;
  }
};

/***/ }),

/***/ "./js/createSVG/setYLayer.js":
/*!***********************************!*\
  !*** ./js/createSVG/setYLayer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setYLayer = undefined;

var _Glycan = __webpack_require__(/*! ../class/Glycan */ "./js/class/Glycan.js");

var _Sugar2 = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var _Fragment = __webpack_require__(/*! ../class/Fragment */ "./js/class/Fragment.js");

var _FragmentBracket = __webpack_require__(/*! ../class/FragmentBracket */ "./js/class/FragmentBracket.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var vSugar =
/*#__PURE__*/
function (_Sugar) {
  _inherits(vSugar, _Sugar);

  function vSugar(props) {
    _classCallCheck(this, vSugar);

    return _possibleConstructorReturn(this, _getPrototypeOf(vSugar).call(this, props));
  }

  return vSugar;
}(_Sugar2.Sugar);

var setYLayer = exports.setYLayer = function setYLayer(glycanArray) {
  var fragmentBrackets = [];
  var mainGlycan = new _Glycan.Glycan();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = glycanArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var glycan = _step.value;
      if (glycan instanceof _Fragment.Fragment) continue;else {
        fragmentBrackets = serchFragmentBracket(glycan, fragmentBrackets);
        mainGlycan = glycan;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  for (var _i = 0; _i < fragmentBrackets.length; _i++) {
    var bracket = fragmentBrackets[_i];
    var vNode = new vSugar("");
    var fragments = bracket.getChildGlycans();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = fragments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var fragment = _step2.value;
        vNode.setChildSugars(fragment.getRootNode());
        fragment.getRootNode().setParentSugars(vNode);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    setEndFragmentYLayer(vNode, 0);
  }

  setEndFragmentYLayer(mainGlycan.getRootNode(), 0);
  fragmentBrackets.reverse();

  for (var _i2 = 0; _i2 < fragmentBrackets.length; _i2++) {
    var _bracket = fragmentBrackets[_i2];

    if (_bracket.isEmptyParentGlycan()) {
      var parentSugars = _bracket.getParentSugars();

      var minY = 100;
      var maxY = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = parentSugars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var parentSugar = _step3.value;
          if (minY > parentSugar.getYLayer()) minY = parentSugar.getYLayer();
          if (maxY < parentSugar.getYLayer()) maxY = parentSugar.getYLayer();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _vNode = _bracket.getChildGlycans()[0].getRootNode().getParentSugars()[0];

      var middleLayer = Math.floor((maxY + minY) / 2);

      _bracket.getChildGlycans()[0].culcPlucYLayer(_vNode.getYLayer() - middleLayer + 1);
    } else {
      var parentGlycan = _bracket.getParentGlycan();

      parentGlycan.recversiveCulcMaxMinYLayer(parentGlycan.getRootNode());

      var _vNode2 = _bracket.getChildGlycans()[0].getRootNode().getParentSugars()[0];

      var _middleLayer = Math.floor((parentGlycan.maxXLayer + parentGlycan.minYLayer) / 2);

      _bracket.getChildGlycans()[0].culcPlucYLayer(_vNode2.getYLayer() - _middleLayer + 1);
    }
  }

  return fragmentBrackets.reverse();
};

var serchFragmentBracket = function serchFragmentBracket(glycan, fragmentBrackets) {
  if (glycan.isFragmentBracketEmpty()) {
    var nonReductionSugars = [];
    nonReductionSugars = recuversiveNonReductionSugar(glycan.getRootNode(), nonReductionSugars);
    var counter = 0;

    for (var _i3 = 0; _i3 < nonReductionSugars.length; _i3++) {
      var reductionSugar = nonReductionSugars[_i3];

      if (reductionSugar.isFragmentBracketEmpty()) {
        counter += 1;
      } else {
        counter += 1;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = reductionSugar.getFragmentBracket().getChildGlycans()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var fragment = _step4.value;
            fragmentBrackets = serchFragmentBracket(fragment, fragmentBrackets);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        var same_FLAG = false;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = fragmentBrackets[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var fragmentBracket = _step5.value;

            if (fragmentBracket === glycan.getFragmentBracket()) {
              same_FLAG = true;
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        if (!same_FLAG) {
          fragmentBrackets.push(glycan.getFragmentBracket());
        }
      }
    }

    if (counter === nonReductionSugars.length) {
      return fragmentBrackets;
    }
  } else {
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = fragmentBrackets[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _fragmentBracket = _step6.value;

        if (_fragmentBracket === glycan.getFragmentBracket()) {
          return fragmentBrackets;
        }
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = glycan.getFragmentBracket().getChildGlycans()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var _fragment = _step7.value;
        fragmentBrackets = serchFragmentBracket(_fragment, fragmentBrackets);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
          _iterator7.return();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    var _same_FLAG = false;
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = fragmentBrackets[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _fragmentBracket2 = _step8.value;

        if (_fragmentBracket2 === glycan.getFragmentBracket()) {
          _same_FLAG = true;
        }
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
          _iterator8.return();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }

    if (!_same_FLAG) {
      fragmentBrackets.push(glycan.getFragmentBracket());
    }

    return fragmentBrackets;
  }

  return fragmentBrackets;
};

var recuversiveNonReductionSugar = function recuversiveNonReductionSugar(sugar, nonReductionSugars) {
  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = sugar.getChildSugars()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var child = _step9.value;
          nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    } else {
      if (sugar.getChildSugars().length === 1) {
        nonReductionSugars.push(sugar);
      } else {
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = sugar.getChildSugars()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _child = _step10.value;
            if (_child === sugar.getChildCyclic().getReductionSugar()) continue;else {
              nonReductionSugars = recuversiveNonReductionSugar(_child, nonReductionSugars);
            }
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      }
    }
  } else {
    nonReductionSugars.push(sugar);
    return nonReductionSugars;
  }

  return nonReductionSugars;
}; //普通の糖鎖構造のYLayerのソート


var setEndFragmentYLayer = function setEndFragmentYLayer(sugar, most_layer) {
  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      switch (sugar.getChildSugars().length % 2) {
        case 0:
          {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = sugar.getChildSugars()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var child = _step11.value;
                setEndFragmentYLayer(child, most_layer);

                if (child === sugar.getChildSugars()[Math.floor(sugar.getChildSugars().length / 2) - 1]) {
                  most_layer += 2;
                } else {
                  most_layer += 1;
                }
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                  _iterator11.return();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }

            sugar.setYLayer(sugar.getChildSugars()[sugar.getChildSugars().length / 2].getYLayer() - 1);
            break;
          }

        case 1:
          {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = sugar.getChildSugars()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var _child2 = _step12.value;
                setEndFragmentYLayer(_child2, most_layer);
                most_layer += 1;
              }
            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                  _iterator12.return();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }

            sugar.setYLayer(sugar.getChildSugars()[Math.floor(sugar.getChildSugars().length / 2)].getYLayer());
            break;
          }
      }
    } else {
      var cyclicSugar = sugar.getChildCyclic().getReductionSugar();
      var counter = 0;
      var maxY = 0;
      var minY = 100;

      switch ((sugar.getChildSugars().length - 1) % 2) {
        case 0:
          {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = sugar.getChildSugars()[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _child3 = _step13.value;
                if (_child3 === cyclicSugar) continue;
                if (maxY < most_layer) maxY = most_layer;
                if (minY > most_layer) minY = most_layer;
                setEndFragmentYLayer(_child3, most_layer);
                counter += 1;

                if (counter === (sugar.getChildSugars().length - 1) / 2) {
                  most_layer += 2;
                } else {
                  most_layer += 1;
                }
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                  _iterator13.return();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }

            sugar.setYLayer((maxY + minY) / 2);
            break;
          }

        case 1:
          {
            var _maxY = 0;
            var _minY = 100;
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = sugar.getChildSugars()[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var _child4 = _step14.value;
                if (_child4 === cyclicSugar) continue;
                if (_maxY < most_layer) _maxY = most_layer;
                if (_minY > most_layer) _minY = most_layer;
                setEndFragmentYLayer(_child4, most_layer);
                most_layer += 1;
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                  _iterator14.return();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }

            sugar.setYLayer((_maxY + _minY) / 2);
            break;
          }
      }

      return most_layer;
    }
  } else {
    sugar.setYLayer(most_layer);
    return most_layer;
  }

  return most_layer;
};

/***/ }),

/***/ "./js/createSVG/sortChildSugars.js":
/*!*****************************************!*\
  !*** ./js/createSVG/sortChildSugars.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recurversiveSortChildSugars = undefined;

var _Sugar = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var _FragmentBracket = __webpack_require__(/*! ../class/FragmentBracket */ "./js/class/FragmentBracket.js");

var _Fragment = __webpack_require__(/*! ../class/Fragment */ "./js/class/Fragment.js");

//全ての単糖のchildSugarsのソート,
//parentPositionの大きい順にソート
var recurversiveSortChildSugars = exports.recurversiveSortChildSugars = function recurversiveSortChildSugars(sugar) {
  if (sugar.getGlycan().isFragmentBracketEmpty()) {
    if (sugar.hasChildSugars()) {
      if (sugar.isFragmentBracketEmpty()) {
        if (sugar.isChildCyclicEmpty()) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = sugar.getChildSugars()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var child = _step.value;
              recurversiveSortChildSugars(child);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          sugar.sortChildSugar();
        } else {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = sugar.getChildSugars()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _child = _step2.value;
              if (sugar.getChildCyclic().getReductionSugar() === _child) continue;else recurversiveSortChildSugars(_child);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          sugar.sortChildSugar();
        }
      } else {
        var fragmentBracket = sugar.getFragmentBracket();
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = fragmentBracket.getChildGlycans()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var fragment = _step3.value;
            recurversiveSortChildSugars(fragment.getRootNode());
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } else {
      if (sugar.isFragmentBracketEmpty()) {
        return;
      } else {
        var _fragmentBracket = sugar.getFragmentBracket();

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _fragmentBracket.getChildGlycans()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _fragment = _step4.value;
            recurversiveSortChildSugars(_fragment.getRootNode());
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }
  } else {
    var _fragmentBracket2 = sugar.getGlycan().getFragmentBracket();

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = _fragmentBracket2.getChildGlycans()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _fragment2 = _step5.value;
        recurversiveSortChildSugars(_fragment2.getRootNode());
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  }
};

/***/ }),

/***/ "./js/data/JSONKeys.js":
/*!*****************************!*\
  !*** ./js/data/JSONKeys.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var JSONKeys = exports.JSONKeys = {
  Fragments: "Fragments",
  Repeat: "Repeat",
  Edges: "Edges",
  Bridge: "Bridge",
  Monosaccharides: "Monosaccharides",
  Modifications: "Modifications",
  TrivialName: "TrivialName",
  Substituents: "Substituents",
  Configuration: "Configuration",
  SuperClass: "SuperClass",
  RingSize: "RingSize",
  AnomState: "AnomState",
  AnomPosition: "AnomPosition",
  Notation: "Notation",
  PositionOne: "PositionOne",
  Acceptor: "Acceptor",
  Donor: "Donor",
  Edge: "Edge",
  Position: "Position",
  Probability: "Probability",
  High: "High",
  Low: "Low",
  LinkageType: "LinkageType",
  Min: "Min",
  Max: "Max",
  Start: "Start",
  End: "End",
  Status: "Status"
};

/***/ }),

/***/ "./js/data/SNFGGlycanTable.js":
/*!************************************!*\
  !*** ./js/data/SNFGGlycanTable.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SNFGSymbolGlycan = exports.SNFGSymbolGlycan = {
  "4eLeg": {
    shortName: "4-Epilegionaminic acid",
    systematicNmae: "5,7-Diamino-3,5,7,9-tetradeoxy-D-glycero-D-talo-non-2-ulopyranosonic acid",
    isomer: "DD",
    ring: "pyranose",
    carbBone: 9
  },
  "6dAlt": {
    shortName: "6-Deoxy-L-altrose",
    systematicNmae: "6-Deoxy-L-altropyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "6dAltNAc": {
    shortName: "N-Acetyl-6-deoxy-L-altrosamine",
    systematicNmae: "2-Acetamido-2,6-dideoxy-L-altropyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "6dGul": {
    shortName: "6-Deoxy-D-gulose",
    systematicNmae: "6-Deoxy-D-gulopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "6dTal": {
    shortName: "6-Deoxy-D-talose",
    systematicNmae: "6-Deoxy-D-talopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "6dTalNAc": {
    shortName: "N-Acetyl-6-deoxy-D-talosamine",
    systematicNmae: "2-Acetamido-2,6-dideoxy-D-talopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Abe": {
    shortName: "Abequose",
    systematicNmae: "3,6-Dideoxy-D-xylo-hexopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Aci": {
    shortName: "Acinetaminic acid",
    systematicNmae: "5,7-Diamino-3,5,7,9-tetradeoxy-L-glycero-L-altro-non-2-ulopyranosonic acid",
    isomer: "LL",
    ring: "pyranose",
    carbBone: 9
  },
  "All": {
    shortName: "D-Allose",
    systematicNmae: "D-Allopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "AllA": {
    shortName: "D-Alluronic acid",
    systematicNmae: "D-Allopyranuronic acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "AllN": {
    shortName: "D-Allosamine",
    systematicNmae: "2-Amino-2-deoxy-D-allopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "AllNAc": {
    shortName: "N-Acetyl-D-allosamine",
    systematicNmae: "2-Acetamido-2-deoxy-D-allopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Alt": {
    shortName: "L-Altrose",
    systematicNmae: "L-Altropyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "AltA": {
    shortName: "L-Altruronic acid",
    systematicNmae: "L-Altropyranuronic acid",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "AltN": {
    shortName: "L-Altrosamine",
    systematicNmae: "2-Amino-2-deoxy-L-altropyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "AltNAc": {
    shortName: "N-Acetyl-L-altrosamine",
    systematicNmae: "2-Acetamido-2-deoxy-L-altropyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "Api": {
    shortName: "L-Apiose",
    systematicNmae: "3-C-(Hydroxymethyl)-L-erythro-tetrofuranose",
    isomer: "L",
    ring: "furanose",
    carbBone: 5
  },
  "Ara": {
    shortName: "L-Arabinose",
    systematicNmae: "L-Arabinopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 5
  },
  "Bac": {
    shortName: "Bacillosamine",
    systematicNmae: "2,4-Diamino-2,4,6-trideoxy-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Col": {
    shortName: "Colitose",
    systematicNmae: "3,6-Dideoxy-L-xylo-hexopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "DDmanHep": {
    shortName: "D-glycero-D-manno-Heptose",
    systematicNmae: "D-glycero-D-manno-Heptopyranose",
    isomer: "DD",
    ring: "pyranose",
    carbBone: 7
  },
  "Dha": {
    shortName: "3-Deoxy-D-lyxo-heptulosaric acid",
    systematicNmae: "3-Deoxy-D-lyxo-hept-2-ulopyranosaric acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 7
  },
  "Dig": {
    shortName: "D-Digitoxose",
    systematicNmae: "2,6-Dideoxy-D-ribo-hexopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Fru": {
    shortName: "D-Fructose",
    systematicNmae: "D-arabino-Hex-2-ulopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Fuc": {
    shortName: "L-Fucose",
    systematicNmae: "6-Deoxy-L-galactopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "FucNAc": {
    shortName: "N-Acetyl-L-fucosamine",
    systematicNmae: "2-Acetamido-2,6-dideoxy-L-galactopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "Gal": {
    shortName: "D-Galactose",
    systematicNmae: "D-Galactopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GalA": {
    shortName: "D-Galacturonic acid",
    systematicNmae: "D-Galactopyranuronic acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GalN": {
    shortName: "D-Galactosamine",
    systematicNmae: "2-Amino-2-deoxy-D-galactopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GalNAc": {
    shortName: "N-Acetyl-D-galactosamine",
    systematicNmae: "2-Acetamido-2-deoxy-D-galactopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Glc": {
    shortName: "D-Glucose",
    systematicNmae: "D-Glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GlcA": {
    shortName: "D-Glucuronic acid",
    systematicNmae: "D-Glucopyranuronic acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GlcN": {
    shortName: "D-Glucosamine",
    systematicNmae: "2-Amino-2-deoxy-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GlcNAc": {
    shortName: "N-Acetyl-D-glucosamine",
    systematicNmae: "2-Acetamido-2-deoxy-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Gul": {
    shortName: "D-Gulose",
    systematicNmae: "D-Gulopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GulA": {
    shortName: "D-Guluronic acid",
    systematicNmae: "D-Gulopyranuronic acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GulN": {
    shortName: "D-Gulosamine",
    systematicNmae: "2-Amino-2-deoxy-D-gulopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "GulNAc": {
    shortName: "N-Acetyl-D-gulosamine",
    systematicNmae: "2-Acetamido-2-deoxy-D-gulopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Ido": {
    shortName: "L-Idose",
    systematicNmae: "L-Idopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "IdoA": {
    shortName: "L-Iduronic acid",
    systematicNmae: "L-Idopyranuronic acid",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "IdoN": {
    shortName: "L-Idosamine",
    systematicNmae: "2-Amino-2-deoxy-L-idopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "IdoNAc": {
    shortName: "N-Acetyl-L-idosamine",
    systematicNmae: "2-Acetamido-2-deoxy-L-idopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "Kdn": {
    shortName: "3-Deoxy-D-glycero-D-galacto-nonulosonic acid",
    systematicNmae: "3-Deoxy-D-glycero-D-galacto-non-2-ulopyranosonic acid",
    isomer: "DD",
    ring: "pyranose",
    carbBone: 9
  },
  "Kdo": {
    shortName: "3-Deoxy-D-manno-octulosonic acid",
    systematicNmae: "3-Deoxy-D-manno-oct-2-ulopyranosonic acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 8
  },
  "Leg": {
    shortName: "Legionaminic acid",
    systematicNmae: "5,7-Diamino-3,5,7,9-tetradeoxy-D-glycero-D-galacto-non-2-ulopyranosonic acid",
    isomer: "DD",
    ring: "pyranose",
    carbBone: 9
  },
  "LDmanHep": {
    shortName: "L-glycero-D-manno-Heptose",
    systematicNmae: "L-glycero-D-manno-Heptopyranose",
    isomer: "LD",
    ring: "pyranose",
    carbBone: 7
  },
  "Lyx": {
    shortName: "D-Lyxose",
    systematicNmae: "D-Lyxopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 5
  },
  "Man": {
    shortName: "D-Mannose",
    systematicNmae: "D-Mannopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "ManA": {
    shortName: "D-Mannuronic acid",
    systematicNmae: "D-Mannopyranuronic acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "ManN": {
    shortName: "D-Mannosamine",
    systematicNmae: "2-Amino-2-deoxy-D-mannopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "ManNAc": {
    shortName: "N-Acetyl-D-mannosamine",
    systematicNmae: "2-Acetamido-2-deoxy-D-mannopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Mur": {
    shortName: "Muramic acid",
    systematicNmae: "2-Amino-3-O-[(R)-1-carboxyethyl]-2-deoxy-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "MurNAc": {
    shortName: "N-Acetylmuramic acid",
    systematicNmae: "2-Acetamido-3-O-[(R)-1-carboxyethyl]-2-deoxy-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "MurNGc": {
    shortName: "N-Glycolylmuramic acid",
    systematicNmae: "3-O-[(R)-1-Carboxyethyl]-2-deoxy-2-glycolamido-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Neu": {
    shortName: "Neuraminic acid",
    systematicNmae: "5-Amino-3,5-dideoxy-D-glycero-D-galacto-non-2-ulopyranosonic acid",
    isomer: "DD",
    ring: "pyranose",
    carbBone: 5
  },
  "Neu5Ac": {
    shortName: "N-Acetylneuraminic acid",
    systematicNmae: "5-Acetamido-3,5-dideoxy-D-glycero-D-galacto-non-2-ulopyranosonic acid",
    isomer: "DD",
    ring: "pyranose",
    carbBone: 5
  },
  "Neu5Gc": {
    shortName: "N-Glycolylneuraminic acid",
    systematicNmae: "3,5-Dideoxy-5-glycolamido-D-glycero-D-galacto-non-2-ulopyranosonic acid",
    isomer: "DD",
    ring: "pyranose",
    carbBone: 5
  },
  "Oli": {
    shortName: "Olivose",
    systematicNmae: "2,6-Dideoxy-D-arabino-hexopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Par": {
    shortName: "Paratose",
    systematicNmae: "3,6-Dideoxy-D-ribo-hexopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Pse": {
    shortName: "Pseudaminic acid",
    systematicNmae: "5,7-Diamino-3,5,7,9-tetradeoxy-L-glycero-L-manno-non-2-ulopyranosonic acid",
    isomer: "LL",
    ring: "pyranose",
    carbBone: 9
  },
  "Psi": {
    shortName: "D-Psicose",
    systematicNmae: "D-ribo-Hex-2-ulopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Qui": {
    shortName: "D-Quinovose",
    systematicNmae: "6-Deoxy-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "QuiNAc": {
    shortName: "N-Acetyl-D-quinovosamine",
    systematicNmae: "2-Acetamido-2,6-dideoxy-D-glucopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Rha": {
    shortName: "L-Rhamnose",
    systematicNmae: "6-Deoxy-L-mannopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "RhaNAc": {
    shortName: "N-Acetyl-L-rhamnosamine",
    systematicNmae: "2-Acetamido-2,6-dideoxy-L-mannopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "Rib": {
    shortName: "D-Ribose",
    systematicNmae: "D-Ribopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 5
  },
  "Sia": {
    shortName: "Sialic acid",
    systematicNmae: "Sialic acid residue of unspecified type",
    isomer: "D",
    ring: "undefined",
    carbBone: NaN
  },
  "Sor": {
    shortName: "L-Sorbose",
    systematicNmae: "L-xylo-Hex-2-ulopyranose",
    isomer: "L",
    ring: "pyranose",
    carbBone: 6
  },
  "Tag": {
    shortName: "D-Tagatose",
    systematicNmae: "D-lyxo-Hex-2-ulopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Tal": {
    shortName: "D-Talose",
    systematicNmae: "D-Talopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "TalA": {
    shortName: "D-Taluronic acid",
    systematicNmae: "D-Talopyranuronic acid",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "TalN": {
    shortName: "D-Talosamine",
    systematicNmae: "2-Amino-2-deoxy-D-talopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "TalNAc": {
    shortName: "N-Acetyl-D-talosamine",
    systematicNmae: "2-Acetamido-2-deoxy-D-talopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Tyv": {
    shortName: "Tyvelose",
    systematicNmae: "3,6-Dideoxy-D-arabino-hexopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Xyl": {
    shortName: "D-Xylose",
    systematicNmae: "D-Xylopyranose",
    isomer: "D",
    ring: "pyranose",
    carbBone: 5
  },
  "Hexose": {
    shortName: "D-Hexose",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "HexNAc": {
    shortName: "N-Acetyl-D-Hexose",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Hexosamine": {
    shortName: "D-Hexosamine",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Hexuronate": {
    shortName: "D-Hexonic Acid",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Deoxyhexose": {
    shortName: "D-Deoxyhexoseo",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "DeoxyhexNAc": {
    shortName: "D-DeoxyhexNAc",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Di-deoxyhexose": {
    shortName: "D-Di-deoxyhexose",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 6
  },
  "Pentose": {
    shortName: "D-Pentose",
    systematicNmae: "undefined",
    isomer: "D",
    ring: "pyranose",
    carbBone: 5
  },
  "Deoxynonulosonate": {
    shortName: "Deoxynonulosonate",
    systematicNmae: "undefined",
    isomer: "undefined",
    ring: "undefined",
    carbBone: 9
  },
  "Di-deoxynonulosonate": {
    shortName: "Di-deoxynonulosonate",
    systematicNmae: "undefined",
    isomer: "undefined",
    ring: "undefined",
    carbBone: 9
  },
  "Unknown": {
    shortName: "Unknown",
    systematicNmae: "undefined",
    isomer: "undefined",
    ring: "undefined",
    carbBone: NaN
  },
  "Assigned": {
    shortName: "Assigned",
    systematicNmae: "undefined",
    isomer: "undefined",
    ring: "undefined",
    carbBone: NaN
  }
};

/***/ }),

/***/ "./js/data/getColor.js":
/*!*****************************!*\
  !*** ./js/data/getColor.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = getColor;

function getColor(color) {
  switch (color) {
    case "white":
      return "rgb(255, 255, 255)";

    case "blue":
      return "rgb(0, 144, 188)";

    case "green":
      return "rgb(0, 166, 81)";

    case "yellow":
      return "rgb(255, 212, 0)";

    case "orange":
      return "rgb(244, 121, 32)";

    case "pink":
      return "rgb(246, 158, 161)";

    case "purple":
      return "rgb(165, 67, 153)";

    case "light_blue":
      return "rgb(143, 204, 233)";

    case "brown":
      return "rgb(161, 122, 77)";

    case "red":
      return "rgb(237, 28, 36)";

    case "black":
      return "rgb(0, 0, 0)";

    default:
      return "";
  }
}

/***/ }),

/***/ "./js/data/graphicsData.js":
/*!*********************************!*\
  !*** ./js/data/graphicsData.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var basicData = exports.basicData = {
  "symbolSize": 15,
  "edgeSize": 3.0,
  "linkageSize": 20,
  "linkageTopYPositiom": -20,
  "linkageBottomYPosition": -5,
  "repeatRange": 10,
  "repeatStrokeSize": 5,
  "repeatNumberX": 10,
  "repeatNumberY": -10,
  "repeatNumberSize": 20,
  "cyclicEdge": 150,
  //cyclic構造のEdgeの曲がり具合
  "fragmentBracketToParentGlycan": 10,
  "fragmentBracketStrokeSize": 5,
  "symbolDistance": 45,
  "canvasSize": 5000,
  "fragmentEdgeDistance": 15,
  "commaUpperDistance": 15,
  "commaBottomDistance": 5,
  "modificationSize": 15,
  "compositionTextToSymbol": 10,
  "compositionTextSize": 30,
  "bridgeSize": 30,
  "isomerSize": 20,
  "ringSize": 20,
  "svgLinkageUp": 8,
  //右、下にずらす
  "svgLinkagedown": -8
};

/***/ }),

/***/ "./js/data/greekNumber.js":
/*!********************************!*\
  !*** ./js/data/greekNumber.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var greekNumber = exports.greekNumber = {
  "tri": 3,
  "tet": 4,
  "pen": 5,
  "hex": 6,
  "hep": 7,
  "oct": 8,
  "non": 9
};

/***/ }),

/***/ "./js/data/modificationData.js":
/*!*************************************!*\
  !*** ./js/data/modificationData.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var modifiData = exports.modifiData = {
  "RLac": {
    "TrivalName": "(R)Lac",
    "Name": "R-lactate",
    "bridgeBind": false
  },
  "RPy": {
    "TrivalName": "(R)Py",
    "Name": "R-pyruvate",
    "bridgeBind": true
  },
  "SLac": {
    "TrivalName": "(S)Lac",
    "Name": "S-lactate",
    "bridgeBind": false
  },
  "SPy": {
    "TrivalName": "(S)Py",
    "Name": "S-pyruvate",
    "bridgeBind": true
  },
  "XLac": {
    "TrivalName": "(X)Lac",
    "Name": "X-lactate",
    "bridgeBind": false
  },
  "Am": {
    "TrivalName": "Am",
    "Name": "Amidino",
    "bridgeBind": false
  },
  "Br": {
    "TrivalName": "Br",
    "Name": "Bromo",
    "bridgeBind": false
  },
  "Cl": {
    "TrivalName": "Cl",
    "Name": "Cholo",
    "bridgeBind": false
  },
  "DiMe": {
    "TrivalName": "DiMe",
    "Name": "Dimethyl",
    "bridgeBind": false
  },
  "Et": {
    "TrivalName": "Et",
    "Name": "Ethanol",
    "bridgeBind": false
  },
  "F": {
    "TrivalName": "F",
    "Name": "Fluoro",
    "bridgeBind": false
  },
  "Fo": {
    "TrivalName": "Fo",
    "Name": "Formyl",
    "bridgeBind": false
  },
  "Gc": {
    "TrivalName": "Gc",
    "Name": "Clycolyl",
    "bridgeBind": false
  },
  "I": {
    "TrivalName": "I",
    "Name": "Iodo",
    "bridgeBind": false
  },
  "N": {
    "TrivalName": "N",
    "Name": "Amine",
    "bridgeBind": true
  },
  "NAm": {
    "TrivalName": "NAm",
    "Name": "N-amidino",
    "bridgeBind": false
  },
  "NDiMe": {
    "TrivalName": "NDiMe",
    "Name": "N-dimethyl",
    "bridgeBind": false
  },
  "NEtOH": {
    "TrivalName": "NEtOH",
    "Name": "N-ethanol",
    "bridgeBind": false
  },
  "NFo": {
    "TrivalName": "NFo",
    "Name": "F-formyl",
    "bridgeBind": false
  },
  "NGc": {
    "TrivalName": "NGc",
    "Name": "N-glycolyl",
    "bridgeBind": false
  },
  "NMe": {
    "TrivalName": "NMe",
    "Name": "N-methyl",
    "bridgeBind": false
  },
  "NS": {
    "TrivalName": "NS",
    "Name": "N-sulfate",
    "bridgeBind": true
  },
  "NSuc": {
    "TrivalName": "NSuc",
    "Name": "N-succinate",
    "bridgeBind": false
  },
  "OMeOH": {
    "TrivalName": "OMeOH",
    "Name": "Hydroxymethyl",
    "bridgeBind": false
  },
  "P": {
    "TrivalName": "P",
    "Name": "Phosphate",
    "bridgeBind": true
  },
  "PCho": {
    "TrivalName": "PCho",
    "Name": "Phosphocholine",
    "bridgeBind": false
  },
  "PEm": {
    "TrivalName": "Pem",
    "Name": "Phospho-ethanol-amine",
    "bridgeBind": true
  },
  "PPEm": {
    "TrivalName": "PPEm",
    "Name": "DiPhospho-ethanol-amine",
    "bridgeBind": true
  },
  "Py": {
    "TrivalName": "Py",
    "Name": "X-pyruvate",
    "bridgeBind": true
  },
  "PyP": {
    "TrivalName": "PyP",
    "Name": "Pyrophosphate",
    "bridgeBind": true
  },
  "S": {
    "TrivalName": "S",
    "Name": "Sulfate",
    "bridgeBind": true
  },
  "SH": {
    "TrivalName": "SH",
    "Name": "Thio",
    "bridgeBind": false
  },
  "Suc": {
    "TrivalName": "Suc",
    "Name": "Succinate",
    "bridgeBind": true
  },
  "Tri_P": {
    "TrivalName": "Tri-P",
    "Name": "Triphosphate",
    "bridgeBind": true
  },
  "Undefined": {
    "TrivalName": "",
    "Name": "",
    "bridgeBind": true
  }
};

/***/ }),

/***/ "./js/drawGlycan/culcMaxMinLayer.js":
/*!******************************************!*\
  !*** ./js/drawGlycan/culcMaxMinLayer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.culc_max_min_layer = undefined;

var _Glycan = __webpack_require__(/*! ../class/Glycan */ "./js/class/Glycan.js");

var _Sugar = __webpack_require__(/*! ../class/Sugar */ "./js/class/Sugar.js");

var culc_max_min_layer = exports.culc_max_min_layer = function culc_max_min_layer(glycanArray) {
  var maxMInLayer = [-1, 100000, -100000, 1]; //[maxX(一番左のlayer), minX(一番右のlayer). maxY(一番上のlayer: 0, -1, -2 ...), minY(一番下のlayer: -20, -21...)]

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = glycanArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var glycan = _step.value;
      maxMInLayer = recuversive_culc_layer(glycan.getRootNode(), maxMInLayer);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return maxMInLayer;
};

var recuversive_culc_layer = function recuversive_culc_layer(sugar, maxMinLayer) {
  if (sugar.getXLayer() >= maxMinLayer[0]) maxMinLayer[0] = sugar.getXLayer();
  if (sugar.getXLayer() <= maxMinLayer[1]) maxMinLayer[1] = sugar.getXLayer();
  if (-1 * sugar.getYLayer() >= maxMinLayer[2]) maxMinLayer[2] = -1 * sugar.getYLayer();
  if (-1 * sugar.getYLayer() <= maxMinLayer[3]) maxMinLayer[3] = -1 * sugar.getYLayer();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = sugar.getChildSugars()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var child = _step2.value;
      maxMinLayer = recuversive_culc_layer(child, maxMinLayer);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return maxMinLayer;
};

/***/ }),

/***/ "./js/getRelativeCoordinate.js":
/*!*************************************!*\
  !*** ./js/getRelativeCoordinate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativeCoordinate = undefined;

var _graphicsData = __webpack_require__(/*! ./data/graphicsData */ "./js/data/graphicsData.js");

var getRelativeCoordinate = exports.getRelativeCoordinate = function getRelativeCoordinate(mouseX, mouseY) {
  var normalDistace = _graphicsData.basicData.symbolDistance + _graphicsData.basicData.symbolSize * 2;
  var distace = _graphicsData.basicData.symbolDistance + _graphicsData.basicData.symbolSize * 2;
  var flagX = false;
  var flagY = false;

  while (distace < _graphicsData.basicData.canvasSize + normalDistace) {
    if (distace - normalDistace < mouseX && distace > mouseX) {
      mouseX = distace - normalDistace + normalDistace / 2;
      flagX = true;
    }

    if (distace - normalDistace < mouseY && distace > mouseY) {
      mouseY = distace - normalDistace + normalDistace / 2;
      flagY = true;
    }

    distace = distace + normalDistace;

    if (distace > _graphicsData.basicData.canvasSize - normalDistace) {
      if (!flagX && !flagY) {
        mouseX = 0;
        mouseY = 0;
      }
    }
  }

  return [mouseX, mouseY];
};

/***/ }),

/***/ "./js/jsonParser/assignDataStructure/assignBridge.js":
/*!***********************************************************!*\
  !*** ./js/jsonParser/assignDataStructure/assignBridge.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

"use stirct";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignBridge = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _ParserBridge = __webpack_require__(/*! ../../class/ParserClass/ParserBridge */ "./js/class/ParserClass/ParserBridge.js");

var assignBridge = exports.assignBridge = function assignBridge(bridges, bridgeObj) {
  var _arr = Object.keys(bridges);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    var parser = new _ParserBridge.ParserBridge();

    var _arr2 = Object.keys(bridges[key]);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var bridge_key = _arr2[_i2];

      switch (bridge_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
          {
            parser.Acceptor = bridges[key][bridge_key];
            break;
          }

        case _JSONKeys.JSONKeys.Donor.toLowerCase():
          {
            parser.Donor = bridges[key][bridge_key];
            break;
          }

        case _JSONKeys.JSONKeys.Notation.toLowerCase():
          {
            parser.Notation = bridges[key][bridge_key];
            break;
          }
      }
    }

    parser.checkNoatation();
    bridgeObj[key] = parser;
  }

  return bridgeObj;
};

/***/ }),

/***/ "./js/jsonParser/assignDataStructure/assignEdges.js":
/*!**********************************************************!*\
  !*** ./js/jsonParser/assignDataStructure/assignEdges.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignEdges = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _ParserBinding = __webpack_require__(/*! ../../class/ParserClass/ParserBinding */ "./js/class/ParserClass/ParserBinding.js");

var assignEdges = exports.assignEdges = function assignEdges(edges, edgeObj) {
  var _arr = Object.keys(edges);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    var parser = new _ParserBinding.ParserBinding();

    var _arr2 = Object.keys(edges[key]);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var edge_key = _arr2[_i2];

      switch (edge_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
          {
            parser.Acceptor = edges[key][edge_key];
            break;
          }

        case _JSONKeys.JSONKeys.Donor.toLowerCase():
          {
            parser.Donor = edges[key][edge_key];
            break;
          }

        case _JSONKeys.JSONKeys.Position.toLowerCase():
          {
            parser.Position = edges[key][edge_key];
            break;
          }
      }
    }

    parser.checkWhichSide();
    edgeObj[key] = parser.createGlycoBond();
  }

  return edgeObj;
};

/***/ }),

/***/ "./js/jsonParser/assignDataStructure/assignFragment.js":
/*!*************************************************************!*\
  !*** ./js/jsonParser/assignDataStructure/assignFragment.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignFragment = undefined;

var _PaeserFragments = __webpack_require__(/*! ../../class/ParserClass/PaeserFragments */ "./js/class/ParserClass/PaeserFragments.js");

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _ParserFragmentEdge = __webpack_require__(/*! ../../class/ParserClass/ParserFragmentEdge */ "./js/class/ParserClass/ParserFragmentEdge.js");

var assignFragment = exports.assignFragment = function assignFragment(fragments, fragmentObj) {
  var _arr = Object.keys(fragments);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    var parser = new _PaeserFragments.ParserFragments();

    var _arr2 = Object.keys(fragments[key]);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var frag_key = _arr2[_i2];

      switch (frag_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
          {
            parser.Acceptor = fragments[key][frag_key];
            break;
          }

        case _JSONKeys.JSONKeys.Donor.toLowerCase():
          {
            parser.Donor = fragments[key][frag_key];
            break;
          }

        case _JSONKeys.JSONKeys.Edge.toLowerCase():
          {
            var parser_edge = new _ParserFragmentEdge.ParserFragmentEdge();

            var _arr3 = Object.keys(fragments[key][frag_key]);

            for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
              var edge_key = _arr3[_i3];

              switch (edge_key.toLowerCase()) {
                case _JSONKeys.JSONKeys.Position.toLowerCase():
                  {
                    var _arr4 = Object.keys(fragments[key][frag_key][edge_key]);

                    for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
                      var position_key = _arr4[_i4];

                      switch (position_key.toLowerCase()) {
                        case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
                          {
                            parser_edge.Acceptor = fragments[key][frag_key][edge_key][position_key];
                            break;
                          }

                        case _JSONKeys.JSONKeys.Donor.toLowerCase():
                          {
                            parser_edge.Donor = fragments[key][frag_key][edge_key][position_key];
                            break;
                          }
                      }
                    }
                  }
              }
            }

            parser.Edge = parser_edge;
            break;
          }
      }
    }

    fragmentObj[key] = parser;
  }

  return fragmentObj;
};

/***/ }),

/***/ "./js/jsonParser/assignDataStructure/assignMain.js":
/*!*********************************************************!*\
  !*** ./js/jsonParser/assignDataStructure/assignMain.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignMain = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _assignMonosaccharide = __webpack_require__(/*! ./assignMonosaccharide */ "./js/jsonParser/assignDataStructure/assignMonosaccharide.js");

var _assignEdges = __webpack_require__(/*! ./assignEdges */ "./js/jsonParser/assignDataStructure/assignEdges.js");

var _Glycan = __webpack_require__(/*! ../../class/Glycan */ "./js/class/Glycan.js");

var _Glycobond = __webpack_require__(/*! ../../class/Glycobond */ "./js/class/Glycobond.js");

var _Sugar = __webpack_require__(/*! ../../class/Sugar */ "./js/class/Sugar.js");

var _assignBridge = __webpack_require__(/*! ./assignBridge */ "./js/jsonParser/assignDataStructure/assignBridge.js");

var _Bridge = __webpack_require__(/*! ../../class/Bridge */ "./js/class/Bridge.js");

var _BridgeEdge = __webpack_require__(/*! ../../class/BridgeEdge */ "./js/class/BridgeEdge.js");

var _assignRepeat = __webpack_require__(/*! ./assignRepeat */ "./js/jsonParser/assignDataStructure/assignRepeat.js");

var _RepeatBracket = __webpack_require__(/*! ../../class/RepeatBracket */ "./js/class/RepeatBracket.js");

var _Fragment = __webpack_require__(/*! ../../class/Fragment */ "./js/class/Fragment.js");

var _FragmentBracket = __webpack_require__(/*! ../../class/FragmentBracket */ "./js/class/FragmentBracket.js");

var _assignFragment = __webpack_require__(/*! ./assignFragment */ "./js/jsonParser/assignDataStructure/assignFragment.js");

var _Cyclic = __webpack_require__(/*! ../../class/Cyclic */ "./js/class/Cyclic.js");

var assignMain = exports.assignMain = function assignMain(json) {
  var keys = Object.keys(json); //Json のkeyをまとめるための変数郡

  var monosaccharide_key = "";
  var edges_key = "";
  var repeat_key = "";
  var fragment_key = "";
  var bridge_key = "";
  var monosaccharideObj = {};
  var edgeObj = {};
  var bridgeObj = {};
  var repeatObj = {};
  var fragmentObj = {};

  for (var _i = 0; _i < keys.length; _i++) {
    var key = keys[_i];

    switch (key.toLowerCase()) {
      case _JSONKeys.JSONKeys.Monosaccharides.toLowerCase():
        {
          monosaccharide_key = key;
          break;
        }

      case _JSONKeys.JSONKeys.Edges.toLowerCase():
        {
          edges_key = key;
          break;
        }

      case _JSONKeys.JSONKeys.Repeat.toLowerCase():
        {
          repeat_key = key;
          break;
        }

      case _JSONKeys.JSONKeys.Fragments.toLowerCase():
        {
          fragment_key = key;
          break;
        }

      case _JSONKeys.JSONKeys.Bridge.toLowerCase():
        {
          bridge_key = key;
          break;
        }
    }
  }

  var glycanArray = [];
  monosaccharideObj = (0, _assignMonosaccharide.assignMonosaccharide)(json[monosaccharide_key], monosaccharideObj);
  edgeObj = (0, _assignEdges.assignEdges)(json[edges_key], edgeObj);
  var mainGlycan = combineMonoEdge(monosaccharideObj, edgeObj);
  glycanArray.push(mainGlycan);
  bridgeObj = (0, _assignBridge.assignBridge)(json[bridge_key], bridgeObj);
  combineBridgeGlycan(monosaccharideObj, bridgeObj);
  repeatObj = (0, _assignRepeat.assignRepeat)(json[repeat_key], repeatObj);
  combineRepeat(monosaccharideObj, repeatObj);
  glycanArray = setFragment(monosaccharideObj, glycanArray);
  var nonReductionObj = checkNonReductionSugars(glycanArray);
  fragmentObj = (0, _assignFragment.assignFragment)(json[fragment_key], fragmentObj);
  checkFragmentParentType(nonReductionObj, fragmentObj, monosaccharideObj);
  setGlycanData(glycanArray);
  setFragmentData(glycanArray, monosaccharideObj, fragmentObj);
  return glycanArray;
};

var combineMonoEdge = function combineMonoEdge(monoObj, edgeObj) {
  var glycan = new _Glycan.Glycan();
  glycan.setRootNode(monoObj["m0"]);
  monoObj["m0"].setGlycan(glycan);

  var _arr = Object.keys(edgeObj);

  for (var _i2 = 0; _i2 < _arr.length; _i2++) {
    var edge_key = _arr[_i2];
    var bind = edgeObj[edge_key];
    var parentSugar = monoObj[bind.jsonParentId];
    var childSugar = monoObj[bind.jsonChildId];
    parentSugar.setChildSugars(childSugar);
    childSugar.setParentSugars(parentSugar);
    childSugar.setParentBond(bind);
    bind.setChildAnomeric(childSugar.getAnomeric());
    bind.setParentSugar(parentSugar);
    bind.setChildSugar(childSugar);
    var linktype = childSugar.getAnomeric();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = bind.getSvgParentPosition()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var parentPosition = _step.value;
        linktype += String(parentPosition) + "/";
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    bind.setLinkageType(" " + linktype.slice(0, -1));
  }

  return glycan;
};

var combineBridgeGlycan = function combineBridgeGlycan(monoObj, bridgeObj) {
  var _arr2 = Object.keys(bridgeObj);

  for (var _i3 = 0; _i3 < _arr2.length; _i3++) {
    var b_key = _arr2[_i3];
    var parentSugar = monoObj[bridgeObj[b_key].Acceptor];
    var childSugar = monoObj[bridgeObj[b_key].Donor];
    var glycobond = new _Glycobond.Glycobond();
    var FLAG = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = parentSugar.getChildSugars()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var child = _step2.value;

        if (child === childSugar) {
          FLAG = true;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = child.getParentBond()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var bind = _step3.value;

              if (bind.getParentSugar() === parentSugar) {
                glycobond = bind;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (!FLAG) alert("BridgeError!!");
    var bridge = new _Bridge.Bridge();
    var bridgeEdge = new _BridgeEdge.BridgeEdge();
    bridge.setParentSugar(parentSugar);

    if (bridgeObj[b_key].dataNoatation === "Undefined") {
      bridge.setName(bridgeObj[b_key].Notation);
    } else {
      bridge.setName(bridgeObj[b_key].dataNoatation);
    }

    bridge.setEdge(bridgeEdge);
    bridgeEdge.setParentSugar(parentSugar);
    bridgeEdge.setChildSugar(childSugar);
    bridgeEdge.setLinkageType(glycobond.getLinkageType());
    bridgeEdge.setChildAnomeric(glycobond.getChildAnomeric());
    bridgeEdge.setChildPosition(glycobond.getChildPosition());
    bridgeEdge.setParentPositon(glycobond.getParentPosition());
    parentSugar.setChildBridge(bridge);
  }
};

var combineRepeat = function combineRepeat(monoObj, repeatObj) {
  var _arr3 = Object.keys(repeatObj);

  for (var _i4 = 0; _i4 < _arr3.length; _i4++) {
    var re_key = _arr3[_i4];

    if (repeatObj[re_key] === "childCyclic") {
      var cyclic = new _Cyclic.Cyclic();
      cyclic.setReductionSugar(monoObj[repeatObj[re_key].Start]);
      cyclic.setNonReductionSugar(monoObj[repeatObj[re_key].End]);
      monoObj[repeatObj[re_key].End].setChildCyclic(cyclic);
      monoObj[repeatObj[re_key].Start].setParentCyclic(cyclic);
    } else {
      var repeatBracket = new _RepeatBracket.RepeatBracket();
      var startSugar = monoObj[repeatObj[re_key].Start];
      var endSugar = monoObj[repeatObj[re_key].End];
      repeatBracket.setStartSugar(startSugar);
      repeatBracket.setEndSugar(endSugar);
      repeatBracket.setReepatNumber(repeatObj[re_key].numOfRepeat);
      startSugar.setRepeatBracket(repeatBracket);
    }
  }
};

var setFragment = function setFragment(monoObj, glycanArray) {
  var mainGlycan = glycanArray[0];

  var _arr4 = Object.keys(monoObj);

  for (var _i5 = 0; _i5 < _arr4.length; _i5++) {
    var key = _arr4[_i5];
    if (monoObj[key] === mainGlycan.getRootNode()) continue;else {
      if (!monoObj[key].hasParentSugars()) {
        var fragment = new _Fragment.Fragment();
        fragment.setRootNode(monoObj[key]);
        glycanArray.push(fragment);
      }
    }
  }

  return glycanArray;
};

var checkNonReductionSugars = function checkNonReductionSugars(glycanArray) {
  var resultObj = {};
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = glycanArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var glycan = _step4.value;
      resultObj[glycan] = recuversiveCheck(glycan.getRootNode(), []);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return resultObj;
};

var recuversiveCheck = function recuversiveCheck(sugar, nonSugars) {
  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = sugar.getChildSugars()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var child = _step5.value;
          nonSugars = recuversiveCheck(child, nonSugars);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = sugar.getChildSugars()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _child = _step6.value;
          if (sugar.getChildCyclic().getReductionSugar() === _child) continue;else nonSugars = recuversiveCheck(_child, nonSugars);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  } else {
    nonSugars.push(sugar);
    return nonSugars;
  }

  return nonSugars;
};

var checkFragmentParentType = function checkFragmentParentType(nonReductionObj, fragmentObj, monoObj) {
  var _arr5 = Object.keys(fragmentObj);

  for (var _i6 = 0; _i6 < _arr5.length; _i6++) {
    var key = _arr5[_i6];
    fragmentObj[key].checkParent(nonReductionObj, monoObj);
  }
};

var setGlycanData = function setGlycanData(glycanArray) {
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = glycanArray[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var glycan = _step7.value;
      recuversiveSetGlycanData(glycan.getRootNode(), glycan);
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }
};

var recuversiveSetGlycanData = function recuversiveSetGlycanData(sugar, glycan) {
  sugar.setGlycan(glycan);

  if (sugar.hasChildSugars()) {
    if (sugar.isChildCyclicEmpty()) {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = sugar.getChildSugars()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var child = _step8.value;
          recuversiveSetGlycanData(child, glycan);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = sugar.getChildSugars()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _child2 = _step9.value;
          if (sugar.getChildCyclic().getReductionSugar() === _child2) continue;else recuversiveSetGlycanData(_child2, glycan);
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    }
  }
};

var setFragmentData = function setFragmentData(glycanArray, monoObj, fragmentObj) {
  var _arr6 = Object.keys(fragmentObj);

  for (var _i7 = 0; _i7 < _arr6.length; _i7++) {
    var key = _arr6[_i7];
    var fragmentBracket = void 0;

    if (fragmentObj[key].ParentIsGlycan) {
      if (monoObj[fragmentObj[key].Acceptor[0]].getGlycan().isFragmentBracketEmpty()) {
        fragmentBracket = new _FragmentBracket.FragmentBracket();
        fragmentBracket.setParentGlycan(monoObj[fragmentObj[key].Acceptor[0]].getGlycan());
        monoObj[fragmentObj[key].Acceptor[0]].getGlycan().setFragmentBracket(fragmentBracket);
      } else {
        fragmentBracket = monoObj[fragmentObj[key].Acceptor[0]].getGlycan().getFragmentBracket();
      }

      fragmentBracket.setChildGlycans(monoObj[fragmentObj[key].Donor].getGlycan());
      monoObj[fragmentObj[key].Donor].getGlycan().setParentFragmentBracket(fragmentBracket);
    } else {
      if (monoObj[fragmentObj[key].Acceptor[0]].isFragmentBracketEmpty()) {
        fragmentBracket = new _FragmentBracket.FragmentBracket();
        fragmentBracket.isResuctionSugar = true;
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = fragmentObj[key].Acceptor[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var monoId = _step10.value;
            fragmentBracket.setParentSugars(monoObj[monoId]);
            monoObj[monoId].setFragmentBracket(fragmentBracket);
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      } else {
        fragmentBracket = monoObj[fragmentObj[key].Acceptor[0]].getFragmentBracket();
      }

      fragmentBracket.setChildGlycans(monoObj[fragmentObj[key].Donor].getGlycan());
      monoObj[fragmentObj[key].Donor].getGlycan().setParentFragmentBracket(fragmentBracket);
    }
  }
};

/***/ }),

/***/ "./js/jsonParser/assignDataStructure/assignMonosaccharide.js":
/*!*******************************************************************!*\
  !*** ./js/jsonParser/assignDataStructure/assignMonosaccharide.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignMonosaccharide = undefined;

var _ParserMonosaccharide = __webpack_require__(/*! ../../class/ParserClass/ParserMonosaccharide */ "./js/class/ParserClass/ParserMonosaccharide.js");

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var assignMonosaccharide = exports.assignMonosaccharide = function assignMonosaccharide(monosaccharide, monosaccharideObj) {
  var _arr = Object.keys(monosaccharide);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    var parser = new _ParserMonosaccharide.ParserMonosaccharide();

    var _arr2 = Object.keys(monosaccharide[key]);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var mono_key = _arr2[_i2];

      switch (mono_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Modifications.toLowerCase():
          {
            parser.Modifications = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.TrivialName.toLowerCase():
          {
            parser.TrivialName = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.Substituents.toLowerCase():
          {
            parser.Substituents = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.Configuration.toLowerCase():
          {
            parser.Configuration = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.SuperClass.toLowerCase():
          {
            parser.SuperClass = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.RingSize.toLowerCase():
          {
            parser.RingSize = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.AnomState.toLowerCase():
          {
            parser.AnomState = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.AnomPosition.toLowerCase():
          {
            parser.AnomPosition = monosaccharide[key][mono_key];
            break;
          }

        case _JSONKeys.JSONKeys.Notation.toLowerCase():
          {
            parser.Notation = monosaccharide[key][mono_key];
            break;
          }
      }
    }

    monosaccharideObj[key] = parser.checkSNFGNoatation();
    parser.checkModificaiton(monosaccharideObj[key]);
    parser.checkSubstituents(monosaccharideObj[key]);
    parser.checkAnome(monosaccharideObj[key]);
  }

  return monosaccharideObj;
};

/***/ }),

/***/ "./js/jsonParser/assignDataStructure/assignRepeat.js":
/*!***********************************************************!*\
  !*** ./js/jsonParser/assignDataStructure/assignRepeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignRepeat = undefined;

var _ParserRepeat = __webpack_require__(/*! ../../class/ParserClass/ParserRepeat */ "./js/class/ParserClass/ParserRepeat.js");

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var assignRepeat = exports.assignRepeat = function assignRepeat(repeats, repeatObj) {
  var _arr = Object.keys(repeats);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    var parser = new _ParserRepeat.ParserRepeat();

    var _arr2 = Object.keys(repeats[key]);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var repeat_key = _arr2[_i2];

      switch (repeat_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Min.toLowerCase():
          {
            parser.Min = repeats[key][repeat_key];
            break;
          }

        case _JSONKeys.JSONKeys.Max.toLowerCase():
          {
            parser.Max = repeats[key][repeat_key];
            break;
          }

        case _JSONKeys.JSONKeys.Position.toLowerCase():
          {
            parser.Position = repeats[key][repeat_key];
            break;
          }

        case _JSONKeys.JSONKeys.Start.toLowerCase():
          {
            parser.Start = repeats[key][repeat_key];
            break;
          }

        case _JSONKeys.JSONKeys.End.toLowerCase():
          {
            parser.End = repeats[key][repeat_key];
            break;
          }
      }
    }

    parser.checkNumOfReapt();
    repeatObj[key] = parser;
  }

  return repeatObj;
};

/***/ }),

/***/ "./js/jsonParser/check/checkBridge.js":
/*!********************************************!*\
  !*** ./js/jsonParser/check/checkBridge.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_bridge = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkLinkagetype = __webpack_require__(/*! ./checkLinkagetype */ "./js/jsonParser/check/checkLinkagetype.js");

var check_bridge = exports.check_bridge = function check_bridge(bridge) {
  var bridge_numKeys = Object.keys(bridge);
  if (bridge_numKeys.length === 0) return true;

  for (var _i = 0; _i < bridge_numKeys.length; _i++) {
    var bridge_numKey = bridge_numKeys[_i];
    var bridge_keys = Object.keys(bridge[bridge_numKey]);
    if (bridge_keys.length === 0) return false;
    var ACCEPTOR_FLAG = false;
    var DONOR_FLAG = false;
    var NOTATION_FLAG = false;
    var LINKAGETYPE_FLAG = false;

    for (var _i2 = 0; _i2 < bridge_keys.length; _i2++) {
      var bridge_key = bridge_keys[_i2];

      switch (bridge_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
          {
            if (typeof bridge[bridge_numKey][bridge_key] === "string") ACCEPTOR_FLAG = true;else ACCEPTOR_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Donor.toLowerCase():
          {
            if (typeof bridge[bridge_numKey][bridge_key] === "string") DONOR_FLAG = true;else DONOR_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Notation.toLowerCase():
          {
            if (typeof bridge[bridge_numKey][bridge_key] === "string") NOTATION_FLAG = true;else NOTATION_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.LinkageType.toLowerCase():
          {
            LINKAGETYPE_FLAG = (0, _checkLinkagetype.check_linkagetype)(bridge[bridge_numKey][bridge_key]);
            break;
          }

        default:
          {
            return false;
          }
      }
    }

    if (ACCEPTOR_FLAG && DONOR_FLAG && NOTATION_FLAG && LINKAGETYPE_FLAG) continue;else return false;
  }

  return true;
};

/***/ }),

/***/ "./js/jsonParser/check/checkEdge.js":
/*!******************************************!*\
  !*** ./js/jsonParser/check/checkEdge.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_fragment_edge = exports.check_edge = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkPosition = __webpack_require__(/*! ./checkPosition */ "./js/jsonParser/check/checkPosition.js");

var _checkProbability = __webpack_require__(/*! ./checkProbability */ "./js/jsonParser/check/checkProbability.js");

var _checkLinkagetype = __webpack_require__(/*! ./checkLinkagetype */ "./js/jsonParser/check/checkLinkagetype.js");

//fragment Edgeのcheck関数
var check_edge = exports.check_edge = function check_edge(edge) {
  var edge_numKeys = Object.keys(edge);
  if (edge_numKeys.length === 0) return false;

  for (var _i = 0; _i < edge_numKeys.length; _i++) {
    var edge_numKey = edge_numKeys[_i];
    var edge_keys = Object.keys(edge[edge_numKey]);
    if (edge_keys.length === 0) return false;
    var ACCEPTER_FLAG = false;
    var DONOR_FLAG = false;
    var POSITION_FLAG = false;
    var PROBANILITY_FLAG = false;
    var LINKAGETYPE_FLAG = false;

    for (var _i2 = 0; _i2 < edge_keys.length; _i2++) {
      var edge_key = edge_keys[_i2];

      switch (edge_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
          {
            if (typeof edge[edge_numKey][edge_key] === "string") ACCEPTER_FLAG = true;else ACCEPTER_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Donor.toLowerCase():
          {
            if (typeof edge[edge_numKey][edge_key] === "string") DONOR_FLAG = true;else DONOR_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Position.toLowerCase():
          {
            POSITION_FLAG = (0, _checkPosition.check_position)(edge[edge_numKey][edge_key]);
            break;
          }

        case _JSONKeys.JSONKeys.Probability.toLowerCase():
          {
            PROBANILITY_FLAG = (0, _checkProbability.check_probability)(edge[edge_numKey][edge_key]);
            break;
          }

        case _JSONKeys.JSONKeys.LinkageType.toLowerCase():
          {
            LINKAGETYPE_FLAG = (0, _checkLinkagetype.check_linkagetype)(edge[edge_numKey][edge_key]);
            break;
          }

        default:
          {
            return false;
          }
      }
    }

    if (ACCEPTER_FLAG && DONOR_FLAG && POSITION_FLAG && PROBANILITY_FLAG && LINKAGETYPE_FLAG) continue;else return false;
  }

  return true;
};

var check_fragment_edge = exports.check_fragment_edge = function check_fragment_edge(edge) {
  var edge_keys = Object.keys(edge);
  if (edge_keys.length === 0) return false;
  var POSITION_FLAG = false;
  var PROBANILITY_FLAG = false;
  var LINKAGETYPE_FLAG = false;

  for (var _i3 = 0; _i3 < edge_keys.length; _i3++) {
    var edge_key = edge_keys[_i3];

    switch (edge_key.toLowerCase()) {
      case _JSONKeys.JSONKeys.Position.toLowerCase():
        {
          POSITION_FLAG = (0, _checkPosition.check_position)(edge[edge_key]);
          break;
        }

      case _JSONKeys.JSONKeys.Probability.toLowerCase():
        {
          PROBANILITY_FLAG = (0, _checkProbability.check_probability)(edge[edge_key]);
          break;
        }

      case _JSONKeys.JSONKeys.LinkageType.toLowerCase():
        {
          LINKAGETYPE_FLAG = (0, _checkLinkagetype.check_linkagetype)(edge[edge_key]);
          break;
        }

      default:
        {
          return false;
        }
    }
  }

  if (POSITION_FLAG && PROBANILITY_FLAG && LINKAGETYPE_FLAG) return true;else return false;
};

/***/ }),

/***/ "./js/jsonParser/check/checkFragment.js":
/*!**********************************************!*\
  !*** ./js/jsonParser/check/checkFragment.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_fragment = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkEdge = __webpack_require__(/*! ./checkEdge */ "./js/jsonParser/check/checkEdge.js");

var check_fragment = exports.check_fragment = function check_fragment(fragment) {
  var fragment_numKeys = Object.keys(fragment);
  if (fragment_numKeys.length === 0) return true;

  for (var _i = 0; _i < fragment_numKeys.length; _i++) {
    var fragment_numKey = fragment_numKeys[_i];
    var fragment_keys = Object.keys(fragment[fragment_numKey]);
    if (fragment_keys.length === 0) return false;
    var ACCEPTER_FLAG = true;
    var DONOR_FLAG = true;
    var EDGE_FLAG = false;

    for (var _i2 = 0; _i2 < fragment_keys.length; _i2++) {
      var fragment_key = fragment_keys[_i2];

      switch (fragment_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
          {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = fragment[fragment_numKey][fragment_key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var monoKey = _step.value;
                if (typeof monoKey === "string") continue;else ACCEPTER_FLAG = false;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            break;
          }

        case _JSONKeys.JSONKeys.Donor.toLowerCase():
          {
            if (typeof fragment[fragment_numKey][fragment_key] === "string") continue;else DONOR_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Edge.toLowerCase():
          {
            EDGE_FLAG = (0, _checkEdge.check_fragment_edge)(fragment[fragment_numKey][fragment_key]);
            break;
          }

        default:
          {
            return false;
          }
      }
    }

    if (ACCEPTER_FLAG && DONOR_FLAG && EDGE_FLAG) continue;else return false;
  }

  return true;
};

/***/ }),

/***/ "./js/jsonParser/check/checkLinkagetype.js":
/*!*************************************************!*\
  !*** ./js/jsonParser/check/checkLinkagetype.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_linkagetype = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var check_linkagetype = exports.check_linkagetype = function check_linkagetype(linkage) {
  var linkage_keys = Object.keys(linkage);
  if (linkage_keys.length === 0) return false;
  var ACCEPTER_FLAG = false;
  var DONOR_FLAG = false;

  for (var _i = 0; _i < linkage_keys.length; _i++) {
    var linkage_key = linkage_keys[_i];

    switch (linkage_key.toLowerCase()) {
      case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
        {
          if (typeof linkage[linkage_key] === "string") ACCEPTER_FLAG = true;else ACCEPTER_FLAG = false;
          break;
        }

      case _JSONKeys.JSONKeys.Donor.toLowerCase():
        {
          if (typeof linkage[linkage_key] === "string") DONOR_FLAG = true;else DONOR_FLAG = false;
          break;
        }

      default:
        {
          return false;
        }
    }
  }

  if (ACCEPTER_FLAG && DONOR_FLAG) return true;else return false;
};

/***/ }),

/***/ "./js/jsonParser/check/checkModifications.js":
/*!***************************************************!*\
  !*** ./js/jsonParser/check/checkModifications.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_modifications = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkNotationValue = __webpack_require__(/*! ./checkNotationValue */ "./js/jsonParser/check/checkNotationValue.js");

/***
 *   JSON MonosaccharidesのModificationのチェック
 * @param json: Modification の配列
 * @returns {boolean} : cehckの結果OKかどうか
 */
var check_modifications = exports.check_modifications = function check_modifications(modifications) {
  if (modifications.length === 0) return true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = modifications[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var modification = _step.value;
      var POSITION_FLAG = true;
      var NOTATION_FLAG = false;
      var keys = Object.keys(modification);

      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i];

        switch (key.toLowerCase()) {
          case _JSONKeys.JSONKeys.Position.toLowerCase():
            {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = modification[key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var positionNum = _step2.value;

                  if (typeof positionNum !== "number") {
                    POSITION_FLAG = false;
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              break;
            }

          case _JSONKeys.JSONKeys.Notation.toLowerCase():
            {
              NOTATION_FLAG = (0, _checkNotationValue.check_notation_value)(modification[key]);
              if (!NOTATION_FLAG) return false;
              break;
            }

          default:
            {
              return false;
            }
        }
      }

      if (POSITION_FLAG && NOTATION_FLAG) {
        continue;
      } else {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};

/***/ }),

/***/ "./js/jsonParser/check/checkMonosaccharides.js":
/*!*****************************************************!*\
  !*** ./js/jsonParser/check/checkMonosaccharides.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_monosaccharides = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkModifications = __webpack_require__(/*! ./checkModifications */ "./js/jsonParser/check/checkModifications.js");

var _checkSubstituents = __webpack_require__(/*! ./checkSubstituents */ "./js/jsonParser/check/checkSubstituents.js");

var check_monosaccharides = exports.check_monosaccharides = function check_monosaccharides(monosaccharides) {
  var monosaccharides_numKeys = Object.keys(monosaccharides);
  if (monosaccharides_numKeys.length === 0) return false;
  var MODIFICATION_FLAG = false;
  var TRIVIALNAME_FLAG = true;
  var SUBSTITUENTS_FLAG = false;
  var CONFIGURATION_FLAG = true;
  var SUPERCLASS_FLAG = true;
  var RINGSIZE_FLAG = true;
  var ANOMSTATE_FLAG = true;
  var ANOMPOSITION_FLAG = true;
  var NOTATION_FLAG = true;
  var RESULT_FLAG = true;

  for (var _i = 0; _i < monosaccharides_numKeys.length; _i++) {
    var monosaccharides_numKey = monosaccharides_numKeys[_i];
    var monosaccharides_keys = Object.keys(monosaccharides[monosaccharides_numKey]);

    for (var _i2 = 0; _i2 < monosaccharides_keys.length; _i2++) {
      var monosaccharides_key = monosaccharides_keys[_i2];

      switch (monosaccharides_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Modifications.toLowerCase():
          {
            MODIFICATION_FLAG = (0, _checkModifications.check_modifications)(monosaccharides[monosaccharides_numKey][monosaccharides_key]);
            break;
          }

        case _JSONKeys.JSONKeys.TrivialName.toLowerCase():
          {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = monosaccharides[monosaccharides_numKey][monosaccharides_key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var trivialName = _step.value;
                if (typeof trivialName === "string") continue;else TRIVIALNAME_FLAG = false;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            break;
          }

        case _JSONKeys.JSONKeys.Substituents.toLowerCase():
          {
            SUBSTITUENTS_FLAG = (0, _checkSubstituents.check_substituents)(monosaccharides[monosaccharides_numKey][monosaccharides_key]);
            break;
          }

        case _JSONKeys.JSONKeys.Configuration.toLowerCase():
          {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = monosaccharides[monosaccharides_numKey][monosaccharides_key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var configuration = _step2.value;
                if (typeof configuration === "string") continue;else CONFIGURATION_FLAG = false;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            break;
          }

        case _JSONKeys.JSONKeys.SuperClass.toLowerCase():
          {
            if (typeof monosaccharides[monosaccharides_numKey][monosaccharides_key] === "string") continue;else SUPERCLASS_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.RingSize.toLowerCase():
          {
            if (typeof monosaccharides[monosaccharides_numKey][monosaccharides_key] === "string") continue;else RINGSIZE_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.AnomState.toLowerCase():
          {
            if (typeof monosaccharides[monosaccharides_numKey][monosaccharides_key] === "string") continue;else ANOMSTATE_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.AnomPosition.toLowerCase():
          {
            if (typeof monosaccharides[monosaccharides_numKey][monosaccharides_key] === "number") continue;else ANOMPOSITION_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Notation.toLowerCase():
          {
            if (typeof monosaccharides[monosaccharides_numKey][monosaccharides_key] === "string") continue;else NOTATION_FLAG = false;
            break;
          }

        default:
          {
            return false;
          }
      }
    }

    if (MODIFICATION_FLAG && TRIVIALNAME_FLAG && SUBSTITUENTS_FLAG && CONFIGURATION_FLAG && SUPERCLASS_FLAG && RINGSIZE_FLAG && ANOMSTATE_FLAG && ANOMPOSITION_FLAG && NOTATION_FLAG) {
      continue;
    } else {
      RESULT_FLAG = false;
      break;
    }
  }

  if (RESULT_FLAG) return true;else return false;
};

/***/ }),

/***/ "./js/jsonParser/check/checkNotationValue.js":
/*!***************************************************!*\
  !*** ./js/jsonParser/check/checkNotationValue.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var check_notation_value = exports.check_notation_value = function check_notation_value(notation) {
  if (typeof notation === "string") return true;else return false;
};

/***/ }),

/***/ "./js/jsonParser/check/checkPosition.js":
/*!**********************************************!*\
  !*** ./js/jsonParser/check/checkPosition.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_position = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var check_position = exports.check_position = function check_position(position) {
  var position_keys = Object.keys(position);
  if (position_keys.length === 0) return false;
  var ACCEPTER_FLAG = true;
  var DONOR_FLAG = true;

  for (var _i = 0; _i < position_keys.length; _i++) {
    var position_key = position_keys[_i];

    switch (position_key.toLowerCase()) {
      case _JSONKeys.JSONKeys.Acceptor.toLowerCase():
        {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = position[position_key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var accepter = _step.value;
              if (typeof accepter === "number") continue;else ACCEPTER_FLAG = false;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          break;
        }

      case _JSONKeys.JSONKeys.Donor.toLowerCase():
        {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = position[position_key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var donor = _step2.value;
              if (typeof donor === "number") continue;else DONOR_FLAG = false;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          break;
        }

      default:
        {
          return false;
        }
    }
  }

  if (ACCEPTER_FLAG && DONOR_FLAG) return true;else return false;
};

/***/ }),

/***/ "./js/jsonParser/check/checkProbability.js":
/*!*************************************************!*\
  !*** ./js/jsonParser/check/checkProbability.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_probability = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var check_probability = exports.check_probability = function check_probability(probability) {
  var probability_keys = Object.keys(probability);
  if (probability_keys.length === 0) return false;
  var HIGH_FLAG = false;
  var LOW_FLAG = false;

  for (var _i = 0; _i < probability_keys.length; _i++) {
    var probability_key = probability_keys[_i];

    switch (probability_key.toLowerCase()) {
      case _JSONKeys.JSONKeys.High.toLowerCase():
        {
          if (typeof probability[probability_key] === "number") HIGH_FLAG = true;else HIGH_FLAG = false;
          break;
        }

      case _JSONKeys.JSONKeys.Low.toLowerCase():
        {
          if (typeof probability[probability_key] === "number") LOW_FLAG = true;else LOW_FLAG = false;
          break;
        }

      default:
        {
          return false;
        }
    }
  }

  if (HIGH_FLAG && LOW_FLAG) return true;else false;
};

/***/ }),

/***/ "./js/jsonParser/check/checkRepeat.js":
/*!********************************************!*\
  !*** ./js/jsonParser/check/checkRepeat.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_repeat = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkPosition = __webpack_require__(/*! ./checkPosition */ "./js/jsonParser/check/checkPosition.js");

var _checkProbability = __webpack_require__(/*! ./checkProbability */ "./js/jsonParser/check/checkProbability.js");

var _checkLinkagetype = __webpack_require__(/*! ./checkLinkagetype */ "./js/jsonParser/check/checkLinkagetype.js");

var check_repeat = exports.check_repeat = function check_repeat(repeat) {
  var repeat_numKeys = Object.keys(repeat);
  if (repeat_numKeys.length === 0) return true;

  for (var _i = 0; _i < repeat_numKeys.length; _i++) {
    var repeat_numKey = repeat_numKeys[_i];
    var repeat_keys = Object.keys(repeat[repeat_numKey]);
    if (repeat_keys.length === 0) return false;
    var MIN_FLAG = false;
    var POSITION_FLAG = false;
    var MAX_FLAG = false;
    var START_FLAG = false;
    var PROBABILITY_FLAG = false;
    var END_FLAG = false; // let BRIDGE_FLAG: boolean = false;

    var LINKAGE_FLAG = false;

    for (var _i2 = 0; _i2 < repeat_keys.length; _i2++) {
      var repeat_key = repeat_keys[_i2];

      switch (repeat_key.toLowerCase()) {
        case _JSONKeys.JSONKeys.Min.toLowerCase():
          {
            if (typeof repeat[repeat_numKey][repeat_key] === "number") MIN_FLAG = true;else MIN_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Position.toLowerCase():
          {
            POSITION_FLAG = (0, _checkPosition.check_position)(repeat[repeat_numKey][repeat_key]);
            break;
          }

        case _JSONKeys.JSONKeys.Max.toLowerCase():
          {
            if (typeof repeat[repeat_numKey][repeat_key] === "number") MAX_FLAG = true;else MAX_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Start.toLowerCase():
          {
            if (typeof repeat[repeat_numKey][repeat_key] === "string") START_FLAG = true;else START_FLAG = false;
            break;
          }

        case _JSONKeys.JSONKeys.Probability.toLowerCase():
          {
            PROBABILITY_FLAG = (0, _checkProbability.check_probability)(repeat[repeat_numKey][repeat_key]);
            break;
          }

        case _JSONKeys.JSONKeys.End.toLowerCase():
          {
            if (typeof repeat[repeat_numKey][repeat_key] === "string") END_FLAG = true;else END_FLAG = false;
            break;
          }
        // case JSONKeys.Bridge.toLowerCase(): {
        //     BRIDGE_FLAG = check_bridge(repeat[repeat_numKey][repeat_key]);
        //     break;
        // }

        case _JSONKeys.JSONKeys.LinkageType.toLowerCase():
          {
            LINKAGE_FLAG = (0, _checkLinkagetype.check_linkagetype)(repeat[repeat_numKey][repeat_key]);
            break;
          }

        default:
          {
            return false;
          }
      }
    }

    if (MIN_FLAG && POSITION_FLAG && MAX_FLAG && START_FLAG && PROBABILITY_FLAG && END_FLAG && LINKAGE_FLAG) continue;else return false;
  }

  return true;
};

/***/ }),

/***/ "./js/jsonParser/check/checkSubstituents.js":
/*!**************************************************!*\
  !*** ./js/jsonParser/check/checkSubstituents.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_substituents = undefined;

var _JSONKeys = __webpack_require__(/*! ../../data/JSONKeys */ "./js/data/JSONKeys.js");

var _checkPosition = __webpack_require__(/*! ./checkPosition */ "./js/jsonParser/check/checkPosition.js");

var _checkProbability = __webpack_require__(/*! ./checkProbability */ "./js/jsonParser/check/checkProbability.js");

var _checkLinkagetype = __webpack_require__(/*! ./checkLinkagetype */ "./js/jsonParser/check/checkLinkagetype.js");

var _checkNotationValue = __webpack_require__(/*! ./checkNotationValue */ "./js/jsonParser/check/checkNotationValue.js");

var check_substituents = exports.check_substituents = function check_substituents(substituents) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = substituents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var substituent = _step.value;
      var keys = Object.keys(substituent);
      if (keys.length === 0) return false;
      var POSITION_FLAG = false;
      var STATUS_FLAG = false;
      var PROBABILITY_FLAG = false;
      var LINKAGETYPE_FLAG = false;
      var NOTATION_FLAG = false;

      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i];

        switch (key.toLowerCase()) {
          case _JSONKeys.JSONKeys.Position.toLowerCase():
            {
              POSITION_FLAG = (0, _checkPosition.check_position)(substituent[key]);
              break;
            }

          case _JSONKeys.JSONKeys.Status.toLowerCase():
            {
              switch (substituent[key].toLowerCase()) {
                case "simple":
                case "fuzzy":
                  {
                    STATUS_FLAG = true;
                    break;
                  }

                default:
                  STATUS_FLAG = false;
              }

              break;
            }

          case _JSONKeys.JSONKeys.Probability.toLowerCase():
            {
              PROBABILITY_FLAG = (0, _checkProbability.check_probability)(substituent[key]);
              break;
            }

          case _JSONKeys.JSONKeys.LinkageType.toLowerCase():
            {
              LINKAGETYPE_FLAG = (0, _checkLinkagetype.check_linkagetype)(substituent[key]);
              break;
            }

          case _JSONKeys.JSONKeys.Notation.toLowerCase():
            {
              NOTATION_FLAG = (0, _checkNotationValue.check_notation_value)(substituent[key]);
              break;
            }

          default:
            return false;
        }
      }

      if (POSITION_FLAG && STATUS_FLAG && PROBABILITY_FLAG && LINKAGETYPE_FLAG && NOTATION_FLAG) continue;else return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};

/***/ }),

/***/ "./js/nodeModeSearch.js":
/*!******************************!*\
  !*** ./js/nodeModeSearch.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSymbolColor = undefined;
exports.nodeModeSearch = nodeModeSearch;
exports.nodeType = nodeType;

var _nodeModeType = __webpack_require__(/*! ./nodeModeType */ "./js/nodeModeType.js");

var _getColor = __webpack_require__(/*! ./data/getColor */ "./js/data/getColor.js");

function nodeModeSearch(target) {
  switch (target.toLowerCase()) {
    case "Hexose".toLowerCase():
      return _nodeModeType.nodeModeType.HEXOSE;

    case "Glc".toLowerCase():
      return _nodeModeType.nodeModeType.GLC;

    case "Man".toLowerCase():
      return _nodeModeType.nodeModeType.MAN;

    case "Gal".toLowerCase():
      return _nodeModeType.nodeModeType.GAL;

    case "Gul".toLowerCase():
      return _nodeModeType.nodeModeType.GUL;

    case "Alt".toLowerCase():
      return _nodeModeType.nodeModeType.ALT;

    case "All".toLowerCase():
      return _nodeModeType.nodeModeType.ALL;

    case "Tal".toLowerCase():
      return _nodeModeType.nodeModeType.TAL;

    case "Ido".toLowerCase():
      return _nodeModeType.nodeModeType.IDO;

    case "HexNAc".toLowerCase():
      return _nodeModeType.nodeModeType.HEXNAC;

    case "GlcNAc".toLowerCase():
      return _nodeModeType.nodeModeType.GLCNAC;

    case "ManNAc".toLowerCase():
      return _nodeModeType.nodeModeType.MANNAC;

    case "GalNAc".toLowerCase():
      return _nodeModeType.nodeModeType.GALNAC;

    case "GulNAc".toLowerCase():
      return _nodeModeType.nodeModeType.GULNAC;

    case "AltNAc".toLowerCase():
      return _nodeModeType.nodeModeType.ALTNAC;

    case "AllNAc".toLowerCase():
      return _nodeModeType.nodeModeType.ALLNAC;

    case "TalNAc".toLowerCase():
      return _nodeModeType.nodeModeType.TALNAC;

    case "IdoNAc".toLowerCase():
      return _nodeModeType.nodeModeType.IDONAC;

    case "Hexosamine".toLowerCase():
      return _nodeModeType.nodeModeType.HEXOSAMINE;

    case "GlcN".toLowerCase():
      return _nodeModeType.nodeModeType.GLCN;

    case "ManN".toLowerCase():
      return _nodeModeType.nodeModeType.MANN;

    case "GalN".toLowerCase():
      return _nodeModeType.nodeModeType.GALN;

    case "GulN".toLowerCase():
      return _nodeModeType.nodeModeType.GULN;

    case "AltN".toLowerCase():
      return _nodeModeType.nodeModeType.ALTN;

    case "AllN".toLowerCase():
      return _nodeModeType.nodeModeType.ALLN;

    case "TalN".toLowerCase():
      return _nodeModeType.nodeModeType.TALN;

    case "IdoN".toLowerCase():
      return _nodeModeType.nodeModeType.IDON;

    case "Hexuronate".toLowerCase():
      return _nodeModeType.nodeModeType.HEXURONATE;

    case "GlcA".toLowerCase():
      return _nodeModeType.nodeModeType.GLCA;

    case "ManA".toLowerCase():
      return _nodeModeType.nodeModeType.MANA;

    case "GalA".toLowerCase():
      return _nodeModeType.nodeModeType.GALA;

    case "GulA".toLowerCase():
      return _nodeModeType.nodeModeType.GULA;

    case "AltA".toLowerCase():
      return _nodeModeType.nodeModeType.ALTA;

    case "AllA".toLowerCase():
      return _nodeModeType.nodeModeType.ALLA;

    case "TalA".toLowerCase():
      return _nodeModeType.nodeModeType.TALA;

    case "IdoA".toLowerCase():
      return _nodeModeType.nodeModeType.IDOA;

    case "Deoxyhexose".toLowerCase():
      return _nodeModeType.nodeModeType.DEOXYHEXOSE;

    case "Qui".toLowerCase():
      return _nodeModeType.nodeModeType.QUI;

    case "Rha".toLowerCase():
      return _nodeModeType.nodeModeType.RHA;

    case "6dGul".toLowerCase():
      return _nodeModeType.nodeModeType.D6GUL;

    case "6dAlt".toLowerCase():
      return _nodeModeType.nodeModeType.D6ALT;

    case "6dTal".toLowerCase():
      return _nodeModeType.nodeModeType.D6TAL;

    case "Fuc".toLowerCase():
      return _nodeModeType.nodeModeType.FUC;

    case "DeoxyhexNAc".toLowerCase():
      return _nodeModeType.nodeModeType.DEOXYHEXNAC;

    case "QuiNAc".toLowerCase():
      return _nodeModeType.nodeModeType.QUINAC;

    case "RhaNAc".toLowerCase():
      return _nodeModeType.nodeModeType.RHANAC;

    case "6dAltNAc".toLowerCase():
      return _nodeModeType.nodeModeType.D6ALTNAC;

    case "6dTalNAc".toLowerCase():
      return _nodeModeType.nodeModeType.D6TALNAC;

    case "FucNAc".toLowerCase():
      return _nodeModeType.nodeModeType.FUCNAC;

    case "Di-deoxyhexose".toLowerCase():
      return _nodeModeType.nodeModeType.DI_DEOXYHEXOSE;

    case "Oli".toLowerCase():
      return _nodeModeType.nodeModeType.OLI;

    case "Tyv".toLowerCase():
      return _nodeModeType.nodeModeType.TYV;

    case "Abe".toLowerCase():
      return _nodeModeType.nodeModeType.ABE;

    case "Par".toLowerCase():
      return _nodeModeType.nodeModeType.PAR;

    case "Dig".toLowerCase():
      return _nodeModeType.nodeModeType.DIG;

    case "Col".toLowerCase():
      return _nodeModeType.nodeModeType.COL;

    case "Pentose".toLowerCase():
      return _nodeModeType.nodeModeType.PENTOSE;

    case "Ara".toLowerCase():
      return _nodeModeType.nodeModeType.ARA;

    case "Lyx".toLowerCase():
      return _nodeModeType.nodeModeType.LYX;

    case "Xyl".toLowerCase():
      return _nodeModeType.nodeModeType.XYL;

    case "Rib".toLowerCase():
      return _nodeModeType.nodeModeType.RIB;

    case "Deoxynonulosonate".toLowerCase():
      return _nodeModeType.nodeModeType.DEOXYNONULOSONATE;

    case "Kdn".toLowerCase():
      return _nodeModeType.nodeModeType.KDN;

    case "Neu5Ac".toLowerCase():
      return _nodeModeType.nodeModeType.NEU5AC;

    case "Neu5Gc".toLowerCase():
      return _nodeModeType.nodeModeType.NEU5GC;

    case "Neu".toLowerCase():
      return _nodeModeType.nodeModeType.NEU;

    case "Sia".toLowerCase():
      return _nodeModeType.nodeModeType.SIA;

    case "Di-deoxynonulosonate".toLowerCase():
      return _nodeModeType.nodeModeType.DI_DEOXYNONULOSONATE;

    case "Pse".toLowerCase():
      return _nodeModeType.nodeModeType.PSE;

    case "Leg".toLowerCase():
      return _nodeModeType.nodeModeType.LEG;

    case "Aci".toLowerCase():
      return _nodeModeType.nodeModeType.ACI;

    case "4eLeg".toLowerCase():
      return _nodeModeType.nodeModeType.E4LEG;

    case "Unknown".toLowerCase():
      return _nodeModeType.nodeModeType.UNKNOWN;

    case "Bac".toLowerCase():
      return _nodeModeType.nodeModeType.BAC;

    case "LDmanHep".toLowerCase():
      return _nodeModeType.nodeModeType.LDMANHEP;

    case "Kdo".toLowerCase():
      return _nodeModeType.nodeModeType.KDO;

    case "Dha".toLowerCase():
      return _nodeModeType.nodeModeType.DHA;

    case "DDmanHep".toLowerCase():
      return _nodeModeType.nodeModeType.DDMANHEP;

    case "MurNAc".toLowerCase():
      return _nodeModeType.nodeModeType.MURNAC;

    case "MurNGc".toLowerCase():
      return _nodeModeType.nodeModeType.MURNGC;

    case "Mur".toLowerCase():
      return _nodeModeType.nodeModeType.MUR;

    case "Assigned".toLowerCase():
      return _nodeModeType.nodeModeType.ASSIGNED;

    case "Api".toLowerCase():
      return _nodeModeType.nodeModeType.API;

    case "Fru".toLowerCase():
      return _nodeModeType.nodeModeType.FRU;

    case "Tag".toLowerCase():
      return _nodeModeType.nodeModeType.TAG;

    case "Sor".toLowerCase():
      return _nodeModeType.nodeModeType.SOR;

    case "Psi".toLowerCase():
      return _nodeModeType.nodeModeType.PSI;

    default:
      return _nodeModeType.nodeModeType.NOT_SELECTED;
  }
}

function nodeType(target) {
  switch (target) {
    case _nodeModeType.nodeModeType.HEXOSE:
    case _nodeModeType.nodeModeType.GLC:
    case _nodeModeType.nodeModeType.MAN:
    case _nodeModeType.nodeModeType.GAL:
    case _nodeModeType.nodeModeType.GUL:
    case _nodeModeType.nodeModeType.ALT:
    case _nodeModeType.nodeModeType.ALL:
    case _nodeModeType.nodeModeType.TAL:
    case _nodeModeType.nodeModeType.IDO:
      return _nodeModeType.nodeModeType.HEXOSE;

    case _nodeModeType.nodeModeType.HEXNAC:
    case _nodeModeType.nodeModeType.GLCNAC:
    case _nodeModeType.nodeModeType.MANNAC:
    case _nodeModeType.nodeModeType.GALNAC:
    case _nodeModeType.nodeModeType.GULNAC:
    case _nodeModeType.nodeModeType.ALTNAC:
    case _nodeModeType.nodeModeType.ALLNAC:
    case _nodeModeType.nodeModeType.TALNAC:
    case _nodeModeType.nodeModeType.IDONAC:
      return _nodeModeType.nodeModeType.HEXNAC;

    case _nodeModeType.nodeModeType.HEXOSAMINE:
    case _nodeModeType.nodeModeType.GLCN:
    case _nodeModeType.nodeModeType.MANN:
    case _nodeModeType.nodeModeType.GALN:
    case _nodeModeType.nodeModeType.GULN:
    case _nodeModeType.nodeModeType.ALTN:
    case _nodeModeType.nodeModeType.ALLN:
    case _nodeModeType.nodeModeType.TALN:
    case _nodeModeType.nodeModeType.IDON:
      return _nodeModeType.nodeModeType.HEXOSAMINE;

    case _nodeModeType.nodeModeType.HEXURONATE:
    case _nodeModeType.nodeModeType.GLCA:
    case _nodeModeType.nodeModeType.MANA:
    case _nodeModeType.nodeModeType.GALA:
    case _nodeModeType.nodeModeType.GULA:
    case _nodeModeType.nodeModeType.ALTA:
    case _nodeModeType.nodeModeType.ALLA:
    case _nodeModeType.nodeModeType.TALA:
    case _nodeModeType.nodeModeType.IDOA:
      return _nodeModeType.nodeModeType.HEXURONATE;

    case _nodeModeType.nodeModeType.DEOXYHEXOSE:
    case _nodeModeType.nodeModeType.QUI:
    case _nodeModeType.nodeModeType.RHA:
    case _nodeModeType.nodeModeType.D6GUL:
    case _nodeModeType.nodeModeType.D6ALT:
    case _nodeModeType.nodeModeType.D6TAL:
    case _nodeModeType.nodeModeType.FUC:
      return _nodeModeType.nodeModeType.DEOXYHEXOSE;

    case _nodeModeType.nodeModeType.DEOXYHEXNAC:
    case _nodeModeType.nodeModeType.QUINAC:
    case _nodeModeType.nodeModeType.RHANAC:
    case _nodeModeType.nodeModeType.D6ALTNAC:
    case _nodeModeType.nodeModeType.D6TALNAC:
    case _nodeModeType.nodeModeType.FUCNAC:
      return _nodeModeType.nodeModeType.DEOXYHEXNAC;

    case _nodeModeType.nodeModeType.DI_DEOXYHEXOSE:
    case _nodeModeType.nodeModeType.OLI:
    case _nodeModeType.nodeModeType.TYV:
    case _nodeModeType.nodeModeType.ABE:
    case _nodeModeType.nodeModeType.PAR:
    case _nodeModeType.nodeModeType.DIG:
    case _nodeModeType.nodeModeType.COL:
      return _nodeModeType.nodeModeType.DI_DEOXYHEXOSE;

    case _nodeModeType.nodeModeType.PENTOSE:
    case _nodeModeType.nodeModeType.ARA:
    case _nodeModeType.nodeModeType.LYX:
    case _nodeModeType.nodeModeType.XYL:
    case _nodeModeType.nodeModeType.RIB:
      return _nodeModeType.nodeModeType.PENTOSE;

    case _nodeModeType.nodeModeType.DEOXYNONULOSONATE:
    case _nodeModeType.nodeModeType.KDN:
    case _nodeModeType.nodeModeType.NEU5AC:
    case _nodeModeType.nodeModeType.NEU5GC:
    case _nodeModeType.nodeModeType.NEU:
    case _nodeModeType.nodeModeType.SIA:
      return _nodeModeType.nodeModeType.DEOXYNONULOSONATE;

    case _nodeModeType.nodeModeType.DI_DEOXYNONULOSONATE:
    case _nodeModeType.nodeModeType.PSE:
    case _nodeModeType.nodeModeType.LEG:
    case _nodeModeType.nodeModeType.ACI:
    case _nodeModeType.nodeModeType.E4LEG:
      return _nodeModeType.nodeModeType.DI_DEOXYNONULOSONATE;

    case _nodeModeType.nodeModeType.UNKNOWN:
    case _nodeModeType.nodeModeType.BAC:
    case _nodeModeType.nodeModeType.LDMANHEP:
    case _nodeModeType.nodeModeType.KDO:
    case _nodeModeType.nodeModeType.DHA:
    case _nodeModeType.nodeModeType.DDMANHEP:
    case _nodeModeType.nodeModeType.MURNAC:
    case _nodeModeType.nodeModeType.MURNGC:
    case _nodeModeType.nodeModeType.MUR:
      return _nodeModeType.nodeModeType.UNKNOWN;

    case _nodeModeType.nodeModeType.ASSIGNED:
    case _nodeModeType.nodeModeType.API:
    case _nodeModeType.nodeModeType.FRU:
    case _nodeModeType.nodeModeType.TAG:
    case _nodeModeType.nodeModeType.SOR:
    case _nodeModeType.nodeModeType.PSI:
      return _nodeModeType.nodeModeType.ASSIGNED;

    default:
      return _nodeModeType.nodeModeType.NOT_SELECTED;
  }
}

var getSymbolColor = exports.getSymbolColor = function getSymbolColor(SNFGNameSymbol) {
  switch (SNFGNameSymbol) {
    case _nodeModeType.nodeModeType.HEXOSE:
    case _nodeModeType.nodeModeType.HEXNAC:
    case _nodeModeType.nodeModeType.HEXOSAMINE:
    case _nodeModeType.nodeModeType.HEXURONATE:
    case _nodeModeType.nodeModeType.DEOXYHEXOSE:
    case _nodeModeType.nodeModeType.DEOXYHEXNAC:
    case _nodeModeType.nodeModeType.DI_DEOXYHEXOSE:
    case _nodeModeType.nodeModeType.PENTOSE:
    case _nodeModeType.nodeModeType.DEOXYNONULOSONATE:
    case _nodeModeType.nodeModeType.DI_DEOXYNONULOSONATE:
    case _nodeModeType.nodeModeType.UNKNOWN:
    case _nodeModeType.nodeModeType.ASSIGNED:
      return (0, _getColor.getColor)("white");

    case _nodeModeType.nodeModeType.GLC:
    case _nodeModeType.nodeModeType.GLCNAC:
    case _nodeModeType.nodeModeType.GLCN:
    case _nodeModeType.nodeModeType.GLCA:
    case _nodeModeType.nodeModeType.QUI:
    case _nodeModeType.nodeModeType.QUINAC:
    case _nodeModeType.nodeModeType.OLI:
    case _nodeModeType.nodeModeType.BAC:
    case _nodeModeType.nodeModeType.API:
      return (0, _getColor.getColor)("blue");

    case _nodeModeType.nodeModeType.MAN:
    case _nodeModeType.nodeModeType.MANNAC:
    case _nodeModeType.nodeModeType.MANN:
    case _nodeModeType.nodeModeType.MANA:
    case _nodeModeType.nodeModeType.RHA:
    case _nodeModeType.nodeModeType.RHANAC:
    case _nodeModeType.nodeModeType.TYV:
    case _nodeModeType.nodeModeType.ARA:
    case _nodeModeType.nodeModeType.KDN:
    case _nodeModeType.nodeModeType.PSE:
    case _nodeModeType.nodeModeType.LDMANHEP:
    case _nodeModeType.nodeModeType.FRU:
      return (0, _getColor.getColor)("green");

    case _nodeModeType.nodeModeType.GAL:
    case _nodeModeType.nodeModeType.GALNAC:
    case _nodeModeType.nodeModeType.GALN:
    case _nodeModeType.nodeModeType.GALA:
    case _nodeModeType.nodeModeType.LYX:
    case _nodeModeType.nodeModeType.LEG:
    case _nodeModeType.nodeModeType.KDO:
    case _nodeModeType.nodeModeType.TAG:
      return (0, _getColor.getColor)("yellow");

    case _nodeModeType.nodeModeType.GUL:
    case _nodeModeType.nodeModeType.GULNAC:
    case _nodeModeType.nodeModeType.GULN:
    case _nodeModeType.nodeModeType.GULA:
    case _nodeModeType.nodeModeType.D6GUL:
    case _nodeModeType.nodeModeType.ABE:
    case _nodeModeType.nodeModeType.XYL:
    case _nodeModeType.nodeModeType.DHA:
    case _nodeModeType.nodeModeType.SOR:
      return (0, _getColor.getColor)("orange");

    case _nodeModeType.nodeModeType.ALT:
    case _nodeModeType.nodeModeType.ALTNAC:
    case _nodeModeType.nodeModeType.ALTN:
    case _nodeModeType.nodeModeType.ALTA:
    case _nodeModeType.nodeModeType.D6ALT:
    case _nodeModeType.nodeModeType.D6ALTNAC:
    case _nodeModeType.nodeModeType.PAR:
    case _nodeModeType.nodeModeType.RIB:
    case _nodeModeType.nodeModeType.ACI:
    case _nodeModeType.nodeModeType.DDMANHEP:
    case _nodeModeType.nodeModeType.PSI:
      return (0, _getColor.getColor)("pink");

    case _nodeModeType.nodeModeType.ALL:
    case _nodeModeType.nodeModeType.ALLNAC:
    case _nodeModeType.nodeModeType.ALLN:
    case _nodeModeType.nodeModeType.ALLA:
    case _nodeModeType.nodeModeType.DIG:
    case _nodeModeType.nodeModeType.NEU5AC:
    case _nodeModeType.nodeModeType.MURNAC:
      return (0, _getColor.getColor)("purple");

    case _nodeModeType.nodeModeType.TAL:
    case _nodeModeType.nodeModeType.TALNAC:
    case _nodeModeType.nodeModeType.TALN:
    case _nodeModeType.nodeModeType.TALA:
    case _nodeModeType.nodeModeType.D6TAL:
    case _nodeModeType.nodeModeType.D6TALNAC:
    case _nodeModeType.nodeModeType.COL:
    case _nodeModeType.nodeModeType.NEU5GC:
    case _nodeModeType.nodeModeType.E4LEG:
    case _nodeModeType.nodeModeType.MURNGC:
      return (0, _getColor.getColor)("light_blue");

    case _nodeModeType.nodeModeType.IDO:
    case _nodeModeType.nodeModeType.IDONAC:
    case _nodeModeType.nodeModeType.IDON:
    case _nodeModeType.nodeModeType.IDOA:
    case _nodeModeType.nodeModeType.NEU:
    case _nodeModeType.nodeModeType.MUR:
      return (0, _getColor.getColor)("brown");

    case _nodeModeType.nodeModeType.FUC:
    case _nodeModeType.nodeModeType.FUCNAC:
    case _nodeModeType.nodeModeType.SIA:
      return (0, _getColor.getColor)("red");

    default:
      return "";
  }
};

/***/ }),

/***/ "./js/nodeModeType.js":
/*!****************************!*\
  !*** ./js/nodeModeType.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var nodeModeType = exports.nodeModeType = {
  NOT_SELECTED: Symbol(),
  HEXOSE: Symbol(),
  GLC: Symbol(),
  MAN: Symbol(),
  GAL: Symbol(),
  GUL: Symbol(),
  ALT: Symbol(),
  ALL: Symbol(),
  TAL: Symbol(),
  IDO: Symbol(),
  HEXNAC: Symbol(),
  GLCNAC: Symbol(),
  MANNAC: Symbol(),
  GALNAC: Symbol(),
  GULNAC: Symbol(),
  ALTNAC: Symbol(),
  ALLNAC: Symbol(),
  TALNAC: Symbol(),
  IDONAC: Symbol(),
  HEXOSAMINE: Symbol(),
  GLCN: Symbol(),
  MANN: Symbol(),
  GALN: Symbol(),
  GULN: Symbol(),
  ALTN: Symbol(),
  ALLN: Symbol(),
  TALN: Symbol(),
  IDON: Symbol(),
  HEXURONATE: Symbol(),
  GLCA: Symbol(),
  MANA: Symbol(),
  GALA: Symbol(),
  GULA: Symbol(),
  ALTA: Symbol(),
  ALLA: Symbol(),
  TALA: Symbol(),
  IDOA: Symbol(),
  DEOXYHEXOSE: Symbol(),
  QUI: Symbol(),
  RHA: Symbol(),
  D6GUL: Symbol(),
  D6ALT: Symbol(),
  D6TAL: Symbol(),
  FUC: Symbol(),
  DEOXYHEXNAC: Symbol(),
  QUINAC: Symbol(),
  RHANAC: Symbol(),
  D6ALTNAC: Symbol(),
  D6TALNAC: Symbol(),
  FUCNAC: Symbol(),
  DI_DEOXYHEXOSE: Symbol(),
  OLI: Symbol(),
  TYV: Symbol(),
  ABE: Symbol(),
  PAR: Symbol(),
  DIG: Symbol(),
  COL: Symbol(),
  PENTOSE: Symbol(),
  ARA: Symbol(),
  LYX: Symbol(),
  XYL: Symbol(),
  RIB: Symbol(),
  DEOXYNONULOSONATE: Symbol(),
  KDN: Symbol(),
  NEU5AC: Symbol(),
  NEU5GC: Symbol(),
  NEU: Symbol(),
  SIA: Symbol(),
  DI_DEOXYNONULOSONATE: Symbol(),
  PSE: Symbol(),
  LEG: Symbol(),
  ACI: Symbol(),
  E4LEG: Symbol(),
  UNKNOWN: Symbol(),
  BAC: Symbol(),
  LDMANHEP: Symbol(),
  KDO: Symbol(),
  DHA: Symbol(),
  DDMANHEP: Symbol(),
  MURNAC: Symbol(),
  MURNGC: Symbol(),
  MUR: Symbol(),
  ASSIGNED: Symbol(),
  API: Symbol(),
  FRU: Symbol(),
  TAG: Symbol(),
  SOR: Symbol(),
  PSI: Symbol()
};

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SVG_converter = __webpack_require__(/*! ./SVG_converter */ "./SVG_converter.js");

var http = __webpack_require__(/*! http */ "http");

console.log("start\n");
var server = http.createServer(function (req, res) {
  console.log("connected");

  if (req.method == "POST") {
    var body = ""; // data受信イベントの発生時に断片データ(chunk)を取得
    // body 変数に連結

    req.on("data", function (chunk) {
      body += chunk;
    }); // 受信完了(end)イベント発生時

    req.on("end", function () {
      var result = (0, _SVG_converter.SVG_convert)(body);
      console.log("finish");
      res.end("\n" + result + "\n");
    });
  }
}).listen(1337, "0.0.0.0");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map