import { JwtService } from '@nestjs/jwt';
import { LoginInterface } from '../users/interfaces/login.interface';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJwt(user: LoginInterface): Promise<string>;
    hashPassword(password: string): string;
    comparePassword(newPassword: string, passwordHashed: string): Promise<any>;
}
