"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionsService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const suggestion_model_1 = __importDefault(require("../models/suggestion.model"));
const _ = __importStar(require("lodash"));
let SuggestionsService = class SuggestionsService {
    async getSuggestions(query) {
        const snapshot = await firebase_admin_1.default.firestore().collection('ideas').get();
        const data = snapshot.docs.map((doc) => {
            return doc.data();
        });
        let filteredArray = [];
        if (query != {}) {
            if ((query === null || query === void 0 ? void 0 : query.searchText) != '') {
                let nameResults = data.filter((mealPrep) => mealPrep.name.toLowerCase().includes(query === null || query === void 0 ? void 0 : query.searchText.toLowerCase()));
                let tagResults = data.filter((mealPrep) => mealPrep.tags.some((t) => t.includes(query === null || query === void 0 ? void 0 : query.searchText.toLowerCase())));
                let ingredientResults = data.filter((mealPrep) => mealPrep.ingredients.some((i) => i.includes(query === null || query === void 0 ? void 0 : query.searchText.toLowerCase())));
                filteredArray = _.unionBy(nameResults, ingredientResults, tagResults, 'name');
            }
        }
        let results = query.searchText != '' ? filteredArray : data;
        return results;
    }
    async getSuggestionById(id) {
        const suggestion = new suggestion_model_1.default();
        const snapshot = await firebase_admin_1.default.firestore().collection('suggestions').doc(id).get();
        suggestion.id = snapshot.data().id;
        suggestion.photo = snapshot.data().photo;
        suggestion.tags = snapshot.data().tags;
        suggestion.ingredients = snapshot.data().ingredients;
        suggestion.name = snapshot.data().name;
        suggestion.createdBy = snapshot.data().createdBy;
        suggestion.createdWhen = snapshot.data().createdWhen;
        suggestion.modifiedBy = snapshot.data().modifiedBy;
        suggestion.modifiedWhen = snapshot.data().modifiedWhen;
        return suggestion;
    }
    async updateSuggestion(suggestion) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('suggestions')
            .doc(suggestion.id)
            .set(suggestion);
        return res.writeTime;
    }
    async addSuggestion(suggestion) {
        const res = await firebase_admin_1.default.firestore().collection('suggestions').doc();
        suggestion.id = res.id;
        res.set(suggestion);
        console.log(suggestion);
        return suggestion.id;
    }
    async addSuggestions(suggestions) {
        const ids = [];
        suggestions.forEach(async (suggestion) => {
            const res = await firebase_admin_1.default.firestore().collection('suggestions').doc();
            suggestion.id = res.id;
            res.set(suggestion);
            ids.push(suggestion.id);
        });
        return ids;
    }
    async deleteSuggestion(suggestion) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('suggestions')
            .doc(suggestion.id)
            .delete();
        return res.writeTime;
    }
};
SuggestionsService = __decorate([
    (0, common_1.Injectable)()
], SuggestionsService);
exports.SuggestionsService = SuggestionsService;
//# sourceMappingURL=suggestions.service.js.map