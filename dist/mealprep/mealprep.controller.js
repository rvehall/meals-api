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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPrepController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const mealprep_model_1 = __importDefault(require("../models/mealprep.model"));
const mealprep_service_1 = require("./mealprep.service");
let MealPrepController = class MealPrepController {
    constructor(mealPrepService) {
        this.mealPrepService = mealPrepService;
    }
    getMealPreps(user) {
        return this.mealPrepService.getMealPreps(user);
    }
    getMealPrepsByDate(date) {
        return this.mealPrepService.getMealPrepsByDate(date);
    }
    getMealPrepById(id) {
        return this.mealPrepService.getMealPrepById(id);
    }
    createMealPrep(mealPrep) {
        return this.mealPrepService.addMealPrep(JSON.parse(mealPrep));
    }
    updateMealPrep(mealPrep) {
        return this.mealPrepService.updateMealPrep(mealPrep);
    }
    deleteMealPrep(mealPrep) {
        return this.mealPrepService.deleteMealPrep(mealPrep);
    }
};
__decorate([
    (0, common_3.Get)(':user'),
    __param(0, (0, common_2.Param)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealPrepController.prototype, "getMealPreps", null);
__decorate([
    (0, common_3.Get)(':date'),
    __param(0, (0, common_2.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealPrepController.prototype, "getMealPrepsByDate", null);
__decorate([
    (0, common_3.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealPrepController.prototype, "getMealPrepById", null);
__decorate([
    (0, common_3.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MealPrepController.prototype, "createMealPrep", null);
__decorate([
    (0, common_3.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mealprep_model_1.default]),
    __metadata("design:returntype", Promise)
], MealPrepController.prototype, "updateMealPrep", null);
__decorate([
    (0, common_3.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mealprep_model_1.default]),
    __metadata("design:returntype", Promise)
], MealPrepController.prototype, "deleteMealPrep", null);
MealPrepController = __decorate([
    (0, common_3.Controller)('preps'),
    __metadata("design:paramtypes", [mealprep_service_1.MealPrepService])
], MealPrepController);
exports.MealPrepController = MealPrepController;
//# sourceMappingURL=mealprep.controller.js.map