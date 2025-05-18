import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { SignupInput, LoginInput, VerifyPhoneInput } from './dto/auth.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async hello(): Promise<string> {
    return 'Hello from User Module!';
  }

  @Mutation(() => String)
  async signup(@Args('data') data: SignupInput): Promise<string> {
    const result = await this.userService.signup(data);
    return JSON.stringify(result);
  }

  @Mutation(() => String)
  async login(@Args('data') data: LoginInput): Promise<string> {
    const result = await this.userService.login(data);
    return JSON.stringify(result);
  }

  @Mutation(() => String)
  async verifyPhone(@Args('data') data: VerifyPhoneInput): Promise<string> {
    const result = await this.userService.verifyPhone(data);
    return JSON.stringify(result);
  }
}
