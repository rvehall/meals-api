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
exports.SuggestionsController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const suggestion_model_1 = __importDefault(require("../models/suggestion.model"));
const suggestions_service_1 = require("./suggestions.service");
let SuggestionsController = class SuggestionsController {
    constructor(suggestionsService) {
        this.suggestionsService = suggestionsService;
    }
    getSuggestions(query) {
        return this.suggestionsService.getSuggestions(query);
    }
    getSuggestionById(id) {
        return this.suggestionsService.getSuggestionById(id);
    }
    createSuggestion(suggestion) {
        return this.suggestionsService.addSuggestion(suggestion);
    }
    createSuggestions(suggestions) {
        return this.suggestionsService.addSuggestions(suggestions);
    }
    updateSuggestion(suggestion) {
        return this.suggestionsService.updateSuggestion(suggestion);
    }
    deleteSuggestion(suggestion) {
        return this.suggestionsService.deleteSuggestion(suggestion);
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SuggestionsController.prototype, "getSuggestions", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuggestionsController.prototype, "getSuggestionById", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [suggestion_model_1.default]),
    __metadata("design:returntype", Promise)
], SuggestionsController.prototype, "createSuggestion", null);
__decorate([
    (0, common_2.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SuggestionsController.prototype, "createSuggestions", null);
__decorate([
    (0, common_2.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [suggestion_model_1.default]),
    __metadata("design:returntype", Promise)
], SuggestionsController.prototype, "updateSuggestion", null);
__decorate([
    (0, common_2.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [suggestion_model_1.default]),
    __metadata("design:returntype", Promise)
], SuggestionsController.prototype, "deleteSuggestion", null);
SuggestionsController = __decorate([
    (0, common_2.Controller)('suggestions'),
    __metadata("design:paramtypes", [suggestions_service_1.SuggestionsService])
], SuggestionsController);
exports.SuggestionsController = SuggestionsController;
//# sourceMappingURL=suggestions.controller.js.map