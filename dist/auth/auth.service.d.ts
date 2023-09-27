import { LoginDto } from './dto/login.dto';
import { UsersService } from './../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register({ userName, name, password }: RegisterDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login({ userName, password }: LoginDto): Promise<{
        tokend: string;
        userName: string;
    }>;
}
