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
exports.MealPrepService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const mealprep_model_1 = __importDefault(require("../models/mealprep.model"));
let MealPrepService = class MealPrepService {
    async getMealPreps(user) {
        const snapshot = await firebase_admin_1.default.firestore().collection('mealPreps').where('createdBy', '==', user).get();
        const mealPreps = snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
        });
        return mealPreps ? mealPreps : [];
    }
    async getMealPrepsByDate(date) {
        const snapshot = await firebase_admin_1.default
            .firestore()
            .collection('mealPreps')
            .where('date', '==', date)
            .get();
        const mealPreps = snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
        });
        return mealPreps ? mealPreps : [];
    }
    async getMealPrepById(id) {
        const mealPrep = new mealprep_model_1.default();
        const snapshot = await firebase_admin_1.default.firestore().collection('mealPreps').doc(id).get();
        mealPrep.id = snapshot.id;
        mealPrep.date = snapshot.data().date;
        mealPrep.meal = snapshot.data().meal;
        mealPrep.name = snapshot.data().name;
        mealPrep.type = snapshot.data().type;
        mealPrep.createdBy = snapshot.data().createdBy;
        mealPrep.createdWhen = snapshot.data().createdWhen;
        mealPrep.modifiedBy = snapshot.data().modifiedBy;
        mealPrep.modifiedWhen = snapshot.data().modifiedWhen;
        return mealPrep ? mealPrep : new mealprep_model_1.default();
    }
    async updateMealPrep(mealPrep) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('mealPreps')
            .doc(mealPrep.id)
            .set(mealPrep);
        return res.writeTime;
    }
    async addMealPrep(mealPrep) {
        const res = await firebase_admin_1.default.firestore().collection('mealPreps').doc();
        mealPrep.id = res.id;
        res.set(mealPrep);
        return res.id;
    }
    async deleteMealPrep(mealPrep) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('MealPrep')
            .doc(mealPrep.id)
            .delete();
        return res.writeTime;
    }
};
MealPrepService = __decorate([
    (0, common_1.Injectable)()
], MealPrepService);
exports.MealPrepService = MealPrepService;
//# sourceMappingURL=mealprep.service.js.map