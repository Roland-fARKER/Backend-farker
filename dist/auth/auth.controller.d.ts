import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login(loginDto: LoginDto): Promise<{
        tokend: string;
        userName: string;
    }>;
    profile(req: any): any;
}
