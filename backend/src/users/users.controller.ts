import { Controller, Post, Body, Get, Render, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginInterface } from './interfaces/login.interface';
import { sendEmail } from '../mails/send-emails';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('login')
  login(@Body() loginedUser: LoginInterface) {
    return this.usersService.loginUser(loginedUser);
  }

  @Get('forget-password')
  @Render('index')
  forgetPassword() {
    return '';
  }
  @Get('reset-password/:id')
  @Render('reset-password')
  resetpassword(@Param() id) {
    return '';
  }
  @Post('reset-password')
  resetPassword(@Body('id') id, @Body('password') password) {
    return { password, id };
  }

  @Post('forget-password')
  async submitForgetPassword(@Body('email') usermail: string) {
    const user = await this.usersService.findByMail(usermail);
    try {
      sendEmail(usermail, user._id);
      return { email: usermail, id: user._id };
    } catch (error) {
      return 'User Not Found';
    }
  }
}
