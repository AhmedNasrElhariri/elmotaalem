import { Injectable, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { AuthService } from 'src/auth/auth.service';
import { LoginInterface } from './interfaces/login.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
    private authService: AuthService,
  ) {}

  async createUser(newUser: CreateUserDto) {
    try {
      const newUserAdded = await new this.userModel(newUser);
      newUserAdded.password = await this.authService.hashPassword(
        newUserAdded.password,
      );
      newUserAdded.save();
      return newUserAdded;
    } catch (error) {
      throw new HttpException("can't add user", 400);
    }
  }

  async loginUser(loginUser: LoginInterface) {
    const user = await this.validateUser(loginUser);
    if (user) {
      return {
        access_token: await this.authService.generateJwt(loginUser),
        user: loginUser,
      };
    }
  }

  async validateUser(loginedUser: LoginInterface) {
    const user = await this.findByMail(loginedUser.email);
    if (user) {
      const authenticatedUser = await this.authService.comparePassword(
        loginedUser.password,
        user.password,
      );
      return authenticatedUser;
    } else {
      throw new Error('No Authenticated');
    }
  }

  async findByMail(email) {
    try {
      const userFound = await this.userModel.findOne({ email }).exec();
      return userFound;
    } catch (error) {
      throw new Error('Not Found');
    }
  }

  async findById(id) {
    try {
      const userFound = await this.userModel.findById({ _id: id }).exec();
      return userFound;
    } catch (error) {
      throw new Error('Not Found');
    }
  }
}
