"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./ui/sidebar.tsx":
/*!************************!*\
  !*** ./ui/sidebar.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/home.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bot.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst data = [\n    {\n        id: 1,\n        title: \"Home\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"w-6 h-6\"\n        }, void 0, false, {\n            fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n            lineNumber: 11,\n            columnNumber: 11\n        }, undefined),\n        route: \"/\"\n    },\n    {\n        id: 3,\n        title: \"Ask me anything\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"w-6 h-6\"\n        }, void 0, false, {\n            fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n            lineNumber: 17,\n            columnNumber: 11\n        }, undefined),\n        route: \"/ama\"\n    }\n];\nconst Sidebar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isOpen) {\n            document.body.style.overflow = \"hidden\";\n        } else {\n            document.body.style.overflow = \"auto\";\n        }\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-6 rounded-lg transition-opacity bg-stone-50 border-r\" + isOpen ? \"w-1/6\" : 0,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"m-6\",\n            children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: item.route,\n                    className: \"flex my-6 items-center hover:scale-105 transition-all justify-between rounded-md px-2 py-1 text-stone-600 hover:bg-stone-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-sm p-1\",\n                                children: item.icon\n                            }, void 0, false, {\n                                fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined),\n                            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-md\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                }, item.id, false, {\n                    fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nawedali/GitHub/sih/ui/sidebar.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"BpxTQlX32up+AFkc47ndmLcifPk=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3VpL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFbUQ7QUFDdEI7QUFDMEY7QUFFdkgsTUFBTU0sT0FBTztJQUNYO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxvQkFBTSw4REFBQ0osb0RBQUlBO1lBQUNLLFdBQVU7Ozs7OztRQUN0QkMsT0FBTztJQUNUO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLG9CQUFNLDhEQUFDTCxvREFBR0E7WUFBQ00sV0FBVTs7Ozs7O1FBQ3JCQyxPQUFPO0lBQ1Q7Q0FDRDtBQUVELE1BQU1DLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlZLFFBQVE7WUFDVkUsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRztRQUNqQyxPQUFPO1lBQ0xILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDakM7SUFDRixHQUNJO1FBQUNMO0tBQU87SUFFWixxQkFDRSw4REFBQ007UUFBSVQsV0FBVywyREFBMkRHLFNBQVUsVUFBUztrQkFDNUYsNEVBQUNPO1lBQUdWLFdBQVk7c0JBQ2JKLEtBQUtlLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ25CLGtEQUFJQTtvQkFFSG9CLE1BQU1ELEtBQUtYLEtBQUs7b0JBQ2hCRCxXQUFVOzhCQUVWLDRFQUFDUzt3QkFBSVQsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFJVCxXQUFVOzBDQUNaWSxLQUFLYixJQUFJOzs7Ozs7NEJBR1ZJLHdCQUNFLDhEQUFDVztnQ0FBS2QsV0FBVTswQ0FBV1ksS0FBS2QsS0FBSzs7Ozs7Ozs7Ozs7O21CQVZ0Q2MsS0FBS2YsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ4QjtHQXBDTUs7S0FBQUE7QUFzQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdWkvc2lkZWJhci50c3g/ZDUyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEJvb2ssIEJvb2tNYXJrZWRJY29uLCBCb3QsIEhvbWUsIE1lbnUsIE1lbnVJY29uLCBQYXBlcmNsaXAsIFRoZXJtb21ldGVySWNvbiwgVHJlbmRpbmdVcCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICBpY29uOiA8SG9tZSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz4sXG4gICAgcm91dGU6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiQXNrIG1lIGFueXRoaW5nXCIsXG4gICAgaWNvbjogPEJvdCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz4sXG4gICAgcm91dGU6IFwiL2FtYVwiLFxuICB9LFxuXTtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICB9XG4gIH1cbiAgICAsIFtpc09wZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbS02IHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1vcGFjaXR5IGJnLXN0b25lLTUwIGJvcmRlci1yYCArIGlzT3BlbiA/IGB3LTEvNmAgOiAndy0xLzEyJ30+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgbS02YH0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbTogYW55KSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGhyZWY9e2l0ZW0ucm91dGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG15LTYgaXRlbXMtY2VudGVyIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbCBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1tZCBweC0yIHB5LTEgdGV4dC1zdG9uZS02MDAgaG92ZXI6Ymctc3RvbmUtMTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0xXCI+XG4gICAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tZFwiPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkJvdCIsIkhvbWUiLCJkYXRhIiwiaWQiLCJ0aXRsZSIsImljb24iLCJjbGFzc05hbWUiLCJyb3V0ZSIsIlNpZGViYXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiZGl2IiwidWwiLCJtYXAiLCJpdGVtIiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./ui/sidebar.tsx\n"));

/***/ })

});