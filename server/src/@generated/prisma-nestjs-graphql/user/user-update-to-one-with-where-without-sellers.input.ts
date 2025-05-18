import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSellersInput } from './user-update-without-sellers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSellersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSellersInput, {nullable:false})
    @Type(() => UserUpdateWithoutSellersInput)
    data!: UserUpdateWithoutSellersInput;
}
