import { Profile } from './profile.entity';
import { ApiResponse } from 'src/utility/types';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    create(profile: Partial<Profile>): Promise<ApiResponse>;
}
