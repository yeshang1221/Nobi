"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Problem",{

/***/ "./components/ProblemList/index.jsx":
/*!******************************************!*\
  !*** ./components/ProblemList/index.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./components/ProblemList/data.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction ProblemData() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), problem = ref[0], setProblem = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setProblem(_data__WEBPACK_IMPORTED_MODULE_1__.data);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _data__WEBPACK_IMPORTED_MODULE_1__.data.map(function(v, i) {\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\components\\\\ProblemList\\\\index.jsx\",\n                    lineNumber: 11\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"question-list__title\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\components\\\\ProblemList\\\\index.jsx\",\n                            lineNumber: 12\n                        },\n                        __self: _this,\n                        children: v.title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                        className: \"question-list__content\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\components\\\\ProblemList\\\\index.jsx\",\n                            lineNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            v.answer,\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: v.link,\n                                target: \"_blank\",\n                                rel: \"noreferrer\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\components\\\\ProblemList\\\\index.jsx\",\n                                    lineNumber: 15\n                                },\n                                __self: _this,\n                                children: v.alt\n                            }),\n                            \"。\"\n                        ]\n                    })\n                ]\n            });\n        })\n    }));\n}\n_s(ProblemData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ProblemData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemData);\nvar _c;\n$RefreshReg$(_c, \"ProblemData\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2JsZW1MaXN0L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFDcUI7O1NBQ3pDSSxXQUFXLEdBQUcsQ0FBQzs7O0lBQ3RCLEdBQUssQ0FBeUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENHLE9BQU8sR0FBZ0JILEdBQVksS0FBMUJJLFVBQVUsR0FBSUosR0FBWTtJQUMxQ0MsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmRyxVQUFVLENBQUNOLHVDQUFJO0lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNO2tCQUVEQSwyQ0FBUSxDQUFDLFFBQVEsQ0FBUFEsQ0FBQyxFQUFFQyxDQUFDLEVBQUssQ0FBQztrRkFDbEJDLENBQUU7Ozs7Ozs7eUZBQ0FDLENBQUk7d0JBQUNDLFNBQVMsRUFBQyxDQUFzQjs7Ozs7O2tDQUFFSixDQUFDLENBQUNLLEtBQUs7OzBGQUM5Q0YsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFDLENBQXdCOzs7Ozs7OzRCQUNyQ0osQ0FBQyxDQUFDTSxNQUFNO2lHQUNSQyxDQUFDO2dDQUFDQyxJQUFJLEVBQUVSLENBQUMsQ0FBQ1MsSUFBSTtnQ0FBRUMsTUFBTSxFQUFDLENBQVE7Z0NBQUNDLEdBQUcsRUFBQyxDQUFZOzs7Ozs7MENBQzlDWCxDQUFDLENBQUNZLEdBQUc7OzRCQUNKLENBRU47Ozs7O1FBRUosQ0FBQzs7QUFHUCxDQUFDO0dBckJRaEIsV0FBVztLQUFYQSxXQUFXO0FBc0JwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvYmxlbUxpc3QvaW5kZXguanN4PzVhZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5mdW5jdGlvbiBQcm9ibGVtRGF0YSgpIHtcclxuICBjb25zdCBbcHJvYmxlbSwgc2V0UHJvYmxlbV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFByb2JsZW0oZGF0YSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGF0YS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3F1ZXN0aW9uLWxpc3RfX3RpdGxlJz57di50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3F1ZXN0aW9uLWxpc3RfX2NvbnRlbnQnPlxyXG4gICAgICAgICAgICB7di5hbnN3ZXJ9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e3YubGlua30gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcic+XHJcbiAgICAgICAgICAgICAge3YuYWx0fVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIOOAglxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+O1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvYmxlbURhdGE7XHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2JsZW1EYXRhIiwicHJvYmxlbSIsInNldFByb2JsZW0iLCJtYXAiLCJ2IiwiaSIsImxpIiwic3BhbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiYW5zd2VyIiwiYSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProblemList/index.jsx\n");

/***/ })

});