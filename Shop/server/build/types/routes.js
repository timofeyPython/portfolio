"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERoutesType = exports.ERoutesUser = exports.ERouters = void 0;
var ERouters;
(function (ERouters) {
    ERouters["users"] = "users";
    ERouters["products"] = "products";
    ERouters["types"] = "types";
    ERouters["orders"] = "orders";
    ERouters["messages"] = "messages";
    ERouters["status"] = "status";
    ERouters["works"] = "works";
    ERouters["reviews"] = "reviews";
})(ERouters || (exports.ERouters = ERouters = {}));
var ERoutesUser;
(function (ERoutesUser) {
    ERoutesUser["reg"] = "registration";
    ERoutesUser["login"] = "login";
    ERoutesUser["check"] = "check";
})(ERoutesUser || (exports.ERoutesUser = ERoutesUser = {}));
var ERoutesType;
(function (ERoutesType) {
    ERoutesType["categories"] = "categories";
    ERoutesType["light"] = "light";
    ERoutesType["colortemps"] = "colortemps";
    ERoutesType["materials"] = "materials";
    ERoutesType["colorframes"] = "colorframes";
})(ERoutesType || (exports.ERoutesType = ERoutesType = {}));
