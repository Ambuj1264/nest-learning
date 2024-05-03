import { Controller, Post, Body } from '@nestjs/common';
import { Profile } from './profile.entity';
import { ApiResponse } from 'src/utility/types';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Post('/create')
  create(@Body() profile: Partial<Profile>): Promise<ApiResponse> {
    return this.profileService.create(profile);
  }
}
