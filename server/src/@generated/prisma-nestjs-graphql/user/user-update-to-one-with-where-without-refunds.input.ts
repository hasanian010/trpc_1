import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRefundsInput } from './user-update-without-refunds.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRefundsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRefundsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRefundsInput)
    data!: UserUpdateWithoutRefundsInput;
}
