"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var hello_typescript_1 = require("../components/hello-typescript");
var hello_javascript_1 = require("../components/hello-javascript");
var style = "\nbody {\n    background: linear-gradient(-45deg, #e73c7e, #23a6d5, #ee7752);\n    background-size: 400% 400%;\n    animation: gradient 10s ease infinite;\n    height: 100vh;\n}\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n@keyframes fade {\n  0% { opacity: 0 }\n  100% { opacity: 1 }\n}\n.fade-in {\n    font-size: 18px;\n    opacity: 0;\n    animation: fade 1s ease-in-out;\n    animation-fill-mode: forwards;\n}\n.fade-in-0 { animation-delay: 0s}\n.fade-in-1 { animation-delay: 4s}\n.fade-in-2 { animation-delay: 8s}\n.fade-in-3 { animation-delay: 12s}\n.fade-in-4 { animation-delay: 16s}\n.fade-in-5 { animation-delay: 20s}\nbody {\n    font-family: \"Helvetica\", sans-serif;\n    font-weight: 300;\n    color: rgba(255,255,255,0.8);\n    color: chartreuse;\n}\n.loading-screen {\n    mix-blend-mode: color-dodge;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\nh1 {\n    font-size: 10em;\n    font-weight: 900;\n    letter-spacing: -0.05em;\n}\n.title {\n    text-align: right;\n}\n.divider {\n    mix-blend-mode: lighten;\n    width: 8px;\n    background-color: chartreuse;\n    height: 507px;\n    margin-left: 5em;\n    margin-right: 3em;\n}\n";
var Home = function (_a) {
    var value = _a.value;
    var _b = react_1.useState(0), counter = _b[0], setCounter = _b[1];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setCounter(counter + 1);
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [counter, setCounter]);
    var query = react_query_1.useQuery(['example-data'], function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve('This came from react-query');
            }, 1000);
        });
    });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
        react_1["default"].createElement("div", { className: "loading-screen" },
            react_1["default"].createElement("div", { className: "panel title" },
                react_1["default"].createElement("h1", null,
                    "Typescript",
                    react_1["default"].createElement("br", null),
                    "Support!")),
            react_1["default"].createElement("div", { className: "panel" },
                react_1["default"].createElement("div", { className: "divider" })),
            react_1["default"].createElement("div", { className: "panel" },
                react_1["default"].createElement("p", { style: { width: '300px' }, className: "fade-in fade-in-0" },
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("b", null, "This page is written in Typescript"),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        "React query works if this is not empty: \"",
                        query.data,
                        "\"",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        "Server-side getProps works if this is a valid expression: \"5 times 7 is ",
                        value,
                        "\"",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        "Client-side JS works if this counter increments: ",
                        counter,
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("b", null, "You can mix-and-match JS and TS"),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement(hello_javascript_1["default"], null),
                        "\u00A0",
                        react_1["default"].createElement(hello_typescript_1["default"], { message: "it works!" })))))));
};
Home.getTemplateName = function () { return 'home'; };
Home.getProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var getData, value;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getData = function (a, b) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(a * b);
                        }, 1000);
                    });
                };
                return [4 /*yield*/, getData(5, 7)];
            case 1:
                value = _a.sent();
                return [2 /*return*/, { value: value }];
        }
    });
}); };
exports["default"] = Home;
