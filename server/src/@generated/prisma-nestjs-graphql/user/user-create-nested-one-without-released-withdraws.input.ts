import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReleasedWithdrawsInput } from './user-create-without-released-withdraws.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReleasedWithdrawsInput } from './user-create-or-connect-without-released-withdraws.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReleasedWithdrawsInput {

    @Field(() => UserCreateWithoutReleasedWithdrawsInput, {nullable:true})
    @Type(() => UserCreateWithoutReleasedWithdrawsInput)
    create?: UserCreateWithoutReleasedWithdrawsInput;

    @Field(() => UserCreateOrConnectWithoutReleasedWithdrawsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReleasedWithdrawsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReleasedWithdrawsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
