import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSellersInput } from './user-create-without-sellers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSellersInput } from './user-create-or-connect-without-sellers.input';
import { UserUpsertWithoutSellersInput } from './user-upsert-without-sellers.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSellersInput } from './user-update-to-one-with-where-without-sellers.input';

@InputType()
export class UserUpdateOneWithoutSellersNestedInput {

    @Field(() => UserCreateWithoutSellersInput, {nullable:true})
    @Type(() => UserCreateWithoutSellersInput)
    create?: UserCreateWithoutSellersInput;

    @Field(() => UserCreateOrConnectWithoutSellersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSellersInput)
    connectOrCreate?: UserCreateOrConnectWithoutSellersInput;

    @Field(() => UserUpsertWithoutSellersInput, {nullable:true})
    @Type(() => UserUpsertWithoutSellersInput)
    upsert?: UserUpsertWithoutSellersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSellersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSellersInput)
    update?: UserUpdateToOneWithWhereWithoutSellersInput;
}
