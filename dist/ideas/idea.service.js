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
exports.IdeaService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const idea_model_1 = __importDefault(require("../models/idea.model"));
let IdeaService = class IdeaService {
    async getIdeas() {
        const snapshot = await firebase_admin_1.default.firestore().collection('ideas').get();
        const data = snapshot.docs.map((doc) => {
            return doc.data();
        });
        return data;
    }
    async getIdeaById(id) {
        const idea = new idea_model_1.default();
        const snapshot = await firebase_admin_1.default.firestore().collection('ideas').doc(id).get();
        idea.id = snapshot.data().id;
        idea.photo = snapshot.data().photo;
        idea.tags = snapshot.data().tags;
        idea.ingredients = snapshot.data().ingredients;
        idea.name = snapshot.data().name;
        idea.createdBy = snapshot.data().createdBy;
        idea.createdWhen = snapshot.data().createdWhen;
        idea.modifiedBy = snapshot.data().modifiedBy;
        idea.modifiedWhen = snapshot.data().modifiedWhen;
        return idea;
    }
    async updateIdea(idea) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('ideas')
            .doc(idea.id)
            .set(idea);
        return res.writeTime;
    }
    async addIdea(idea) {
        const res = await firebase_admin_1.default.firestore().collection('ideas').doc();
        idea.id = res.id;
        res.set(idea);
        console.log(idea);
        return idea.id;
    }
    async addIdeas(ideas) {
        const ids = [];
        ideas.forEach(async (idea) => {
            const res = await firebase_admin_1.default.firestore().collection('ideas').doc();
            idea.id = res.id;
            res.set(idea);
            ids.push(idea.id);
        });
        return ids;
    }
    async deleteIdea(idea) {
        const res = await firebase_admin_1.default
            .firestore()
            .collection('ideas')
            .doc(idea.id)
            .delete();
        return res.writeTime;
    }
};
IdeaService = __decorate([
    (0, common_1.Injectable)()
], IdeaService);
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map