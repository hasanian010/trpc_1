import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReleasedWithdrawsInput } from './user-create-without-released-withdraws.input';

@InputType()
export class UserCreateOrConnectWithoutReleasedWithdrawsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutReleasedWithdrawsInput, {nullable:false})
    @Type(() => UserCreateWithoutReleasedWithdrawsInput)
    create!: UserCreateWithoutReleasedWithdrawsInput;
}
