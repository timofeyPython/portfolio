"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("@/libs/database/models");
const Service_1 = require("@/libs/modules/Service");
const utils_1 = require("@/libs/utils");
const order_1 = require("./dto/order");
class Orders extends Service_1.Service {
    create(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [req, res, next] = args;
            try {
                const { products, price, name, surname, email, phone, delivery, montage, comments, address, } = req.body;
                yield models_1.models.Orders.create({
                    products,
                    price,
                    name,
                    surname,
                    email,
                    phone,
                    delivery,
                    montage,
                    comments,
                    address,
                });
                return res.json({ message: "Заказ оформлен !" });
            }
            catch (e) {
                next(this.internal(e.message));
            }
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
__decorate([
    (0, utils_1.checkParamBody)(order_1.DtoOrderCreate),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Orders.prototype, "create", null);
exports.default = Orders;
