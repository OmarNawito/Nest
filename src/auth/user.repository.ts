import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authcredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authcredentialsDto;

        const user = new User();
        user.username = username;
        user.password = password
        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') { //dublicate username
                throw new ConflictException('username already exists');
            }
            else {
                throw new InternalServerErrorException();
            }
        }

    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });
        if (user && await user.validatePassword(password)) {
            return user.username
        } else {
            return null;
        }

    }
}