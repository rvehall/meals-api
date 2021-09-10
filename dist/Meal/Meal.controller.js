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
exports.MealController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const Meal_model_1 = __importDefault(require("../models/Meal.model"));
const Meal_service_1 = require("./Meal.service");
let MealController = class MealController {
    constructor(mealService) {
        this.mealService = mealService;
    }
    getMeals() {
        return this.mealService.getMeals();
    }
    getMealsByDate(date) {
        return this.mealService.getMealsByDate(date);
    }
    getMealById(id) {
        return this.mealService.getMealById(id);
    }
    createMeal(meal) {
        return this.mealService.addMeal(meal);
    }
    updateMeal(meal) {
        return this.mealService.updateMeal(meal);
    }
    deleteMeal(meal) {
        return this.mealService.deleteMeal(meal);
    }
};
__decorate([
    (0, common_3.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MealController.prototype, "getMeals", null);
__decorate([
    (0, common_3.Get)(':date'),
    __param(0, (0, common_2.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "getMealsByDate", null);
__decorate([
    (0, common_3.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "getMealById", null);
__decorate([
    (0, common_3.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Meal_model_1.default]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "createMeal", null);
__decorate([
    (0, common_3.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Meal_model_1.default]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "updateMeal", null);
__decorate([
    (0, common_3.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Meal_model_1.default]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "deleteMeal", null);
MealController = __decorate([
    (0, common_3.Controller)('meals'),
    __metadata("design:paramtypes", [Meal_service_1.MealService])
], MealController);
exports.MealController = MealController;
//# sourceMappingURL=Meal.controller.js.map