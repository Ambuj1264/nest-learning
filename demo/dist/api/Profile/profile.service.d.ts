import { Profile } from './profile.entity';
import { ApiResponse } from 'src/utility/types';
export declare class ProfileService {
    create(profile: Partial<Profile>): Promise<ApiResponse>;
}
