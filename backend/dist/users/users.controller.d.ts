import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginInterface } from './interfaces/login.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./interfaces/user.interface").IUser>;
    login(loginedUser: LoginInterface): Promise<{
        access_token: string;
        user: LoginInterface;
    }>;
    forgetPassword(): string;
    resetpassword(id: any): string;
    resetPassword(id: any, password: any): {
        password: any;
        id: any;
    };
    submitForgetPassword(usermail: string): Promise<"User Not Found" | {
        email: string;
        id: any;
    }>;
}
