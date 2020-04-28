"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const myrl_service_1 = require("./myrl.service");
const myrl_controller_1 = require("./myrl.controller");
const myrl_schema_1 = require("./schemas/myrl.schema");
let MyrlModule = class MyrlModule {
};
MyrlModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Myrl', schema: myrl_schema_1.MyrlSchema }])],
        controllers: [myrl_controller_1.MyrlController],
        providers: [myrl_service_1.MyrlService],
        exports: [myrl_service_1.MyrlService],
    })
], MyrlModule);
exports.MyrlModule = MyrlModule;
//# sourceMappingURL=myrl.module.js.map