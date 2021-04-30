import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) { }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authcredentialDto: AuthCredentialsDto) {
        return this.authservice.signUp(authcredentialDto);
    }


    @Post('/signin')
    signIn(@Body(ValidationPipe) authcredentialDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authservice.signIn(authcredentialDto);
    }
}
