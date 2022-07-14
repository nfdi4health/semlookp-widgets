"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativeNameTabWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var eui_1 = require("@elastic/eui");
function AlternativeNameTabWidget(props) {
    var _this = this;
    var _a = (0, react_1.useState)([]), altLabel = _a[0], setAltLabel = _a[1];
    var term = props.term, api = props.api;
    function renderAltLabel() {
        if (altLabel != null && altLabel.length > 0) {
            var table = altLabel.map(function (value, index) { return (0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, { children: value }, value + index); });
            return table;
        }
        return (0, jsx_runtime_1.jsx)(eui_1.EuiText, { children: "No alternative names exit for this concept." }, void 0);
    }
    (0, react_1.useEffect)(function () {
        var getAltLabel = function () { return __awaiter(_this, void 0, void 0, function () {
            var altLabelData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(api, "terms?iri=").concat(term), {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                Content_Type: 'application/json',
                            },
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (response) { return response._embedded.terms[0].synonyms; })];
                    case 1:
                        altLabelData = _a.sent();
                        setAltLabel(altLabelData);
                        return [2 /*return*/];
                }
            });
        }); };
        getAltLabel().catch(function (error) { return console.log(error); });
    }, [props.api, props.term]);
    return ((0, jsx_runtime_1.jsx)(eui_1.EuiPanel, { children: (0, jsx_runtime_1.jsx)(eui_1.EuiFlexGroup, __assign({ style: { padding: 10 }, direction: "column" }, { children: renderAltLabel() }), void 0) }, void 0));
}
exports.AlternativeNameTabWidget = AlternativeNameTabWidget;
