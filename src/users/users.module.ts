import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, DatabaseService],
})
export class UsersModule {}
