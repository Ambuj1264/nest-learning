import { errorResponse, sucessResponse } from 'src/utility/commonfunction';
import { Profile } from './profile.entity';
import { ApiResponse } from 'src/utility/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  async create(profile: Partial<Profile>): Promise<ApiResponse> {
    try {
      const { gender, photo } = profile;
      const createProfile = Profile.create({
        gender,
        photo,
      });
      await createProfile.save();
      if (!createProfile) {
        return errorResponse('profile not created', null);
      }
      return sucessResponse('profile created sucessfully', createProfile);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
}
