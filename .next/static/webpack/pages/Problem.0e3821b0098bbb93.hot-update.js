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

/***/ "./pages/Problem/index.jsx":
/*!*********************************!*\
  !*** ./pages/Problem/index.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavBar */ \"./components/NavBar/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProblemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProblemList */ \"./components/ProblemList/index.jsx\");\n/* harmony import */ var _components_ProblemList_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ProblemList/data */ \"./components/ProblemList/data.js\");\n/* harmony import */ var _components_ProblemList_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_ProblemList_data__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Problem() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), problemList = ref[0], setProblemList = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var questionItems = document.querySelectorAll('#question-list>li');\n        questionItems.forEach(function(element) {\n            var elementHeight = element.clientHeight;\n            var elementToggle = element.querySelector('.question-list__title');\n            var contentHeight = element.querySelector('.question-list__content').clientHeight;\n            var titleHeight = elementHeight - contentHeight;\n            element.classList.add('active');\n            element.style.height = \"\".concat(elementHeight, \"px\");\n            elementToggle.addEventListener('click', function() {\n                element.classList.value === 'active' ? element.style.height = \"\".concat(titleHeight, \"px\") : element.style.height = \"\".concat(elementHeight, \"px\");\n                element.classList.toggle('active');\n            });\n        });\n        //資料傳入\n        setProblemList(_components_ProblemList_data__WEBPACK_IMPORTED_MODULE_5__.data);\n    }, []);\n    //常見問題展開收合(初始預設為全部展開)\n    //展開高度\n    console.log(problemList);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"blockquote\", {\n                className: \"body-background body-background--page\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                    lineNumber: 37\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                    lineNumber: 38\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n                className: \"header\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                    lineNumber: 39\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"article\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                    lineNumber: 40\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                    className: \"container__main\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                        lineNumber: 41\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"board-background\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                lineNumber: 42\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"board-background__label\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                        lineNumber: 43\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"board-background__top\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                        lineNumber: 44\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"board-background__bottom\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                        lineNumber: 45\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"board-background__left\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                        lineNumber: 46\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"board-background__right\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                        lineNumber: 47\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                            className: \"container__title\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                lineNumber: 49\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"container__sub\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                        lineNumber: 50\n                                    },\n                                    __self: this,\n                                    children: \"FAQ\"\n                                }),\n                                \"常見問題\"\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                            className: \"container__caption\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                lineNumber: 52\n                            },\n                            __self: this,\n                            children: \"點選消息展開詳細資訊\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                            id: \"question-list\",\n                            className: \"question-list\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                lineNumber: 54\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ProblemList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                problemList: problemList,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                                    lineNumber: 55\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\waway\\\\OneDrive\\\\桌面\\\\school\\\\pages\\\\Problem\\\\index.jsx\",\n                    lineNumber: 129\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s(Problem, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Problem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Problem);\nvar _c;\n$RefreshReg$(_c, \"Problem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwrREFBVztnQ0FBQ0csV0FBVyxFQUFFQSxXQUFXOzs7Ozs7Ozs7OztpRkEwRTFDUiwwREFBTTs7Ozs7Ozs7O0FBR2IsQ0FBQztHQTlIUU8sT0FBTztLQUFQQSxPQUFPO0FBK0hoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1Byb2JsZW0vaW5kZXguanN4P2NhNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2JsZW1MaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvYmxlbUxpc3QnO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9ibGVtTGlzdC9kYXRhJztcclxuZnVuY3Rpb24gUHJvYmxlbSgpIHtcclxuICBjb25zdCBbcHJvYmxlbUxpc3QsIHNldFByb2JsZW1MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlc3Rpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNxdWVzdGlvbi1saXN0PmxpJyk7XHJcblxyXG4gICAgcXVlc3Rpb25JdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgY29uc3QgZWxlbWVudFRvZ2dsZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9uLWxpc3RfX3RpdGxlJyk7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJy5xdWVzdGlvbi1saXN0X19jb250ZW50JyxcclxuICAgICAgKS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHRpdGxlSGVpZ2h0ID0gZWxlbWVudEhlaWdodCAtIGNvbnRlbnRIZWlnaHQ7XHJcblxyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2VsZW1lbnRIZWlnaHR9cHhgO1xyXG5cclxuICAgICAgZWxlbWVudFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC52YWx1ZSA9PT0gJ2FjdGl2ZSdcclxuICAgICAgICAgID8gKGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGl0bGVIZWlnaHR9cHhgKVxyXG4gICAgICAgICAgOiAoZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50SGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8v6LOH5paZ5YKz5YWlXHJcbiAgICBzZXRQcm9ibGVtTGlzdChkYXRhKTtcclxuICB9LCBbXSk7XHJcbiAgLy/luLjopovllY/poYzlsZXplovmlLblkIgo5Yid5aeL6aCQ6Kit54K65YWo6YOo5bGV6ZaLKVxyXG4gIC8v5bGV6ZaL6auY5bqmXHJcbiAgY29uc29sZS5sb2cocHJvYmxlbUxpc3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9J2JvZHktYmFja2dyb3VuZCBib2R5LWJhY2tncm91bmQtLXBhZ2UnPjwvYmxvY2txdW90ZT5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz48L2hlYWRlcj5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyX19tYWluJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2FyZC1iYWNrZ3JvdW5kJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdib2FyZC1iYWNrZ3JvdW5kX19sYWJlbCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JvYXJkLWJhY2tncm91bmRfX3RvcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JvYXJkLWJhY2tncm91bmRfX2JvdHRvbSc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JvYXJkLWJhY2tncm91bmRfX2xlZnQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdib2FyZC1iYWNrZ3JvdW5kX19yaWdodCc+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWluZXJfX3RpdGxlJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb250YWluZXJfX3N1Yic+RkFRPC9zcGFuPuW4uOimi+WVj+mhjFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NvbnRhaW5lcl9fY2FwdGlvbic+6bue6YG45raI5oGv5bGV6ZaL6Kmz57Sw6LOH6KiKPC9oMj5cclxuXHJcbiAgICAgICAgICA8dWwgaWQ9J3F1ZXN0aW9uLWxpc3QnIGNsYXNzTmFtZT0ncXVlc3Rpb24tbGlzdCc+XHJcbiAgICAgICAgICAgIDxQcm9ibGVtTGlzdCBwcm9ibGVtTGlzdD17cHJvYmxlbUxpc3R9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X190aXRsZSc+5oiR6KaB5aaC5L2V6YCy5YWl6YGK5oiy77yfPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncXVlc3Rpb24tbGlzdF9fY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICDlj6/pgI/pgY7nmbvlhaXopqrluKvnlJ/lubPlj7DvvIzlvp7lubPlj7DkuIrpgLLlhaXpgYrmiLLntrLnq5nvvIzoqbPntLDnmbvlhaXmlrnlvI/lj6/lj4PogINcclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vcHRzLm50cGMuZWR1LnR3L2RvYy9tYW51YWwuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg6Kaq5bir55Sf5bmz5Y+w5pON5L2c5omL5YaKXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICDjgIJcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3F1ZXN0aW9uLWxpc3RfX3RpdGxlJz5cclxuICAgICAgICAgICAgICAgIOaIkeaDs+imgeWPg+WKoOmBiuaIsu+8jOS9huaIkeaykuacieimquW4q+eUn+W5s+WPsOW4s+iZn+OAglxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3F1ZXN0aW9uLWxpc3RfX2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgMTEw5bm05bqm5paw5YyX5biC5YGl5bq36K2Y6IO956u26LO977yM6aaW5bqm55m76YyE5paw5YyX5biC6Kaq5bir55Sf5bmz5Y+w77yM5bCH5YSq5YWI6ZaL5pS+5LqI5pOB5pyJ6Kaq5bir55Sf5bmz5Y+w5biz6Jmf5LmL5bir55Sf5oiW5a626ZW377yM5a626ZW35biz6Jmf55Sz6KuL5pa55byP5Y+v5Y+D6ICDXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3B0cy5udHBjLmVkdS50dy9kb2MvbWFudWFsLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIOimquW4q+eUn+W5s+WPsOaTjeS9nOaJi+WGilxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAg44CCXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X190aXRsZSc+XHJcbiAgICAgICAgICAgICAgICDlgIvkurrmiLDoiIflnJjpq5TmiLDnmoTlt67liKXlnKjlk6roo6HvvJ9cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X19jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIOWAi+S6uuaIsOmWi+aUvuaZgumWk+eCujExMeW5tDHmnIgxMOaXpeiHszTmnIgyNOaXpe+8jOWFt+acieaWsOWMl+W4guimquW4q+eUn+W5s+WPsOS5i+acg+WToe+8jOS4jemZkOW5tOm9oeiIh+aAp+WIpeeahuWPr+WPg+iIh++8m+WcmOmrlOaIsOmWi+aUvuaZgumWk+eCujExMeW5tDLmnIgxNOaXpeiHszTmnIgyOOaXpe+8jOWDhemWi+aUvue1puWwseiugOacrOW4guWci+Wwj+S5izTlubTntJroh7M25bm057Sa5Zyo5a245a2455Sf57WE6ZqK5Y+D6IiH44CCXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X190aXRsZSc+XHJcbiAgICAgICAgICAgICAgICDlgIvkurrmiLDopoHlpoLkvZXlj4PliqDmir3njY7vvJ9cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X19jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIOaWvOa0u+WLleaZgumWk+mbhum9ijE255O26Kej6Jel77yIMTbpoYbpoZ7lnovmmJ/nkIPnmoQz5YCL6Zec5Y2h6YO95oyR5oiw5oiQ5Yqf77yJ77yM5Y2z5Y+v542y5b6X5oq9542O6LOH5qC844CCXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X190aXRsZSc+XHJcbiAgICAgICAgICAgICAgICDmoKHlnJLliJ3os73opoHlpoLkvZXlj4PliqDmir3njY7vvJ9cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X19jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIOaWvOWIneizveacn+mWk+maiuS8jemBiuaIsuasoeaVuOmBlDMw5qyh77yM5omA5Lul6ZqK5ZOh77yI5ZCr5YCZ6KOc6ZqK5ZOh77yJ55qG5pyJ5oq9542O6LOH5qC85ZaU77yBXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X190aXRsZSc+XHJcbiAgICAgICAgICAgICAgICDmiJHopoHlpoLkvZXlj4PliqDnqY3pu57otqPmtLvli5XvvJ9cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdWVzdGlvbi1saXN0X19jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIOaWvOWAi+S6uuaIsOmWi+aUvuaZgumWk++8jOWPr+mAj+mBjueZu+WFpemBiuaIsuOAgeWujOaIkOmBiuaIsuOAgeiSkOmbhuaIkOWwseino+iXpeetieaWueW8j+e0r+ioiOimquW4q+eUn+W5s+WPsOWtuOe/kuepjem7nu+8jOavjuS6uuaWvOmBiuaIsuacn+mWk+acgOWkmuWPr+eNsuW+lzcxNem7numBiuaIsuepjem7nu+8jOavjzEw6bue6YGK5oiy56mN6bue5Y+v6YCP6YGO5YWM5o+bMzAw6bue5pyD5ZOh6bue5pW477yM6bue562J5YC85paw5Y+w5bmjMeWFg++8jOWPr+aWvOWFqOWutuS+v+WIqei2heWVhkFQUOaPm+izvOWTgemgheOAguepjem7nuaWueW8j+WPr+WPg+iAg+ips+e0sOWFjOaPm+a1geeoi+WPr+WPg+iAg1xyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9uZXZlbnQuZmFtaWx5LmNvbS50dy9mYW1pX2xlYXJuaW5ncG9pbnRzLydcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg5YWo5a625YWM6bue6Kqq5piOXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICDjgIJcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9ibGVtO1xyXG4iXSwibmFtZXMiOlsiRm9vdGVyIiwiTmF2QmFyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2JsZW1MaXN0IiwiZGF0YSIsIlByb2JsZW0iLCJwcm9ibGVtTGlzdCIsInNldFByb2JsZW1MaXN0IiwicXVlc3Rpb25JdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiZWxlbWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImVsZW1lbnRUb2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEhlaWdodCIsInRpdGxlSGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwiYmxvY2txdW90ZSIsImNsYXNzTmFtZSIsImhlYWRlciIsImFydGljbGUiLCJtYWluIiwiZGl2Iiwic3BhbiIsImgxIiwiaDIiLCJ1bCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Problem/index.jsx\n");

/***/ })

});