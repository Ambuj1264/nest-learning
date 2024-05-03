"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const commonfunction_1 = require("../../utility/commonfunction");
const profile_entity_1 = require("./profile.entity");
const common_1 = require("@nestjs/common");
let ProfileService = class ProfileService {
    async create(profile) {
        try {
            const { gender, photo } = profile;
            const createProfile = profile_entity_1.Profile.create({
                gender,
                photo,
            });
            await createProfile.save();
            if (!createProfile) {
                return (0, commonfunction_1.errorResponse)('profile not created', null);
            }
            return (0, commonfunction_1.sucessResponse)('profile created sucessfully', createProfile);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)()
], ProfileService);
//# sourceMappingURL=profile.service.js.map