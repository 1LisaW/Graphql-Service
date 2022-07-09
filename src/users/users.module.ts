import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [UsersService, UserResolver, ConfigService],
})
export class UsersModule {}
