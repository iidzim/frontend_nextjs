"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./comps/Navbar.jsx":
/*!**************************!*\
  !*** ./comps/Navbar.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Searchbar */ \"./comps/Searchbar.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), opened = ref[0], setOpened = ref[1];\n    var title = opened ? \"Close navigation\" : \"Open navigation\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                            src: \"/logo.png\",\n                            width: 60,\n                            height: 60\n                        }, void 0, false, {\n                            fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Searchbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                width: 140\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                fullWidth: true,\n                                variant: \"outline\",\n                                color: \"gray\",\n                                children: \"sign up / log in\"\n                            }, void 0, false, {\n                                fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Burger, {\n                                opened: opened,\n                                onClick: function() {\n                                    return setOpened(function(o) {\n                                        return !o;\n                                    });\n                                },\n                                title: title\n                            }, void 0, false, {\n                                fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/iidzim/Desktop/we/comps/Navbar.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9OYXZiYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFBc0Q7QUFDckI7QUFDZ0I7QUFDYjtBQUVwQyxJQUFNTSxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBNEJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENJLE1BQU0sR0FBZUosR0FBZSxHQUE5QixFQUFFSyxTQUFTLEdBQUlMLEdBQWUsR0FBbkI7SUFDeEIsSUFBTU0sS0FBSyxHQUFHRixNQUFNLEdBQUcsa0JBQWtCLEdBQUcsaUJBQWlCO0lBQzdELHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRVAseUVBQWE7a0JBQzNCLDRFQUFDUyxJQUFFOzs4QkFDRCw4REFBQ0MsSUFBRTs4QkFDRCw0RUFBQ0MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLEdBQUc7a0NBQ1QsNEVBQUNkLGdEQUFLOzRCQUFDZSxHQUFHLEVBQUMsV0FBVzs0QkFBQ0MsS0FBSyxFQUFFLEVBQUU7NEJBQUVDLE1BQU0sRUFBRSxFQUFFOzs7OztpQ0FBSTs7Ozs7NkJBQzlDOzs7Ozt5QkFDRDs4QkFDTCw4REFBQ0wsSUFBRTs4QkFDRCw0RUFBQ1Qsa0RBQVM7Ozs7NkJBQUU7Ozs7O3lCQUNUOzhCQUNMLDhEQUFDUyxJQUFFOztzQ0FDRCw4REFBQ0osS0FBRzs0QkFBQ1UsS0FBSyxFQUFFO2dDQUFFRixLQUFLLEVBQUUsR0FBRzs2QkFBRTtzQ0FDeEIsNEVBQUNsQixpREFBTTtnQ0FBQ3FCLFNBQVM7Z0NBQUNDLE9BQU8sRUFBQyxTQUFTO2dDQUFDQyxLQUFLLEVBQUMsTUFBTTswQ0FBQyxrQkFFakQ7Ozs7O3FDQUFTOzs7OztpQ0FDTDtzQ0FDUiw4REFBQ1QsSUFBRTtzQ0FDRCw0RUFBQ2IsaURBQU07Z0NBQ0hNLE1BQU0sRUFBRUEsTUFBTTtnQ0FDZGlCLE9BQU8sRUFBRTsyQ0FBTWhCLFNBQVMsQ0FBQyxTQUFDaUIsQ0FBQzsrQ0FBSyxDQUFDQSxDQUFDO3FDQUFBLENBQUM7aUNBQUE7Z0NBQ25DaEIsS0FBSyxFQUFFQSxLQUFLOzs7OztxQ0FBRzs7Ozs7aUNBQ2hCOzs7Ozs7eUJBQ0E7Ozs7OztpQkFDRjs7Ozs7YUFDRCxDQUNOO0FBQ0osQ0FBQztHQTlCS0gsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBZ0NaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvTmF2YmFyLmpzeD9jODU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQnVyZ2VyLCBJbWFnZSB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4vU2VhcmNoYmFyJztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aXRsZSA9IG9wZW5lZCA/ICdDbG9zZSBuYXZpZ2F0aW9uJyA6ICdPcGVuIG5hdmlnYXRpb24nO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfSA+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9sb2dvLnBuZ1wiIHdpZHRoPXs2MH0gaGVpZ2h0PXs2MH0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8U2VhcmNoYmFyLz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDE0MCB9fT5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY29sb3I9XCJncmF5XCI+XG4gICAgICAgICAgICAgIHNpZ24gdXAgLyBsb2cgaW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPEJ1cmdlciBcbiAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCgobykgPT4gIW8pfVxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9Lz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiQnV0dG9uIiwiQnVyZ2VyIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNlYXJjaGJhciIsIk5hdmJhciIsIm9wZW5lZCIsInNldE9wZW5lZCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2YmFyIiwidWwiLCJsaSIsImEiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImZ1bGxXaWR0aCIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Navbar.jsx\n"));

/***/ })

});