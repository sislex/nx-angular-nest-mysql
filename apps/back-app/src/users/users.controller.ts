import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll1(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body('name') name: string): Promise<User> {
        return this.usersService.create(name);
    }
}
