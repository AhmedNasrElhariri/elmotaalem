import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { AuthService } from 'src/auth/auth.service';
import { LoginInterface } from './interfaces/login.interface';
export declare class UsersService {
    private readonly userModel;
    private authService;
    constructor(userModel: Model<IUser>, authService: AuthService);
    createUser(newUser: CreateUserDto): Promise<IUser>;
    loginUser(loginUser: LoginInterface): Promise<{
        access_token: string;
        user: LoginInterface;
    }>;
    validateUser(loginedUser: LoginInterface): Promise<any>;
    findByMail(email: any): Promise<IUser>;
    findById(id: any): Promise<IUser>;
}
