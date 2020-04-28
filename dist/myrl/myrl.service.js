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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const shortid = require("shortid");
const util_1 = require("util");
let MyrlService = class MyrlService {
    constructor(myrlModel) {
        this.myrlModel = myrlModel;
    }
    async findOne(urlCode) {
        const res = await this.myrlModel.findOne({ urlCode: urlCode }).then(url => {
            if (url) {
                return url.oldUrl;
            }
            else
                return 'requested url not found';
        });
        return res;
    }
    async modify(data) {
        if (data.customText.length) {
            const obj = await this.myrlModel
                .findOne({ urlCode: data.customText })
                .then(res => {
                if (res)
                    return true;
                else
                    return false;
            });
            if (obj) {
                return 'Custom text is already in use try something else';
            }
            else {
                const url = await this.myrlModel
                    .findOne({ oldUrl: data.oldUrl })
                    .then(async (res) => {
                    if (res)
                        return res.newUrl;
                    else {
                        const nrl = new this.myrlModel({
                            urlCode: data.customText,
                            oldUrl: data.oldUrl,
                            newUrl: `https://my-rl.herokuapp.com/${data.customText}`,
                        });
                        const mrl = await nrl.save().then(res => {
                            return res.newUrl;
                        });
                        return mrl;
                    }
                });
                return url;
            }
        }
        else {
            const url = await this.myrlModel
                .findOne({ oldUrl: data.oldUrl })
                .then(res => {
                if (res)
                    return res.newUrl;
                else
                    return null;
            });
            if (util_1.isNull(url)) {
                const urlCode = shortid.generate();
                const nrl = new this.myrlModel({
                    urlCode: urlCode,
                    oldUrl: data.oldUrl,
                    newUrl: `https://my-rl.herokuapp.com/${urlCode}`,
                });
                const mrl = await nrl.save().then(res => {
                    return res.newUrl;
                });
                return mrl;
            }
            else {
                return url;
            }
        }
    }
};
MyrlService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Myrl')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MyrlService);
exports.MyrlService = MyrlService;
//# sourceMappingURL=myrl.service.js.map