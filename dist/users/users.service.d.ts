import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findOneByuserName(userName: string): Promise<User>;
}
