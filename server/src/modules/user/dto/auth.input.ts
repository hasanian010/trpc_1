import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field()
  phone: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}

@InputType()
export class LoginInput {
  @Field()
  phone: string;

  @Field()
  password: string;
}

@InputType()
export class VerifyPhoneInput {
  @Field()
  phone: string;

  @Field()
  otp: string;
}
