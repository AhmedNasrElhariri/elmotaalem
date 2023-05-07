import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginInterface } from '../users/interfaces/login.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  generateJwt(user: LoginInterface) {
    return this.jwtService.signAsync({ user });
  }
  hashPassword(password: string): string {
    return bcrypt.hash(password, 10);
  }
  async comparePassword(newPassword: string, passwordHashed: string) {
    const result = await bcrypt.compare(newPassword, passwordHashed.trim());
    return result;
  }
}
