import { Injectable } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AuthService {
  jwtService: any;
    jwtOptions: { secret: string; verify: { algorithms: string[]; }; };
  constructor() {
    this.jwtOptions = {
      secret: process.env.JWT_SECRET,   

      verify: { algorithms: ['HS256'] },
    };
  }

  login(user) {
    const payload = { username: user.username, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload, this.jwtOptions),
    };
  }

  validate(payload) {
    return { userId: payload.sub, username: payload.username };
  }
}
