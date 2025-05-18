import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSellersInput } from './user-update-without-sellers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSellersInput } from './user-create-without-sellers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSellersInput {

    @Field(() => UserUpdateWithoutSellersInput, {nullable:false})
    @Type(() => UserUpdateWithoutSellersInput)
    update!: UserUpdateWithoutSellersInput;

    @Field(() => UserCreateWithoutSellersInput, {nullable:false})
    @Type(() => UserCreateWithoutSellersInput)
    create!: UserCreateWithoutSellersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
