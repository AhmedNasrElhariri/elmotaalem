import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    registrationForm(userName: String, userEmail: String, userPassword: String, userPhone: Number): Promise<string>;
}
