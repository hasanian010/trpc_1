import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSellersInput } from './user-create-without-sellers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSellersInput } from './user-create-or-connect-without-sellers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSellersInput {

    @Field(() => UserCreateWithoutSellersInput, {nullable:true})
    @Type(() => UserCreateWithoutSellersInput)
    create?: UserCreateWithoutSellersInput;

    @Field(() => UserCreateOrConnectWithoutSellersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSellersInput)
    connectOrCreate?: UserCreateOrConnectWithoutSellersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
