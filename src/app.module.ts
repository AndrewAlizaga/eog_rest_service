import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AccountController } from './account/account.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AccountController],
  providers: [AppService],
})
export class AppModule {}
