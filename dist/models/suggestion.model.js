"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class SuggestionModel {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.createdBy = 'system';
        this.createdWhen = new Date();
        this.modifiedBy = 'system';
        this.modifiedWhen = new Date();
    }
}
exports.default = SuggestionModel;
//# sourceMappingURL=suggestion.model.js.map