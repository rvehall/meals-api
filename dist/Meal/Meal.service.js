"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const meal_model_1 = __importDefault(require("../models/meal.model"));
let MealService = class MealService {
    async getMeals() {
        const snapshot = await firebase_admin_1.default.firestore().collection('meals').get();
        const data = snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
        });
        return data;
    }
    async getMealsByDate(date) {
        const snapshot = await firebase_admin_1.default
            .firestore()
            .collection('meals')
            .where('date', '==', date)
            .get();
        const data = snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
        });
        return data;
    }
    async getMealById(id) {
        const meal = new meal_model_1.default();
        const snapshot = await firebase_admin_1.default.firestore().collection('meals').doc(id).get();
        meal.id = snapshot.id;
        meal.date = snapshot.data().date;
        meal.meal = snapshot.data().date;
        meal.name = snapshot.data().name;
        meal.createdBy = snapshot.data().createdBy;
        meal.createdWhen = snapshot.data().createdWhen;
        meal.modifiedBy = snapshot.data().modifiedBy;
        meal.modifiedWhen = snapshot.data().modifiedWhen;
        return meal;
    }
    async updateMeal(meal) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('meals')
            .doc(meal.id)
            .set(meal);
        return res.writeTime;
    }
    async addMeal(meal) {
        const res = await firebase_admin_1.default.firestore().collection('meals').add(meal);
        return res.id;
    }
    async deleteMeal(meal) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('Meal')
            .doc(meal.id)
            .delete();
        return res.writeTime;
    }
};
MealService = __decorate([
    (0, common_1.Injectable)()
], MealService);
exports.MealService = MealService;
//# sourceMappingURL=Meal.service.js.map