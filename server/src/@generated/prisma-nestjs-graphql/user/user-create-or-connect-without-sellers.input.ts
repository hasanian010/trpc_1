import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSellersInput } from './user-create-without-sellers.input';

@InputType()
export class UserCreateOrConnectWithoutSellersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutSellersInput, {nullable:false})
    @Type(() => UserCreateWithoutSellersInput)
    create!: UserCreateWithoutSellersInput;
}
