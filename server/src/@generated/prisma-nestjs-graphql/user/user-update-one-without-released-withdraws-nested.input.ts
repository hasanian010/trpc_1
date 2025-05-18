import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReleasedWithdrawsInput } from './user-create-without-released-withdraws.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReleasedWithdrawsInput } from './user-create-or-connect-without-released-withdraws.input';
import { UserUpsertWithoutReleasedWithdrawsInput } from './user-upsert-without-released-withdraws.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReleasedWithdrawsInput } from './user-update-to-one-with-where-without-released-withdraws.input';

@InputType()
export class UserUpdateOneWithoutReleasedWithdrawsNestedInput {

    @Field(() => UserCreateWithoutReleasedWithdrawsInput, {nullable:true})
    @Type(() => UserCreateWithoutReleasedWithdrawsInput)
    create?: UserCreateWithoutReleasedWithdrawsInput;

    @Field(() => UserCreateOrConnectWithoutReleasedWithdrawsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReleasedWithdrawsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReleasedWithdrawsInput;

    @Field(() => UserUpsertWithoutReleasedWithdrawsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReleasedWithdrawsInput)
    upsert?: UserUpsertWithoutReleasedWithdrawsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReleasedWithdrawsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReleasedWithdrawsInput)
    update?: UserUpdateToOneWithWhereWithoutReleasedWithdrawsInput;
}
