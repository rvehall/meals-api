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
exports.IdeaController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const idea_model_1 = __importDefault(require("../models/idea.model"));
const idea_service_1 = require("./idea.service");
let IdeaController = class IdeaController {
    constructor(ideasService) {
        this.ideasService = ideasService;
    }
    getIdeas() {
        return this.ideasService.getIdeas();
    }
    getIdeaById(id) {
        return this.ideasService.getIdeaById(id);
    }
    createIdea(idea) {
        return this.ideasService.addIdea(idea);
    }
    createIdeas(ideas) {
        return this.ideasService.addIdeas(ideas);
    }
    updateIdea(idea) {
        return this.ideasService.updateIdea(idea);
    }
    deleteIdea(idea) {
        return this.ideasService.deleteIdea(idea);
    }
};
__decorate([
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "getIdeas", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "getIdeaById", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [idea_model_1.default]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "createIdea", null);
__decorate([
    (0, common_2.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "createIdeas", null);
__decorate([
    (0, common_2.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [idea_model_1.default]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "updateIdea", null);
__decorate([
    (0, common_2.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [idea_model_1.default]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "deleteIdea", null);
IdeaController = __decorate([
    (0, common_2.Controller)('ideas'),
    __metadata("design:paramtypes", [idea_service_1.IdeaService])
], IdeaController);
exports.IdeaController = IdeaController;
//# sourceMappingURL=idea.controller.js.map